import { useState } from "react";
import MemberModal from "../MemberModal/MemberModal";
import "./Jury.scss";

const Jury = ({ team }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const juryData = [
    {
      name: "Lewis Abraham",
      role: "Architect",
      image: "/images/jury/1.jpg",
      details: "PhD (MIT), M.Sc (Stanford)",
      description:
        "Lewis Abraham is a renowned architect known for his innovative designs and contributions to sustainable architecture.",
    },
    {
      name: "Anna Smith",
      role: "Interior Designer",
      image: "/images/jury/2.jpg",
      details: "B.A (RISD)",
      description:
        "Anna Smith specializes in modern interior design and has been featured in numerous international publications.",
    },
    {
      name: "John Doe",
      role: "Urban Planner",
      image: "/images/jury/3.jpg",
      details: "M.Plan (UCL)",
      description:
        "John Doe is a leading urban planner who focuses on creating smarter and more efficient cities.",
    },
    {
      name: "Tareq Rahman",
      role: "Architect",
      image: "/images/jury/4.jpg",
      details: "PhD (UniMelb), M.Sc (KULeuven)",
      description:
        "Tareq Rahman is an architect with expertise in heritage conservation and modern architectural practices.",
    },
  ];

  const team_images = [
    {
      name: "Lewis Abraham",
      role: "Architect",
      image: "/images/jury/1.jpg",
      details: "PhD (MIT), M.Sc (Stanford)",
      description:
        "Lewis Abraham is a renowned architect known for his innovative designs and contributions to sustainable architecture. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem odio dolores corporis tempora exercitationem accusamus iure est. Ratione aperiam officia ab nostrum dolores, quibusdam adipisci maxime qui sapiente praesentium! Ratione vitae exercitationem temporibus aperiam perferendis! Fugit harum obcaecati quisquam explicabo soluta repudiandae aliquid quia, illum perferendis dolorem delectus, modi pariatur molestiae. Placeat magnam cumque modi dolore adipisci qui dicta. Quia?",
    },
    {
      name: "John Doe",
      role: "Interior Designer",
      image: "/images/jury/2.jpg",
      details: "B.A (RISD)",
      description:
        "Anna Smith specializes in modern interior design and has been featured in numerous international publications.",
    },
    {
      name: "Anna Smith",
      role: "Urban Planner",
      image: "/images/jury/3.jpg",
      details: "M.Plan (UCL)",
      description:
        "John Doe is a leading urban planner who focuses on creating smarter and more efficient cities.",
    },
    {
      name: "Lewis Abraham",
      role: "Architect",
      image: "/images/jury/1.jpg",
      details: "PhD (MIT), M.Sc (Stanford)",
      description:
        "Lewis Abraham is a renowned architect known for his innovative designs and contributions to sustainable architecture.",
    },
    {
      name: "John Doe",
      role: "Interior Designer",
      image: "/images/jury/2.jpg",
      details: "B.A (RISD)",
      description:
        "Anna Smith specializes in modern interior design and has been featured in numerous international publications.",
    },
    {
      name: "Anna Smith",
      role: "Urban Planner",
      image: "/images/jury/3.jpg",
      details: "M.Plan (UCL)",
      description:
        "John Doe is a leading urban planner who focuses on creating smarter and more efficient cities.",
    },
  ];

  const toggleDrawer = (member = null) => {
    setSelectedMember(member);
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="jury" style={team == "team" ? { paddingTop: "0" } : {}}>
        {team == "team" ? "" : <h3 className="header_title">JURY</h3>}
        <div className="gallery">
          {(team == "team" ? team_images : juryData)?.map((member, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{ backgroundImage: `url(${member?.image})` }}
              onClick={() => toggleDrawer(member)}
            >
              <h4>
                {member?.name} <span>{member?.role}</span>
              </h4>
            </div>
          ))}
        </div>
      </div>
      <MemberModal
        isOpen={isOpen}
        toggleDrawer={() => toggleDrawer()}
        member={selectedMember}
        jury={team == "team" ? null : "jury"}
      />
    </>
  );
};

export default Jury;
