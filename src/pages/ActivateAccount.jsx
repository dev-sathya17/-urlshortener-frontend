import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userServices from "../services/userServices";

const ActivateAccount = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    userServices
      .activateUser(id)
      .then((response) => {
        alert(response.data.message);
        navigate("/login");
      })
      .catch((error) => {
        alert(error);
      });
  });

  return <div>ActivateAccount</div>;
};

export default ActivateAccount;
