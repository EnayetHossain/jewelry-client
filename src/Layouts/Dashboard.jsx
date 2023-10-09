import { Outlet } from "react-router-dom";
import useRole from "../Hooks/useRole";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import Topbar from "../pages/Dashboard/TopBar/Topbar";
import "./Dashboard.css";

const Dashboard = () => {
  const role = useRole();
  console.log(role);

  return (
    <section className="dashboard-section">
      <div className="dashboard-container desktop-max">
        <div className="side">
          <Sidebar role={role}></Sidebar>
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
