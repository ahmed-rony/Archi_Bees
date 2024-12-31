import "./About_Sec.scss";
import img01 from "/images/3.jpg";
import img02 from "/images/6.jpg";

const About_Sec = () => {
  return (
    <section className="about_sec" style={{ backgroundImage: `url(${img02})` }}>
      <div className="container">
        <div className="left">
          {/* <div className="sec_title"></div> */}
          <h2 className="sec_title">
            <span>1</span>About Us
          </h2>
          <div className="about_img">
            <img src={img01} alt="" />
            <div className="img_source">
              <span>Cafe Render //</span>
              <span>commercial Area</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right_title">
            <h4>
              Lorem, ipsum dolor <span className="slash">//</span>
            </h4>
            <p>Lorem ipsum dolor sit amet consect.</p>
          </div>
          <div className="right_desc">
            <div className="item"></div>
            <div className="item">
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="item">
              <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
              <p>
                Lorem, ipsum dolor sit amet sfsf consectetur adipisicing dggfd
                elit. Accusam?
              </p>
            </div>
            <div className="item">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                aliquam, magni debitis temporibus explicabo ut ipsa voluptatibus
                maxime unde quia at sapiente voluptates saepe ad tempore velit
                iste? Porro illo quasi maxime quidem dolore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Sec;
