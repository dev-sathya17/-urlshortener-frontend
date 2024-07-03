import { useEffect } from "react";
import { useParams } from "react-router-dom";
import urlServices from "../services/urlService";

const Redirect = () => {
  const { identifier } = useParams();

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await urlServices.redirect(identifier);
      } catch (error) {
        console.error("Error redirecting:", error);
      }
    };
    fetchUrl();
  }, [identifier]);

  return <div>Redirecting...</div>;
};

export default Redirect;
