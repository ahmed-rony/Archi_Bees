import Brief_Desc from "../../Component/Brief_Desc/Brief_Desc";
import Brief_Task from "../../Component/Brief_Task/Brief_Task";
import Delivery from "../../Component/Delivery/Delivery";
import Jury from "../../Component/Jury/Jury";
import "./Brief.scss";

const Brief = () => {
  return (
    <section className="brief">
      <div className="container">
        <Brief_Desc />
        <Brief_Task />
        <Jury />
        <Delivery />
        <h3 className="header_title" style={{paddingTop:"80px", textAlign:"center", fontSize:"70px"}}>GOOD LUCK!</h3>
      </div>
    </section>
  );
};

export default Brief;
