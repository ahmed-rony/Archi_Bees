// import SuckingCircle from "../AnimationLoop/AnimationLoop";
import { Link } from "react-router-dom";
import AnimationLoop from "../AnimationLoop/AnimationLoop";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import "./Banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="content">
        <h1>Shaper of Spaces</h1>
        <AnimationLoop />
        <Link to="/brief">
          <CountdownTimer hours={120} minutes={0} seconds={0} />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
