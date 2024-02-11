import { useState } from "react";

export default function TimePeriodBtn({submit, setTarget}) {
  
  const [valueMin, setValueMin] = useState(1);
  const [valueTarget, setValueTarget] = useState(20);
  
  
  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add day</button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Enter data</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <form>
                <div className="mb-3">
                  <div>
                    <label className="col-form-label d-flex justify-content-center">Minutes per shift:</label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <input type="number"
                      defaultValue={1}
                      min={1} 
                      max={20} 
                      className="form-control" 
                      style={{width: '60%'}} 
                      id="minutes"
                      onChange={(e) => setValueMin(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="col-form-label d-flex justify-content-center">Target for shifts:</label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <input type="number"
                      defaultValue={20}
                      min={20} 
                      max={100} 
                      step={10}
                      className="form-control" 
                      style={{width: '60%'}} 
                      id="setTarget"
                      onChange={(e) => setValueTarget(e.target.value)}
                    />
                  </div>
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {valueMin <1 || valueTarget <20 ? 
                <button type="button" className="btn btn-primary" disabled data-bs-dismiss="modal">Add</button> :
                <button type="button" className="btn btn-primary" onClick={()=>submit(valueMin, valueTarget)} data-bs-dismiss="modal">Add</button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}