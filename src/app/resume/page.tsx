import dynamic from "next/dynamic";
import classes from "./ResumeComponent.module.css";

const DocumentLoader = dynamic(() => import("./DocumentLoader"), {
  ssr: false,
});

const ResumeComponent = () => {
  return (
    <section className={classes.section}>
      <a
        href="/resume.pdf"
        className={classes.downloadBtn}
        target="_blank"
        rel="norefferer"
      >
        Download Resume
      </a>
      <DocumentLoader />
    </section>
  );
};

export default ResumeComponent;
