import { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import SkillsetsRenderer from "../UI/SkillsetsRenderer";

const Skillsets = () => {
  const {
    isLoading,
    err,
    data: SkillData,
    sendReq,
  } = useHttp((res) => res.data.languages);
  let content = <h1>Skillsets Fetching Failed!</h1>;

  useEffect(() => {
    sendReq(`${process.env.REACT_APP_SERVER_URL}/languages`);
  }, []);

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  if (err) {
    content = <h1>{err}</h1>;
  }

  if (SkillData.length !== 0) {
    content = (
      <SkillsetsRenderer
        skills={SkillData}
        heading={{
          normal: "Languages and Frameworks",
          highlighted: "I Know",
        }}
      />
    );
  }

  return content;
};

export default Skillsets;
