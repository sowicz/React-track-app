import Navbar from "../components/main_app/Navbar";
import Card from "../components/docs_components/Card";
import imgNode from "../assets/node-red.png";
import imgRasp from "../assets/rasp.png";
import imgReact from "../assets/reactlog.png";
import InfoRasp from "../components/docs_components/InfoRasp";
import InfoNode from "../components/docs_components/InfoNode";
import InfoReact from "../components/docs_components/InfoReact";
import { useState } from "react";


export default function Docs() {

  const [activeRasp, setActiveRasp] = useState(0);
  const [activeNode, setActiveNode] = useState(0);
  const [activeReact, setActiveReact] = useState(0);

  function activeHandler(info) {
    info == "rasp" ? setActiveRasp(1) : setActiveRasp(0)
    info == "node" ? setActiveNode(1) : setActiveNode(0)
    info == "react" ? setActiveReact(1) : setActiveReact(0)
  };

  return (
  <>
    <Navbar />
    <div className="container-xl text-center d-inline-flex">
      <div className="container-sm m5">
        <Card title={"RaspberryPi"} text={"Setting RaspberryPi with optical sensor 5V and GPIO pins"} 
          img={imgRasp} isActive={activeRasp} show={activeHandler } info={"rasp"}/>
        <Card title={"Node-red"} text={"Node-red flow digital signal from sensor, if signal is ON its trigger sending package"} 
          img={imgNode} isActive={activeNode} show={activeHandler} info={"node"}/>
        <Card title={"React"} text={"React simple dashboard to visualise sended packages online"} img={imgReact}
          isActive={activeReact} show={activeHandler} info={"react"}/>
      </div>
      <div className="container-lg my-4">
        {activeRasp ? <InfoRasp /> : null}
        {activeNode ? <InfoNode /> : null}
        {activeReact ? <InfoReact /> : null}
      </div>
    </div>

  </>
  );
};