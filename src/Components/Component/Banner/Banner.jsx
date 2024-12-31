// import SuckingCircle from "../AnimationLoop/AnimationLoop";
import AnimationLoop from "../AnimationLoop/AnimationLoop";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import "./Banner.scss";

const Banner = () => {
    return (
        <section className="banner">
            <div className="content">
                <h1>Shaper of Spaces</h1>
                <AnimationLoop />
                <CountdownTimer hours={120} minutes={0} seconds={0} />
            </div>
        </section>
    );
};

export default Banner;

// using reactjs and scss i want to make an advance animation loop. so  help with proper understanding. the animation will be like - a circle is of 200px-200px is sucking things into it's middle point. so in every 10sec a text will be around the circle as bend, then it'll be sucked by the circle. the sucking will be like the text will be stretched into the circle middle and it'll be vanished like a worm hole. so the text will be stretched like it's every letter will be sucked randomly and for instance the text is "ARCH" so maybe "R" will be randomly sucked first and "R"s bottom will be stretched into the middle of the circle but it's top will be as it was for 1sec, then after 1sec whole "R" will be sucked and the animation will be so smooth. please pay attention to the details, it's might need some JS code on reactjs too including scss(css). so pay attention to hte details