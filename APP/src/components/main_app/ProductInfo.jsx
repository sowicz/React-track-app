
const style = {
  fontSize: '1rem',
  width: "300px",
  position: "fixed",
  top: "25%",
  left: "1100px",
  cursor: "default"
};

const bootstrapStyling = `
  container
  text-center
  text-black
  shadow
  p-3 
  bg-body-tertiary 
  rounded
`;


export default function ProductInfo({idx, message, handleClose}) {

  const obj = JSON.parse(message)
  // const timestamp = parseInt(obj.payload)
  const date = new Date(Number(obj.payload)).toLocaleDateString();
  const time = new Date(Number(obj.payload)).toLocaleTimeString();

  return (
    <div 
      className={bootstrapStyling} 
      style={style}
      >
      <div className="">

        <p><b>Number:</b> {idx}</p>
        <p><b>Date:</b> {date}</p>
        <p><b>Time:</b> {time}</p>
        <p><b>Is Send:</b> {obj.topic ? "True" : "False"}</p>
         
      </div>
      <div className="align-self-end">
        <button type="button" className="btn btn-secondary mt-5" onClick={() =>handleClose(idx)}>Close</button>
      </div>
    </div>
    );
  
};