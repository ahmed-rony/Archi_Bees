import "./Delivery.scss";
import img01 from "/images/delivery/1.png";
import img02 from "/images/delivery/2.png";
import img03 from "/images/delivery/3.png";

const Delivery = () => {
  return (
    <div className="delivery">
      <h3 className="header_title">DELIVERY</h3>
      <div className="content">
        <div className="top">
          <p>
            <strong>Please read this information very carefully.</strong> You
            are going to make ONE file for the upload process:
          </p>
          <p>
            <strong>
              One high-resolution PDF containing both A3 sheets for your
              project. <br />
              The maximum file size is 20MB for this file.
            </strong>
          </p>
          <p>
            THE NAME OF THE FILE YOU SHALL USE IS:{" "}
            <strong>*teamXXXX.pdf *replace XXXX with your own team ID.</strong>
          </p>
        </div>
        <div className="middle">
          <div className="item">
            <img src={img01} alt="" />
            <p>
              YES
              <br />
              Landscape format
            </p>
          </div>
          <div className="item">
            <img src={img02} alt="" />
            <p>
              NO
              <br />
              Portrait format
            </p>
          </div>
          <div className="item">
            <img src={img03} alt="" />
            <p>
              Write the team ID
              <br />
              on both A3 sheets
            </p>
          </div>
        </div>
        <div className="bottom">
          <p>
            IF YOU FAIL TO FOLLOW THESE INSTRUCTIONS WE WILL AUTOMATICALLY
            DISQUALIFY YOUR ENTRY, SO PLEASE MAKE SURE THAT YOU HAVE USED THE
            CORRECT FILE NAME WHEN YOU UPLOAD YOUR PROJECT. YOU WILL ONLY BE
            ABLE TO UPLOAD YOUR PROJECT ONCE, SO BE SURE TO CHECK THAT YOU ARE
            UPLOADING THE RIGHT FILE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
