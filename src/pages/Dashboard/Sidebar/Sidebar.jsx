import { useState } from "react";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="side-bar-container">
      <div className="side-bar">
        <div
          onClick={() => setCollapsed(!collapsed)}
          className="dashboard-menu"
        >
          <div className="dashboard-content">
            <MdDashboard className="dashboard-icon"></MdDashboard>
            <p>Dashboard</p>
          </div>
          <p>
            <AiOutlineRight
              className={`arrow ${!collapsed ? "" : "arrow-active"}`}
            ></AiOutlineRight>
          </p>
        </div>

        <ul
          className={`dashboard-menu-items ${
            collapsed ? "" : "dashboard-menu-items-active"
          }`}
        >
          <li className="dashboard-menu-item">
            <Link className="analytics" to={"/dashboard"}>
              All users
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden-side-bar-container">
        <div className="hidden-side-bar">
          <div className="cross">
            <AiOutlineClose className="close-icon"></AiOutlineClose>
          </div>

          <div
            onClick={() => setCollapsed(!collapsed)}
            className="dashboard-menu"
          >
            <div className="dashboard-content">
              <MdDashboard className="dashboard-icon"></MdDashboard>
              <p>Dashboard</p>
            </div>
            <p>
              <AiOutlineRight
                className={`arrow ${!collapsed ? "" : "arrow-active"}`}
              ></AiOutlineRight>
            </p>
          </div>

          <ul
            className={`dashboard-menu-items ${
              collapsed ? "" : "dashboard-menu-items-active"
            }`}
          >
            <li className="dashboard-menu-item item-active">
              <Link className="analytics" to="/">
                Analytics
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
