import { useState } from "react";
import "./MemberModal.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const MemberModal = ({ isOpen, toggleDrawer, member, jury }) => {
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="center"
        className="member_modal"
      >
        <div className="modal_content" style={jury == "jury" ? { color: "#fff", background: "#222222" } : {background: "#f2efe8"}}>
          <div className="top">
            <div className="member_img">
              <img src={member?.image} alt="" />
              <div className="img_info">
                <h4>{member?.name}</h4>
                <span>{member?.role}</span>
                <h5>{member?.details}</h5>
              </div>
            </div>
          </div>
          <div className="middle">
            <p>{member?.description}</p>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MemberModal;
