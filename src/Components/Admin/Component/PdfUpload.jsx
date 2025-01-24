import React, { useState } from "react";
import { BASENDPOINT } from "../../../variable";

const PdfUpload = () => {
  const [file, setFile] = useState(null);
  const [details, setDetails] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload a file");

    const formData = new FormData();
    formData.append("pdf", file);

    const response = await fetch(BASENDPOINT + "/briefPDF/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      setDetails(data.extractedData);
      alert("PDF uploaded successfully!");
    } else {
      alert(data.message || "Error uploading PDF");
    }
  };

  // const downloadLastPdf = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:30000/api/briefPDF/download-last",
  //       {
  //         method: "GET",
  //         credentials: "include", // Include cookies if necessary
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to download the PDF");
  //     }

  //     // Convert response to a blob and trigger download
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = "brief.pdf"; // Default download name
  //     document.body.appendChild(a);
  //     a.click();
  //     a.remove();
  //     window.URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error("Error downloading PDF:", error);
  //   }
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <button type="submit">Upload PDF</button>
      </form>
      {/* <button onClick={downloadLastPdf}>Download Last PDF</button> */}
      {details && (
        <div>
          <h3>Extracted Topics:</h3>
          <ul>
            {details.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PdfUpload;
