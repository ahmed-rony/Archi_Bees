import "./PublicationCard.scss";
import { Publication_Data } from "../../Utils/Datas/Publication";
import ArchiveModal from "../ArchiveModal/ArchiveModal";
import { useState } from "react";

const Publicationcard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const toggleDrawer = (data = null) => {
    setSelectedData(data);
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      {Publication_Data?.map((data, i) => (
        <div to={"/"} key={i} onClick={() => toggleDrawer(data)}>
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
      <ArchiveModal
        isOpen={isOpen}
        toggleDrawer={() => toggleDrawer()}
        data={selectedData}
      />
    </>
  );
};

export default Publicationcard;
