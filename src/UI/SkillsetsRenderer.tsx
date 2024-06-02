// import SkillData from "@/types/SkillData";
import Image from "next/image";
import classes from "./SkillsetsRenderer.module.css";

type SkillsetsRendererProps = {
  // TODO: Fix Type
  skills: any[];
};

const SkillsetsRenderer = (props: SkillsetsRendererProps) => {
  const SkillData = props.skills;
  const formatName = (str: string) => {
    return str.toLowerCase().replace(" ", "-");
  };

  return (
    <section className={classes.skillsets}>
      <div className={classes["skillsets__info"]}>
        {SkillData.map((rawSkill) => {
          let skill = rawSkill.toObject();
          return (
            <div key={skill._id} className={classes["skillset__box"]}>
              <span className={classes["svg-skill"]}>
                <Image
                  src={`data:image/svg+xml;base64,${skill.svg_data}`}
                  alt={formatName(skill.name) + "-logo"}
                  fill
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
