import React, { useEffect, useState } from "react";

const PdfDetails = () => {
  const [pdfData, setPdfData] = useState(null);
  const pdfId = "67928971f409e2772151a64d";

  useEffect(() => {
    const fetchPdfData = async () => {
      try {
        const response = await fetch(`/api/briefPDF/${pdfId}`);
        const data = await response.json();

        if (response.ok) {
          setPdfData(data);
        } else {
          alert(data.message || "Error fetching PDF details");
        }
      } catch (error) {
        console.error("Error fetching PDF details:", error);
      }
    };

    fetchPdfData();
  }, [pdfId]);

  if (!pdfData) return <p>Loading...</p>;

  return (
    <div>
      <h2>PDF Details</h2>
      <p>Original Name: {pdfData.originalName}</p>
      <h3>Extracted Titles</h3>
      <ul>
        {pdfData.titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
      <h3>Extracted Images</h3>
      <div>
        {pdfData.images.map((image, index) => (
          <img
            key={index}
            src={`/PDFuploads/images/${image.split("/").pop()}`}
            alt={`Extracted ${index}`}
            width="200"
          />
        ))}
      </div>
    </div>
  );
};

export default PdfDetails;
