import RepoIconSVG from "./SVGs/RepoIcon";
import classes from "./RepoIcon.module.css";

const RepoIcon = () => {
  return (
    <div className={classes["portfolio-repo"]}>
      <a
        role="button"
        tabIndex={0}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/kakkarot9712/portfolio"
      >
        <RepoIconSVG />
      </a>
    </div>
  );
};

export default RepoIcon;
