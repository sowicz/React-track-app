import rpiImg from "../../assets/rpi.jpg"

export default function InfoRasp() {

  const btstrapStyle={
    height: "580px"
  };

  return (
    <div className="bg-light-subtle rounded border border-1 p-5 overflow-auto" style={btstrapStyle}>
      <h1>Raspberry Pi</h1>
        <h3 className="mt-5">Description</h3>
      <div className="text-start">
        <p>Install Raspberry pi system with node-red.
        <br />
        Connect optical sensor 5V directly to GPIO 5V power, GND, and GPIO pin.</p>
        <div>
          <img src={rpiImg} alt="" className="img-fluid" />
        </div>
      </div>
    </div>

  );
}