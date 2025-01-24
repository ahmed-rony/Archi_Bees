// import SuckingCircle from "../AnimationLoop/AnimationLoop";
import { Link } from "react-router-dom";
import AnimationLoop from "../AnimationLoop/AnimationLoop";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import "./Banner.scss";
import useTimer from "../../Utils/Hooks/TimeHook";

const Banner = () => {
  const timeLeft = useTimer("get-timer");

  return (
    <section className="banner">
      <div className="content">
        <h1>Shaper of Spaces</h1>
        <AnimationLoop />
        <Link to="/brief">
          <CountdownTimer hours={timeLeft.hours} minutes={timeLeft.minutes} seconds={timeLeft.seconds} />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
