import GithubSVG from "../UI/SVGs/Social/GithubSVG";
import LinkedInSVG from "../UI/SVGs/Social/LinkedInSVG";
import TelegramSVG from "../UI/SVGs/Social/TelegramSVG";
import classes from "./SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <section id={classes["socials"]}>
      <h1>Find Me On</h1>
      <div className={classes["social-container"]}>
        <div className={`${classes.github} ${classes.social}`}>
          <a
            href="https://github.com/kakkarot9712"
            target="_blank"
            rel="noreferrer"
          >
            <span className="svg-back">
              <GithubSVG />
            </span>
          </a>
        </div>
        <div className={`${classes.linkedin} ${classes.social}`}>
          <a
            href="https://www.linkedin.com/in/vikalp-gandha-bb9778256/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="svg-back">
              <LinkedInSVG />
            </span>
          </a>
        </div>
        <div className={`${classes.telegram} ${classes.social}`}>
          <a href="https://t.me/Kakkarto9712">
            <span className="svg-back">
              <TelegramSVG />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
