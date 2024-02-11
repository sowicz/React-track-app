import Navbar from "../components/main_app/Navbar";
import Tracker_table from "../components/main_app/Tracker_table";


const styling = {
  width: '50%'
}

export default function App() {

  return (
  <>
    <Navbar/>
    <div className="my-5"></div>
    <div className="container-sm my-5" style={styling}>
      <Tracker_table />
    </div>
  </>
  );
};