import React, { useRef, useState } from "react";
import Header from "components/Header";
import ExternalInfo from "components/ExternalInfo";

const CancelableFetchRequest = () => {
  const abortController = useRef(null);

  const [uploading, setUploading] = useState(false);

  const uploadFile = async ({ target: { files } }) => {
    let data = new FormData();
    data.append("file", files[0]);

    try {
      setUploading(true);
      abortController.current = new AbortController();

      const response = await fetch("https://file.io?expires=1m", {
        signal: abortController.current.signal,
        method: "POST",
        body: data,
      });
      await response.json();
      setUploading(false);
    } catch (error) {
      setUploading(false);
      console.log(JSON.stringify(error));

      if (error.name === "AbortError") {
        alert("Request aborted by user");
      }
    }
  };

  const cancelRequest = () =>
    abortController.current && abortController.current.abort();

  return (
    <>
      <Header title="Canelable fetch request (Cancelable File Upload)" />
      
      <ExternalInfo page="cancelableFetch" />

      <div className="row justify-content-center bg-light">
        <div className="col-md-5 text-center">
          <h2>Cancelable Fetch Request</h2>

          <p>
            You can upload a sample file to check the cancelable file upload
          </p>
          <input
            type="file"
            className="form-control profile-pic-uploader"
            onChange={uploadFile}
          />
          {uploading && (
            <div className="row mt-3">
              <div className="col pt-1">
                Uploading your file, please wait...
              </div>
              <div className="col-auto">
                <span
                  className="text-primary cursor-pointer"
                  onClick={() => cancelRequest()}
                >
                  Cancel
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CancelableFetchRequest;
