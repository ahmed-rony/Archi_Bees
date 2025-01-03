import { Link } from "react-router-dom";
import "./Brief_Task.scss";
import img01 from "/images/11.jpg";
import img02 from "/images/12.jpg";
import img03 from "/images/013.jpg";

const Brief_Task = () => {
  return (
    <div className="brief_task">
      <h3 className="header_title">The Task</h3>
      <div className="content">
        <div className="left">
          <div className="item">
            <div className="list_num">
              <h5>01</h5>
            </div>
            <div className="list_desc">
              <h4>Define</h4>
              <p>
                In today’s context, how would you go about developing a National
                Art Museum for Andorra? What would the most deciding factors be?
                Write a text in any way you’d like. Use a maximum of 200 words
              </p>
            </div>
          </div>
          <div className="item">
            <div className="list_num">
              <h5>02</h5>
            </div>
            <div className="list_desc">
              <h4> Designate</h4>
              <p>
                Give your project an appropriate name!
                <br />
                <Link to="/">abc.com </Link>
                (In this folder you will find pre-made material that you may use
                in your project, including a site-plan, section and a 3D-model,
                an ortophoto, illustrator-file and DTM-file)
              </p>
            </div>
          </div>
          <div className="item">
            <div className="list_num">
              <h5>03</h5>
            </div>
            <div className="list_desc">
              <h4>Design</h4>
              <p>
                Create a design concept for the new National Art Museum of
                Andorra on the designated site in Andorra La Vella. <br />
                <br />
                Program: Spaces for temporary and permanent exhibitions, and
                other functions you find necessary. Scale: Larger than a
                matchbox, smaller than Andorra. <br />
                <br />
                Illustrate your project using at least two of the following:
                <ul>
                  <li>Plan</li>
                  <li>Site Plan</li>
                  <li>Section</li>
                  <li>Elevation</li>
                  <li>Detail</li>
                  <li>Model photo</li>
                  <li>Illustration</li>
                  <li>Render/visualization</li>
                  <li>Diagram</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={img01} alt="" />
          <img src={img02} alt="" />
          <h6>
            Ideation <span>Process</span>
          </h6>
        </div>
      </div>
      <div className="site">
        <h3 className="header_title">Site</h3>
        <div className="site_content">
          <div className="left">
            <p>
              The site for the future National Art Museum of Andorra is on the
              area bordered by Carrer de Sant Salvador, Carrer de la Borda, and
              Carrer de Bra. Riberaygua.
            </p>
          </div>
          <div className="right" />
        </div>
        <img src={img03} className="site_img" alt="" />
      </div>
      <div className="evo_format">
        <div className="left">
          <h3 className="header_title">EVALUATION</h3>
          <p>
            Evaluation of your entry will be based on the following criteria:
          </p>
          <ul>
            <li>Vision and concept.</li>
            <li>Critical reflection.</li>
            <li>
              Presentation: Your idea should be clear and well represented in
              order to be evaluated in a short time.
            </li>
          </ul>
        </div>
        <div className="right">
          <h3 className="header_title">FORMAT</h3>
          <p>
            Your proposal must be presented on two landscape oriented A3 sheets.
            All text must be in English. All delivered material must be marked
            with your team ID, presented clearly in the bottom right-hand corner
            of BOTH A3 sheets. Your entry must not include ANY information that
            may give away your identity.
            <br />
            <br />
            Your A3 sheets must be uploaded to Submittable within the deadline
            of Saturday 6th of April 2024 at 14.00 (UTC+2). See the “Delivery”
            section on the next side for more information on file names and
            sizes.
            <br />
            <br />
            Any infringements of the instructions above will lead to automatic
            disqualification, and the proposal will not be considered by the
            jury.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brief_Task;
