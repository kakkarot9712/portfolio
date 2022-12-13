import * as fromPdfJslib from "pdfjs-dist";
import { useCallback, useEffect, useRef } from "react";
import classes from "./ResumeComponent.module.css";

const ResumeComponent = () => {
  const url = "../assets/resume.pdf";
  const canvasRef = useRef();
  const renderPDF = useCallback(() => {
    // The workerSrc property shall be specified.
    fromPdfJslib.GlobalWorkerOptions.workerSrc =
      "//cdn.jsdelivr.net/npm/pdfjs-dist@3.0.279/build/pdf.worker.js";

    // Asynchronous download of PDF
    let loadingtask = fromPdfJslib.getDocument(url);
    console.log("here");
    loadingtask.promise.then(
      (pdf) => {
        let pageNumber = 1;
        pdf.getPage(pageNumber).then((page) => {
          let scale = 1;
          let viewport = page.getViewport({ scale: scale });

          let canvas = canvasRef.current;
          let context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          let renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          let renderTask = page.render(renderContext);
          renderTask.promise.then(() => {});
        });
      },
      (reason) => {
        console.error(reason);
      }
    );
  }, []);

  useEffect(() => {
    renderPDF();
  }, [renderPDF]);

  return (
    <section className={classes.section}>
      <a href="assets/resume.pdf" target="_blank" rel="norefferer">
        Download Resume
      </a>
      <div className={classes.canvas_container}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </section>
  );
};

export default ResumeComponent;
