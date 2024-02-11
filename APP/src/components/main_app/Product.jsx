import ProductInfo from "./ProductInfo";
import boxImg from "../../assets/Office_-12_icon-icons.com_73953.png";

const divStyling = {
  width: '30px',
  height: '45px',
  cursor: 'pointer',
  fontSize: '12px'
};

const boxStyling = {
  width: '25px',
  height: '25px'
};

const falseBoxStyling = {
  width: '25px',
  height: '25px',
  opacity: '0.4'
}

const bootstrapStyling = `
  text-success
  text-opacity-75
  not-active
  my-1
  mx-1
  text-center
  product_item  
  bg-opacity-75
  rounded-circle
`;

const active = `
  rounded
  border border-secondary-subtle border-1
  acttive
  my-1
  mx-1
  text-center 
  shadow
`;

export default function Product({isActive, onSelect, num, message, handleClose}) {

  const obj = JSON.parse(message)

  return (
    <div
      className={isActive ? active : bootstrapStyling} 
      onClick={onSelect}
      style={divStyling} 
    > 
      {obj.topic ?
        <img style={boxStyling} src={boxImg} alt="" /> :
        <img style={falseBoxStyling} src={boxImg} alt="" />
      }
      {isActive ? <ProductInfo idx={num} message={message} handleClose={handleClose}/> : undefined}
      {num}
    </div>

  );
};