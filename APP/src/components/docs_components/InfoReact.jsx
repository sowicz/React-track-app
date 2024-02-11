export default function InfoReact() {

  const btstrapStyle={
    height: "580px"
  };

  return (
    <div className="bg-light-subtle rounded border border-1 p-5 overflow-auto" style={btstrapStyle}>
      <h1>React</h1>
        <h3 className="mt-5">Description</h3>
      <div className="text-start">
        <p>
          Application can track real packages going on the line and by exteral sensor trigger show
          packages inside window. Main screen is table with production day, each day is devided per 3 shifts. <br />
          Time period of shifts can be changed. It can be 8hour. For test is just one minute per shift. <br />
          After this period time, signal from sensor start appear in next shift. <br />
          You can manually add day by clicking button below table. <br />
          Add new day provide new row which start tracking from this time you add day. <br />
          It could be changed for proper day of month or other day/time depends on needs <br /> 
          Target button color depends on percentage of sended packages. Can be changed depends on needs <br />
          <br />
          Build in on VITE + Bootstrap. 
          <p className="fw-bold">Warning. This packages is not saving in database yet.</p>
          <p>That mean if you refresh page sended triggered data (sended packages) is lost.</p>
        </p> <br />
        <p>
          <h3  >How to run:</h3><br />
          Install dependencies.<br />
        </p>  
        <p>Create .env file (exact file name ".env" without 'process') inside 'APP' catalogue. <br />
          <b>Inside .env file type:</b> <br />
          VITE_WEBSOCKET_URL=ws://localhost:1880/ws/test <br /> <br />
          If you have node-red on other server/raspberry Pi you need to type IP address of your machine,
            with port (default port node-re 1880)
        </p>
        <p>
          Start project: npm run dev <br />  
          Start node-red by terminal <br />
          If you have external sensor, check node-red section (chose GPIO in GPIO-node) <br />
          Refresh (reload) web-page <br />
          Trigger sensor and you can see incrementing Target and click it to see package appear with details.
        </p> <br />
      </div>
    </div>
  );
};