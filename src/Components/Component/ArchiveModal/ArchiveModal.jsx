import { useState } from "react";
import "./ArchiveModal.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const ArchiveModal = ({ isOpen, toggleDrawer, data }) => {
  console.log(data);
  const opts = {
    height: "450",
    width: "100%",
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        className="archive_modal"
        overlayOpacity="0.5"
      >
        <div className="contents">
          <div className="left">
            <div className="student_img">
              <div className="stuImg">
                {data?.studentImg && <img src={data?.studentImg} alt="" />}
              </div>
              <div className="student_info">
                {data?.studentName && <h4>{data?.studentName}</h4>}
                {data?.studentTitle && <span>{data?.studentTitle}</span>}
              </div>
            </div>
            <div className="info">
              {data?.teamName && (
                <div className="row">
                  <span>Team Name:</span>
                  <span>{data?.teamName}</span>
                </div>
              )}
              {data?._teamId && (
                <div className="row">
                  <span>Team Number:</span>
                  <span>{data?._teamId}</span>
                </div>
              )}
              {data?.school && (
                <div className="row">
                  <span>School:</span>
                  <span>{data?.school}</span>
                </div>
              )}
              {data?.client && (
                <div className="row">
                  <span>Client:</span>
                  <span>{data?.client}</span>
                </div>
              )}
              {data?.location && (
                <div className="row">
                  <span>Location:</span>
                  <span>{data?.location}</span>
                </div>
              )}
              {data?.country && (
                <div className="row">
                  <span>Country:</span>
                  <span>{data?.country}</span>
                </div>
              )}
              {data?.year && (
                <div className="row">
                  <span>Year:</span>
                  <span>{data?.year}</span>
                </div>
              )}
              {data?.students && (
                <div className="row">
                  <span>Students:</span>
                  <span>{data?.students?.join(", ")}</span>
                </div>
              )}
              {data?.countries && (
                <div className="row">
                  <span>Countries:</span>
                  <span>{data?.countries?.join(", ")}</span>
                </div>
              )}
              {/* {data?.projectPDF && (
                <Link
                  to={data?.projectPDF}
                  target="_blank"
                  className="pdf_btn"
                  download
                >
                  Download Project
                </Link>
              )} */}
            </div>
          </div>

          <div className="right">
            <h3 className="header_title">{data?.title}</h3>
            <div className="project_info">
              {(() => {
                const combinedArray = [];
                const maxLength = Math.max(
                  data?.projectPics?.length || 0,
                  data?.desc?.length || 0
                );

                for (let i = 0; i < maxLength; i++) {
                  if (data?.projectPics?.[i]) {
                    combinedArray.push({
                      type: "image",
                      content: data.projectPics[i],
                    });
                  }
                  if (data?.desc?.[i]) {
                    combinedArray.push({ type: "desc", content: data.desc[i] });
                  }
                }

                return combinedArray.map((item, index) => {
                  if (item.type === "image") {
                    return <img src={item.content} alt="" key={index} />;
                  }
                  if (item.type === "desc") {
                    return <p key={index}>{item.content}</p>;
                  }
                  return null;
                });
              })()}
              <div className="bottom">
                {data?.videoId && (
                  <YouTube
                    videoId={data?.videoId}
                    opts={opts}
                    className="project-video"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ArchiveModal;
