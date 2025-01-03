import Publicationcard from "../../Component/PublicationCard/PublicationCard";
import "./PublicationPage.scss";

const PublicationPage = () => {
  return (
    <div className="Publication_page">
      <div className="container">
      <h3 className="header_title">Student Work</h3>
        <div className="content">
          <Publicationcard />
        </div>
      </div>
    </div>
  );
};

export default PublicationPage;
