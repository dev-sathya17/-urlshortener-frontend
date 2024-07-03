import { useLoaderData, useNavigate } from "react-router-dom";
import urlService from "../services/urlService";
// import { useState } from "react";
import Header from "../components/Header";
import userServices from "../services/userServices";

export const urlLoader = async () => {
  const response = await urlService.getUrls();
  const data = await response.data;
  return data;
};

const ViewURLs = () => {
  const { urls } = useLoaderData();
  const navigate = useNavigate();
  console.log(urls);
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
    <div>
      <Header handleLogout={handleLogout} page={"Dashboard"} />
      <table className="table table-responsive table-hover">
        <thead className="table-success">
          <tr>
            <th>SL. NO.</th>
            <th>URL</th>
            <th>SHORT URL</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, index) => (
            <tr key={url._id}>
              <td>{index + 1}</td>
              <td>
                <a href={url.url} target="_blank">
                  {url.url}
                </a>
              </td>
              <td>
                <a href={url.identifier}>{url.identifier}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewURLs;
