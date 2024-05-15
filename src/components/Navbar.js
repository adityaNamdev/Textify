import React from 'react';
import{Link ,NavLink} from "react-router-dom";
export default function Navbar() {

  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand my-10"  id="ok"to="/"><span id="logoStart">Texti</span><span id="logoEnd">Fy</span><sub>/</sub></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link  text-center" aria-current="page" to="/" id='homeColor'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-center"to="/about"id='aboutColor'>About</NavLink>
        </li>
      </ul>
      </div>
  </div>
</nav>
</>
  )
}
