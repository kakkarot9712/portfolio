import SkillsetsRenderer from "../UI/SkillsetsRenderer";

const Skillsets = () => {
  const SkillData = [
    {
      id: 8,
      name: "ReactJS",
    },
    {
      id: 9,
      name: "NodeJS",
    },
    {
      id: 10,
      name: "ExpressJS",
    },
    {
      id: 11,
      name: "MongoDB-Mongoose",
    },
    {
      id: 1,
      name: "Angular",
    },
    {
      id: 2,
      name: "JavaScript",
    },
    {
      id: 3,
      name: "Bootstrap",
    },
    {
      id: 4,
      name: "CSS",
    },
    {
      id: 5,
      name: "HTML",
    },
    {
      id: 6,
      name: "Python",
    },
    {
      id: 7,
      name: "C Language",
    },
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
