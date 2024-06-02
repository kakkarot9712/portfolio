import SkillsetsRenderer from "@/UI/SkillsetsRenderer";
import { getLanguages } from "../lib/helpers";

const Skillsets = async () => {
  const skills = await getLanguages();
  if (skills.error) {
    return <h1 style={{ color: "white" }}>Data fetching Failed!</h1>;
  }
  return <SkillsetsRenderer skills={skills.data || []} />;
};

export default Skillsets;
