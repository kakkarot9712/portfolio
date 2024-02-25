import Avatar from "../UI/SVGs/Avatar";
import classes from "./Description.module.css";

const Description = () => {
  return (
    <section id={classes.description}>
      <div className={classes["description__text"]}>
        <h1>
          LET ME <span className="color-text">INTRODUCE</span> MYSELF
        </h1>
        <br />
        <p>
          I fell in love with programming and I have at least learnt something,
          My field of Interest's are building new{" "}
          <span className="color-text">Web Technologies and Products</span>{" "}
          Whenever possible, I also apply my passion for developing products
          with{" "}
          <em>
            <span className="color-text">
              Frontend Javascript Library and Frameworks like ReactJS, Angular
            </span>{" "}
            and{" "}
            <span className="color-text">
              Backend technologies like Node.js, ExpressJS, MongoDB, Docker and
              Cloud Services like Azure and AWS.
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
  );
};

export default Description;
