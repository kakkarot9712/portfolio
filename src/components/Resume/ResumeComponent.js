import { useState } from "react";
import classes from "./ResumeComponent.module.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ResumeComponent = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const url = "../assets/resume.pdf";

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className={classes.section}>
      <a
        href="assets/resume.pdf"
        className={classes.downloadBtn}
        target="_blank"
        rel="norefferer"
      >
        Download Resume
      </a>
      <div className={classes.canvas_container}>
        <Document file={{ url }} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </section>
  );
};

export default ResumeComponent;
