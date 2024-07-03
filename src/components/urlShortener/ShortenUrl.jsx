import { useRef, useState } from "react";
import "../Components.css";
import "./ShortenUrl.css";
import { FaLink } from "react-icons/fa6";
import urlServices from "../../services/urlService";
const ShortenUrl = () => {
  const [url, setUrl] = useState("");
  const closeModalRef = useRef();

  const handleSubmit = () => {
    urlServices
      .shortenUrl(url)
      .then((response) => {
        if (response.status === 201) {
          alert(response.data.message);
          setUrl("");
          closeModalRef.current.click();
          window.location.reload();
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="dashboard-card url-shorten-container">
      <div className="title">
        <h4 className="text">Shorten URL</h4>
      </div>
      <div className="button-container">
        <button
          className="shorten-button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Shorten
        </button>
      </div>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Shorten Url
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeModalRef}
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-container">
                <FaLink />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter URL:"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortenUrl;
