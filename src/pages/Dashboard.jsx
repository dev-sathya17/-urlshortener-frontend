import { useEffect, useState } from "react";
import BarChartComponent from "../components/BarChartComponent";
import "./Dashboard.css";
import urlServices from "../services/urlService";
import CurrentCount from "../components/count/CurrentCount";
import ShortenUrl from "../components/urlShortener/ShortenUrl";
import userServices from "../services/userServices";
import { useLoaderData, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export const userLoader = async () => {
  try {
    const response = await userServices.getProfile();
    return response.data.user;
  } catch (error) {
    return null;
  }
};

const getCurrentMonth = () => {
  const date = new Date();
  let currentMonth = `${date.getMonth() + 1}`;
  currentMonth.length === 1
    ? (currentMonth = `0${currentMonth}`)
    : currentMonth;
  return `${currentMonth}`;
};

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState(getCurrentMonth());
  const [currentCount, setCurrentCount] = useState();
  const user = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    urlServices
      .getUrlCount(`${new Date().getFullYear()}-${month}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    urlServices
      .getTodayUrlCount()
      .then((response) => {
        setCurrentCount(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [month]);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      userServices.logout().then((response) => {
        if (response.status === 200) {
          navigate("/login");
        }
      });
    } else {
      return;
    }
  };

  return (
    <>
      <Header handleLogout={handleLogout} page={"ViewURLS"} />
      <div className="dashboard-container">
        <div className="bar-chart-container dashboard-card">
          <select
            defaultValue={month}
            onChange={(e) => setMonth(e.target.value)}
            className="month"
          >
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <BarChartComponent data={data} />
        </div>
        <div className="aside-stats">
          <div>
            <ShortenUrl />
          </div>
          <div>
            <CurrentCount count={currentCount} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
