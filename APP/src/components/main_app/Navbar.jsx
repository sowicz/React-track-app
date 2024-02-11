import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to={'/'}>Tracker</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link active" to={'/'}>Home</NavLink>
          <NavLink className="nav-link" to={'/docs'}>Docs</NavLink>
          {/* <a className="nav-link" href="#">Pricing</a> */}
        </div>
      </div>
      </div>
    </nav>
  );
};