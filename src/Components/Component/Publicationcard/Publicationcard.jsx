import "./PublicationCard.scss";
import { Publication_Data } from "../../Utils/Datas/Publication";
import ArchiveModal from "../ArchiveModal/ArchiveModal";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Publicationcard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const [studentWorks, setStudentWorks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [year, setYear] = useState("");

  const fetchStudentWorks = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "http://localhost:30000/api/studentWork",
        {
          params: {
            page,
            limit: 10,
            searchQuery,
            year,
          },
        }
      );

      console.log("Fetched student works:", data);

      if (data && Array.isArray(data.studentWorks)) {
        setStudentWorks(data.studentWorks); // Always set fresh data
        setTotalCount(data.totalCount);
      } else {
        setStudentWorks([]); // Clear data if response is invalid
      }
    } catch (error) {
      console.error("Error fetching student works", error);
    } finally {
      setLoading(false);
    }
  }, [page, searchQuery, year]);

  // Fetch data whenever filters or page change
  useEffect(() => {
    fetchStudentWorks();
  }, [page, searchQuery, year, fetchStudentWorks]);

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
    if (studentWorks.length < totalCount && !loading) {
      setPage((prev) => prev + 1);
    }
  };
  const toggleDrawer = (data = null) => {
    setSelectedData(data);
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="Publication_card">
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
        
        <div className="item_card">
          {studentWorks?.map((data, i) => (
            <div
              to={"/"}
              onScroll={(e) => {
                const isBottom =
                  e.target.scrollHeight - e.target.scrollTop ===
                  e.target.clientHeight;
                if (isBottom) loadMoreData();
              }}
              key={i}
              onClick={() => toggleDrawer(data)}
            >
              <div className="Publication-item">
                <img src={data?.projectPics[0]} alt="" />
                <div className="info">
                  <span>{data?.studentName}</span>
                  <h4>
                    {data?.title?.length > 70
                      ? `${data?.title?.substring(0, 35)}..`
                      : data?.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ArchiveModal
          isOpen={isOpen}
          toggleDrawer={() => toggleDrawer()}
          data={selectedData}
        />
      </div>
    </>
  );
};

export default Publicationcard;
