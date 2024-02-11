import { useState } from "react"; 
import { useEffect } from "react"; 

export default function Card({title, text, img,show, info}) {
  
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  const styleBtstrap = {
    maxWidth: "450px",
    maxHeight: "400px"
  };
  const styleIMG ={
    width: "30%"
  };


  return (
    <div className="my-4">
      <div className="card mb-3 shadow-sm" style={styleBtstrap}>
        <div className="row g-0">
          <div className="col-md-3" >
            <img src={img} className="img-fluid rounded auto d-block" style={windowSize < 770 ? styleIMG : null} alt="..." />
          </div>
          <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <button className="btn btn-primary" onClick={()=>show(info)} >Check</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};