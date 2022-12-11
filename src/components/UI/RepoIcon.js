import RepoIconSVG from "./SVGs/RepoIconSVG";
import classes from "./RepoIcon.module.css";

const RepoIcon = () => {
  return (
    <div>
      <a
        className={classes["portfolio-repo"]}
        role="button"
        tabIndex="0"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/kakkarot9712/portfolio-website"
      >
        <RepoIconSVG />
      </a>
    </div>
  );
};

export default RepoIcon;
