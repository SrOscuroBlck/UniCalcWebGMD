import React from "react";

function Sidebar(props) {

  return (
    <aside className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
      <i className="uil-bars close-aside d-md-none d-lg-none" data-close="show-side-navigation1"></i>
      <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
        <img
          className="rounded-pill img-fluid"
          width="65"
          src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance"
          alt=""
        />
        <div className="ms-2">
          <h5 className="fs-6 mb-0">
            <a className="text-decoration-none" href="#">{props.user.email}</a>
          </h5>
          <p className="mt-1 mb-0">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>


      <ul className="categories list-unstyled">
        <li className="">
          <i className="uil-estate fa-fw"></i><a href="#"> Dashboard</a>
        </li>
        <li className="">
          <i className="uil-folder"></i><a href="#"> File manager</a>
        </li>
        <li className="">
          <i className="uil-calendar-alt"></i><a href="#"> Calender</a>
        </li>
        <li className="">
          <i className="uil-envelope-download fa-fw"></i><a href="#"> Mailbox</a>
        </li>
        <li className="">
          <i className="uil-shopping-cart-alt"></i><a href="#"> Ecommerce</a>
        </li>
        <li className="">
            <i className="uil-user"></i><a href="#"> User</a>
        </li>
        <li className="">
            <i className="uil-file-alt"></i><a href="#"> Pages</a>
        </li>
        <li className="">
            <i className="uil-chart-pie"></i><a href="#"> Charts</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
