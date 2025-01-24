import { useCallback, useEffect, useState } from "react";
import "./Archive.scss";
import axios from "axios";
import ArchiveModal from "../../Component/ArchiveModal/ArchiveModal";
// import { ArchiveData } from "../../Utils/Datas/ArchiveData";

const Archive = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const [archive, setArchive] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  console.log("archive:", archive);
  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [year, setYear] = useState("");

  const fetchArchive = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "http://localhost:30000/api/archive",
        {
          params: {
            page,
            limit: 10,
            searchQuery,
            year,
          },
        }
      );


      if (data && Array.isArray(data.archive)) {
        setArchive(data.archive); // Always set fresh data
        setTotalCount(data.totalCount);
      } else {
        setArchive([]); // Clear data if response is invalid
      }
    } catch (error) {
      console.error("Error fetching student works", error);
    } finally {
      setLoading(false);
    }
  }, [page, searchQuery, year]);

  // Fetch data whenever filters or page change
  useEffect(() => {
    fetchArchive();
  }, [page, searchQuery, year, fetchArchive]);

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim().length >= 3) {
      setSearchQuery(searchTerm);
      setPage(1); // Reset to page 1 for new search
    } else if (e.key === "Enter") {
      console.log("Search query must be at least 3 characters long.");
    }
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1); // Reset to page 1 for new search
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    setPage(1); // Reset to page 1 for new filter
  };

  const loadMoreData = () => {
    if (archive?.length < totalCount && !loading) {
      setPage((prev) => prev + 1);
    }
  };
  const toggleDrawer = (data = null) => {
    setSelectedData(data);
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="archive">
        <div className="container">
          <h3 className="header_title">Archive</h3>
          <div className="filter">
            {/* Search Input */}
            <input
              type="text"
              className="search-box"
              placeholder="Search by Name, Title or School"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyPress}
            />

            {/* Year Filter Dropdown */}
            <select
              className="year_filter"
              name="years"
              id="years"
              value={year}
              onChange={handleYearChange}
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
              {archive?.length > 0 ? (
                archive?.map((data, index) => (
                  <tr
                    onScroll={(e) => {
                      const isBottom =
                        e.target.scrollHeight - e.target.scrollTop ===
                        e.target.clientHeight;
                      if (isBottom) loadMoreData();
                    }}
                    key={index}
                    onClick={() => toggleDrawer(data)}
                  >
                    <td>{data?.year}</td>
                    <td className="truncate">{data?.title}</td>
                    <td className="truncate">{data?.school}</td>
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
      <ArchiveModal
        isOpen={isOpen}
        toggleDrawer={() => toggleDrawer()}
        data={selectedData}
      />
    </>
  );
};

export default Archive;
