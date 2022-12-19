import { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import SkillsetsRenderer from "../UI/SkillsetsRenderer";

const Toolsets = () => {
  const {
    isLoading,
    err,
    data: Tools,
    sendReq,
  } = useHttp((res) => res.data.tools);
  let content = <h1>Tools Fetching Failed!</h1>;

  useEffect(() => {
    sendReq(`${process.env.REACT_APP_SERVER_URL}/tools`);
  }, []);

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  if (err) {
    content = <h1>{err}</h1>;
  }

  if (Tools.length !== 0) {
    content = (
      <SkillsetsRenderer
        skills={Tools}
        heading={{
          normal: "Tools",
          highlighted: "I Use",
        }}
      />
    );
  }

  return content;
};

export default Toolsets;
