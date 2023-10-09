import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import Topbar from "../pages/Dashboard/TopBar/Topbar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <div className="dashboard-container desktop-max">
        <div className="side">
          <Sidebar></Sidebar>
        </div>

        <div className="top-outlet-container">
          <Topbar></Topbar>
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
