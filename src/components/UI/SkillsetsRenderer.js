import classes from "./SkillsetsRenderer.module.css";

const SkillsetsRenderer = (props) => {
  const SkillData = props.skills;
  const formatName = (str) => {
    return str.toLowerCase().replace(" ", "-");
  };

  const getPath = (str) => {
    let formattedName = formatName(str);
    return `assets/svgs/${formattedName}.svg`;
  };

  return (
    <section className={classes.skillsets}>
      <h1>
        {props.heading.normal}{" "}
        <span className="color-text">
          <strong>{props.heading.highlighted}</strong>
        </span>{" "}
      </h1>
      <div className={classes["skillsets__info"]}>
        {SkillData.map((skill) => {
          return (
            <div key={skill.id} className={classes["skillset__box"]}>
              <span className={classes["svg-skill"]}>
                <img
                  src={getPath(skill.name)}
                  alt={formatName(skill.name) + "-logo"}
                />
              </span>
              <p className={classes["more-size"]}> {skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsetsRenderer;
