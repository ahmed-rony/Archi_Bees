import { useState } from "react";
import PublicationCard from "../../Component/PublicationCard/PublicationCard";
import "./PublicationPage.scss";

const PublicationPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // const filteredData = ArchiveData?.filter((item) => {
  //   const matchesSearchQuery =
  //     !searchQuery || // No search query
  //     item.title.toLowerCase().includes(searchQuery.toLowerCase()) || // Matches title
  //     item.school.toLowerCase().includes(searchQuery.toLowerCase()); // Matches school

  //   const matchesYear = !selectedYear || item.year.toString() === selectedYear;

  //   return matchesSearchQuery && matchesYear; // Must match both filters
  // });

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchTerm.length >= 3) {
      setSearchQuery(searchTerm);
    }
  };
  return (
    <div className="Publication_page">
      <div className="container">
        <h3 className="header_title">Student Work</h3>
        
        <div className="content">
          <div className="cards">

          <PublicationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationPage;
