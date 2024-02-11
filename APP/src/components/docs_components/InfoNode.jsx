import gpioImg from "../../assets/GPIO.png";
import flow from "../../assets/flow.png";


export default function InfoNode() {

  const btstrapStyle={
    height: "580px"
  };

  return (
    <div className="bg-light-subtle rounded border border-1 p-5 overflow-auto" style={btstrapStyle}>
      <h1>Node-red</h1>
        <h3 className="mt-5">Description</h3>
      <div className="text-start">
        <p>
          *Important - There is function (in node-red flow) to randomly send "false" package to
          simulate not sended box (you can see semi transparent box in react app).
        </p>
        <p>
          Connect to Raspberry Pi and open node-red.
          <br />
          Open manage palette and download GPIO for Raspberry Pi.
          <br />
          Download node-red flow and import it to your node-red in Raspberry Pi.
          <br />
          </p>
          <p>
          Flow has 2 group.
          <br />
          1 group is manual trigger for testing (no need signal from sensor)
          <br />
          2 group is automatic trigger if sensor is triggered sending singnal via websocket to react
        </p>
        <div>
          <img src={flow} alt="" className="img-fluid" />
        </div>
        <p className="mt-5">
          Open GPIO in node and chose GPIO pin where you connect sensor to your Raspberry pi
        </p>
        <div>
          <img src={gpioImg} alt="" className="img-fluid" />
        </div>
      </div>
    </div>


  );
}