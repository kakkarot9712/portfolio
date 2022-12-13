import RepoIconSVG from "../UI/SVGs/RepoIconSVG";
import classes from "./PortfolioInfo.module.css";

const PortfolioInfo = () => {
  return (
    <section>
      <div className={classes["portfolio-info"]}>
        <h2>Note</h2>
        <p>
          This Project {"("}My Portfolio{")"} is also part of my work, this
          project is using HTML, CSS and Angular. Bootstrap is not used. source
          code of this project can be accesed by clicking on button{" "}
          <span className={classes["svg-span"]}>
            <RepoIconSVG />
          </span>{" "}
          at right side of the header, I have used some 3rd party module {"("}
          pdf-js{")"} and Javascript snippets {"("}CSS Terminal Text Effect{")"}{" "}
          and that is mentioned in project readme.md and inside credits.txt file
          at the root of source code.
        </p>
      </div>
    </section>
  );
};

export default PortfolioInfo;
