import BarChartComponent from "../components/BarChartComponent";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="bar-chart-container">
        <BarChartComponent />
      </div>
      <div>
        <div>Create url</div>
        <div>Count per day</div>
      </div>
    </div>
  );
};

export default Dashboard;
