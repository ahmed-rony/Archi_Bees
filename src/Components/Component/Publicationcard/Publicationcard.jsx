import "./PublicationCard.scss";
import { Link } from "react-router-dom";
import { Publication_Data } from "../../Utils/Datas/Publication";

const Publicationcard = () => {
  return (
    <>
      {Publication_Data?.map((data, i) => (
        <Link to={"/"} key={i}>
          <div className="Publication-item">
            <img src={data?.PublicationCover} alt="" />
            <div className="info">
              <span>{data?.userName}</span>
              <h4>
                {data?.title?.length > 70
                  ? `${data?.title?.substring(0, 35)}..`
                  : data?.title}
              </h4>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Publicationcard;
