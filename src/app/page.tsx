import classes from "./page.module.css";
import TerminalText from "@/UI/TerminalTextAnim";
import Avatar from "@/UI/SVGs/Avatar";
import WavingHand from "./wavingHand";

export default function Home() {
  return (
    <main>
      <section id={classes.intro}>
        <h1>
          Hello, There!
          <WavingHand />
        </h1>
        <h1>
          I&apos; M <span className="color-text">VIKALP GANDHA</span>
        </h1>
        <TerminalText />
      </section>
      <section id={classes.description}>
        <div className={classes["description__text"]}>
          <h1>
            LET ME <span className="color-text">INTRODUCE</span> MYSELF
          </h1>
          <br />
          <p>
            I fell in love with programming and I have at least learnt
            something, My field of Interest&apos;s are building new{" "}
            <span className="color-text">Web Technologies and Products</span>{" "}
            Whenever possible, I also apply my passion for developing products
            with{" "}
            <em>
              <span className="color-text">
                Frontend Javascript Library and Frameworks like ReactJS,
                Angular, NextJS
              </span>{" "}
              and{" "}
              <span className="color-text">
                Backend technologies like Node.js, ExpressJS, MongoDB, Docker
                and Cloud Services like Azure and AWS.
              </span>
            </em>
          </p>
        </div>
        <div className={classes["description__avatar"]}>
          <span>
            <Avatar />
          </span>
        </div>
      </section>
    </main>
  );
}
