import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Team.scss";
import img01 from "/images/10.jpg";

const Team = () => {
  const settings = {
    dots: false,
    fade: false,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <div className="team">
      <div className="container">
        <Slider {...settings}>
          <div className="slide_item">
            <img src={img01} alt="" />
            <div className="team_info">
              <h4>
                Tareq Rahman<span>Founder</span>
              </h4>
            </div>
          </div>
          <div className="slide_item">
            <img src={img01} alt="" />
            <div className="team_info">
              <h4>
                Tareq Rahman<span>Founder</span>
              </h4>
            </div>
          </div>
          <div className="slide_item">
            <img src={img01} alt="" />
            <div className="team_info">
              <h4>
                Tareq Rahman<span>Founder</span>
              </h4>
            </div>
          </div>
          <div className="slide_item">
            <img src={img01} alt="" />
            <div className="team_info">
              <h4>
                Tareq Rahman<span>Founder</span>
              </h4>
            </div>
          </div>
          <div className="slide_item">
            <img src={img01} alt="" />
            <div className="team_info">
              <h4>
                Tareq Rahman<span>Founder</span>
              </h4>
            </div>
          </div>
          <div className="slide_item">
            <img src={img01} alt="" />
            <div className="team_info">
              <h4>
                Tareq Rahman<span>Founder</span>
              </h4>
            </div>
          </div>
          <div className="slide_item">
            <img src={img01} alt="" />
            <div className="team_info">
              <h4>
                Tareq Rahman<span>Founder</span>
              </h4>
            </div>
          </div>
          <div className="slide_item">
            <img src={img01} alt="" />
            <div className="team_info">
              <h4>
                Tareq Rahman<span>Founder</span>
              </h4>
            </div>
          </div>
          {/* {slideImg.map((pic) => (
          <div key={pic.urlImg} className="slide_img">
            <img src={pic.urlImg} alt="" />
          </div>
        ))} */}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
