import Wsocket from './Wsocket';
import { useState } from "react";


const stylingBad = `
btn btn-danger
`;

const stylingYellow = `
btn btn-warning
`;

const StylingSuccess = `
btn btn-success
`

const noData = `
btn btn-secondary
`

export default function Tracker_btn({startDate, endDate, shift, target, day}) {


  const [targetQty, setTargetQty] = useState(0)
  const [sendBox, setSendBox] = useState(0)


  function handleTarget(quantity) {
    setTargetQty(quantity);
  };
  function handleGood(quantity) {
    setSendBox(quantity)
  }

  const opts = 'disabled' 


  return (
  <>
    <button type="button" className={
      //40,80,80 this is percentage to change color of the button
      !sendBox ? noData :
      sendBox <= 40*target/100 ? stylingBad :
      sendBox <= 80*target/100 ? stylingYellow :
      sendBox > 80*target/100 ? StylingSuccess : null                             
      } 
      disabled={!sendBox} 
      data-bs-toggle="modal" data-bs-target={`#exampleModal_${day}${shift}`}  >
      Target {sendBox}/{target}
    </button>

    <div className="modal fade" id={`exampleModal_${day}${shift}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header d-flex flex-column">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <h1 className="modal-title fs-5" id="exampleModalLabel">Shift: {shift}</h1>
            <p className="modal-title fs-5" id="exampleModalLabel">Total boxes: {targetQty}/{target}</p>
            <p className="modal-title fs-5" id="exampleModalLabel">Sended: {sendBox}/{target}</p>
            <p className="modal-title fs-6" id="exampleModalLabel">Percent sended: {Math.floor(sendBox/target*100)}%</p>
          </div>
          <div className="modal-body">
            <Wsocket startDate={startDate} endDate={endDate} handleTarget={handleTarget} handleGood={handleGood}/>
          </div>
          <div className="modal-footer">
            <button type="button" 
              className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};