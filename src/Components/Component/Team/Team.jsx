import "./Team.scss";
// import { useState } from "react";
// import MemberModal from "../MemberModal/MemberModal";
import Jury from "../Jury/Jury";

const Team = () => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const settings = {
  //   dots: false,
  //   fade: false,
  //   autoplay: true,
  //   arrows: false,
  //   infinite: true,
  //   speed: 10000,
  //   autoplaySpeed: 0,
  //   cssEase: "linear",
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   pauseOnHover: false,
  // };
  return (
    <>
      <div className="team">
        <div className="container">
          <h2 className="sec_title">
            2<span>Team</span>
          </h2>
          <Jury team={"team"} />
          {/* <Slider {...settings}>
            <div className="slide_item" onClick={openModal}>
              <img src={img01} alt="" />
              <div className="team_info">
                <h4>
                  Tareq Rahman<span>Founder</span>
                </h4>
              </div>
            </div>
            <div className="slide_item" onClick={openModal}>
              <img src={img01} alt="" />
              <div className="team_info">
                <h4>
                  Tareq Rahman<span>Founder</span>
                </h4>
              </div>
            </div>
            <div className="slide_item" onClick={openModal}>
              <img src={img01} alt="" />
              <div className="team_info">
                <h4>
                  Tareq Rahman<span>Founder</span>
                </h4>
              </div>
            </div>
            <div className="slide_item" onClick={openModal}>
              <img src={img01} alt="" />
              <div className="team_info">
                <h4>
                  Tareq Rahman<span>Founder</span>
                </h4>
              </div>
            </div>
            <div className="slide_item" onClick={openModal}>
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
          {/* </Slider> */}
        </div>
      </div>
      {/* <MemberModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} /> */}
    </>
  );
};

export default Team;
