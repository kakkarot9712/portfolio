import SkillsetsRenderer from "../UI/SkillsetsRenderer";

const Skillsets = () => {
  const SkillData = [
    "Angular",
    "JavaScript",
    "Bootstrap",
    "HTML",
    "CSS",
    "Python",
    "C Language",
  ];

  return (
    <SkillsetsRenderer
      skills={SkillData}
      heading={{
        normal: "Languages and Frameworks",
        highlighted: "I Know",
      }}
    />
  );
};

export default Skillsets;
