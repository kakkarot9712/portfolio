"use client";
import { useState } from "react";
import classes from "./ResumeComponent.module.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import { pdfjs, Document, Page } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const ResumeComponent = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const url = "../resume.pdf";

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

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
      <div className={classes.canvas_container}>
        <Document file={{ url }} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </section>
  );
};

export default ResumeComponent;