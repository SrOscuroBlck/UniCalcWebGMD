import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid mx-2">
        <div className="navbar-header">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggle-navbar" aria-controls="toggle-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <i className="uil-bars text-white"></i>
          </button>
          <a className="navbar-brand" href="#">admin<span className="main-color">kit</span></a>
        </div>
        <div className="collapse navbar-collapse" id="toggle-navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Settings
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">My account</a>
                </li>
                <li><a className="dropdown-item" href="#">My inbox</a>
                </li>
                <li><a className="dropdown-item" href="#">Help</a>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Log out</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="uil-comments-alt"></i><span>23</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="uil-bell"></i><span>98</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i data-show="show-side-navigation1" className="uil-bars show-side-btn"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
