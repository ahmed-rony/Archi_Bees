import "./Jury.scss";

const Jury = ({ team }) => {
  const jury_images = [
    "/images/jury/1.jpg",
    "/images/jury/2.jpg",
    "/images/jury/3.jpg",
    "/images/jury/4.jpg",
  ];
  const team_images = [
    "/images/jury/1.jpg",
    "/images/jury/2.jpg",
    "/images/jury/3.jpg",
    "/images/jury/4.jpg",
    "/images/jury/1.jpg",
    "/images/jury/4.jpg",
  ];

  return (
    <div className="jury" style={team == "team" ? { paddingTop: "0" } : {}}>
      {team == "team" ? "" : <h3 className="header_title">JURY</h3>}
      <div className="gallery">
        {(team == "team" ? team_images : jury_images)?.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            style={{ backgroundImage: `url(${image})` }}
          >
            <h4>
              Lewis Abraham <span>Architect</span>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jury;
