import { useState } from "react";
import Tracker_btn from "./Tracker_btn";
import TimePeriodBtn from "./TimePeriodBtn";


let timestampNow = Date.now();

export default function Tracker_table() {  

  const startDate = 1704124560000;
  const shift1_End = timestampNow+15000;
  const addTime = 15000;

    const [row , setRow] = useState([
      [],
      [
        {shift:1, startDate: startDate, endDate: shift1_End, target: 30},
        {shift:2, startDate: shift1_End, endDate: shift1_End+addTime, target: 30},
        {shift:3, startDate: shift1_End+addTime, endDate: shift1_End+addTime*2, target: 30}
      ],
    ]);

  
  function rowHandler(min, setTarget) {
    let datenow = Date.now();
    let minStamp = min*6000;
    setRow((prevrow) => [...prevrow, 
      [
        {shift:1, startDate: datenow, endDate: datenow+minStamp, target: setTarget},
        {shift:2, startDate: datenow+minStamp, endDate: datenow+minStamp*2, target: setTarget},
        {shift:3, startDate: datenow+minStamp*2, endDate: datenow+minStamp*3, target: setTarget}
      ]
    ])
    
  }
  const setTarget = null;
   
  return (
    <div className="container-sm border border-2 rounded-4 shadow bg-body" style={{minWidth: "305px"}}>
      <table className="table table-sm my-3">
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">1st</th>
            <th scope="col">2nd</th>
            <th scope="col">3rd</th>
          </tr>
        </thead>
        <tbody>
            {row.map((day, idday) => (
              <tr key={idday}>
                {idday ? <th scope="row">{idday}</th> : null }
                 {row[idday].map((data, idx) => (
                  <td key={idx}>
                    <Tracker_btn 
                      shift={data.shift} 
                      startDate={data.startDate} 
                      endDate={data.endDate} 
                      target={data.target}
                      day={idday}
                    />
                  </td>
                ))}   
              </tr>
            ))}
            <tr>           
            </tr>

        </tbody>
      </table>
      <div className="m-4">
      <TimePeriodBtn submit={rowHandler} setTarget={setTarget} />
      </div>
    </div>
  );
};