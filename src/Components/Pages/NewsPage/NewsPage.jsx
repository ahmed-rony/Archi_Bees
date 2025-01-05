import { Link } from "react-router-dom";
import "./NewsPage.scss";
import { News_Data } from "../../Utils/Datas/News";

const NewsPage = () => {
  

  return (
    <div className="blog_list container">
      <h3 className="header_title">News</h3>
      <div className="content">
        {News_Data?.map((item, index) => (
          <div className="item" key={index}>
            <div className="info">
              <Link
                to={item.link}
                className="details_info"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{item.date}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </Link>
            </div>
            <Link
              to={item.link}
              className="image"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.image} alt={item.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
