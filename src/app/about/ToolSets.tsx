import SkillsetsRenderer from "@/UI/SkillsetsRenderer";
import { getTools } from "../lib/helpers";

const Toolsets = async () => {
  const tools = await getTools();
  if (tools.error) {
    return <h1 style={{ color: "white" }}>Data fetching Failed!</h1>;
  }
  return <SkillsetsRenderer skills={tools.data || []} />;
};

export default Toolsets;
