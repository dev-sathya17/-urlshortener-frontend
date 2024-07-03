import "../Components.css";
import "./CurrentCount.css";
const CurrentCount = ({ count }) => {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <div className="dashboard-card count-container">
      <div className="title-container">
        <h3 className="title-text">{`${day}-${month}-${year}`}</h3>
      </div>
      <div className="count-container">
        <h1 className="count-text">{count}</h1>
      </div>
    </div>
  );
};

export default CurrentCount;
