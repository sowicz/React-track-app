import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import Product from './product';


const bootstrapStyling =`
  container-sm  
  d-flex flex-row 
  align-items-start 
  flex-wrap
`;


export default function Wsocket({ startDate, endDate, handleTarget, handleGood}) {
  //Public API that will echo messages sent to it back to the client

  const socketUrladress = import.meta.env.VITE_WEBSOCKET_URL;

  const [socketUrl, setSocketUrl] = useState(socketUrladress);
  const [messageHistory, setMessageHistory] = useState([]);
  const [selected, setSelected] = useState(false);
  const [sendBox, setSendBox] = useState([]);


  const { sendMessage, lastMessage } = useWebSocket(
    socketUrl, {
      onOpen: () => {console.log('opened')},
      onClose: ()=> {console.log('closed')}
    }
    );


  useEffect(() => {
    if (lastMessage !== null) {
      const data = JSON.parse(lastMessage.data);
      
      if (data.payload >= startDate && data.payload < endDate){
        setMessageHistory((prev) => prev.concat(lastMessage)); 
          
      } else if(data.payload>= endDate){
        setSocketUrl(null);
      }
    };
  }, [lastMessage, setMessageHistory]);


  function handleSelect(idProduct) {
    // console.log(messageHistory[idProduct])
    if (selected || selected === 0 ) {
      // setSelected(false)
    } else {
      setSelected(idProduct)
    }; 
  };


  function handleClose(idProduct) {
    if (selected || selected === 0 ) {
      setSelected(false)
    };
  };
  
  // below sending message to websocket (node-red)
  // const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);
  let sendboxTrue = null;

  function sendBoxHandler() {  
    let obj = JSON.parse(lastMessage.data)
    setSendBox((prev) => [...prev, obj.topic])
  };


  useEffect(()=> {
    if(lastMessage){
      sendboxTrue = sendBox.filter((x)=> x).length
      handleGood(sendboxTrue)
      console.log(sendboxTrue)
    }
  }, [sendBox]);

  
  return (
    <div className='mx-5' >
      <div className={bootstrapStyling} >
        {messageHistory.map((message, idx) => (
          <span key={idx+1} onLoad={()=>(handleTarget(idx+1), sendBoxHandler())} >
              <Product
              num={idx+1} 
              message={message.data} 
              isActive={selected===idx} 
              onSelect={()=>handleSelect(idx)} 
              handleClose={handleClose}
              />  
          </span> 
        ))}
      </div>
    </div>
  )
};