import MainContent from "../pages/Dashboard/MainContent/MainContent";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <Sidebar></Sidebar>
      <MainContent></MainContent>
    </section>
  );
};

export default Dashboard;
