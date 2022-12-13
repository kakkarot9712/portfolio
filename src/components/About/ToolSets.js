import SkillsetsRenderer from "../UI/SkillsetsRenderer";

const Toolsets = () => {
  const Tools = [
    "VS Code",
    "IntelliJ Idea",
    "GitHub",
    "Replit",
    "Codepen",
    "Firebase",
    "Postman",
  ];

  return (
    <SkillsetsRenderer
      skills={Tools}
      heading={{
        normal: "Tools",
        highlighted: "I Use",
      }}
    />
  );
};

export default Toolsets;
