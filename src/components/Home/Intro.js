import TerminalText from "../UI/TerminalTextAnim";
import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <section id={classes.intro}>
      <h1>
        Hello, There!
        <span role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h1>
      <h1>
        I' M <span className="color-text">VIKALP GANDHA</span>
      </h1>
      <TerminalText />
    </section>
  );
};

export default Intro;
