import { useState } from "react";
import "./Archive.scss";

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Stores the term for filtering
  const [selectedYear, setSelectedYear] = useState("");

  const data = [
    { year: 2024, title: "Lorem ipsum dolor sit, amet consectetur adipisicing", school: "Harvard University" },
    { year: 2023, title: "amet consectetur adipisicing", school: "Yale University" },
    { year: 2022, title: "Dolor sit amet", school: "Stanford University" },
    { year: 2024, title: "Lorem ipsum dolor sit, amet consectetur adipisicing", school: "Harvard University" },
    { year: 2023, title: "amet consectetur adipisicing", school: "Yale University" },
    { year: 2022, title: "Dolor sit amet", school: "Stanford University" },
    { year: 2024, title: "Lorem ipsum dolor sit, amet consectetur adipisicing", school: "Harvard University" },
    { year: 2023, title: "amet consectetur adipisicing", school: "Yale University" },
    { year: 2022, title: "Dolor sit amet", school: "Stanford University" },
    { year: 2024, title: "Lorem ipsum dolor sit, amet consectetur adipisicing", school: "Harvard University" },
    { year: 2023, title: "amet consectetur adipisicing", school: "Yale University" },
    { year: 2022, title: "Dolor sit amet", school: "Stanford University" },
  ]
  // Advanced Filter Logic
  const filteredData = data.filter((item) => {
    const matchesSearchQuery =
      !searchQuery || // No search query
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || // Matches title
      item.school.toLowerCase().includes(searchQuery.toLowerCase()); // Matches school

    const matchesYear = !selectedYear || item.year.toString() === selectedYear;

    return matchesSearchQuery && matchesYear; // Must match both filters
  });

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchTerm.length >= 3) {
      setSearchQuery(searchTerm);
    }
  };

  return (
    <div className="archive">
      <div className="container">
        <div className="filter">
          {/* Search Input */}
          <input
            type="text"
            className="search-box"
            placeholder="Search by Title or School"
            value={searchTerm}
            onChange={handleSearchInput}
            onKeyDown={handleSearchSubmit} // Triggers filtering on "Enter"
          />

          {/* Year Filter Dropdown */}
          <select
            className="year_filter"
            name="years"
            id="years"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">All Years</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>

        {/* Data Table */}
        <table className="data-table">
          <thead>
            
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th>School</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.year}</td>
                  <td className="truncate">{item.title}</td>
                  <td className="truncate">{item.school}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No results found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Archive;
