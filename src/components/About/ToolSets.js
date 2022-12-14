import SkillsetsRenderer from "../UI/SkillsetsRenderer";

const Toolsets = () => {
  const Tools = [
    {
      id: 1,
      name: "VS Code",
    },
    {
      id: 2,
      name: "IntelliJ Idea",
    },
    {
      id: 3,
      name: "GitHub",
    },
    {
      id: 4,
      name: "Replit",
    },
    {
      id: 5,
      name: "Codepen",
    },
    {
      id: 6,
      name: "Firebase",
    },
    {
      id: 7,
      name: "Postman",
    },
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
