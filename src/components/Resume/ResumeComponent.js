import * as fromPdfJslib from "pdfjs-dist/webpack";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import { useCallback, useEffect, useRef, useState } from "react";
import classes from "./ResumeComponent.module.css";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

const ResumeComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const url = "../assets/resume.pdf";
  const canvasRef = useRef();
  const renderPDF = useCallback(() => {
    fromPdfJslib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
    let loadingtask = fromPdfJslib.getDocument(url);
    loadingtask.promise.then(
      (pdf) => {
        let pageNumber = 1;
        pdf.getPage(pageNumber).then((page) => {
          let scale = 4;
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
          setIsLoading(false);
        });
      },
      (reason) => {
        setErr(reason.message);
        setIsLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    renderPDF();
  }, [renderPDF]);

  let content = <LoadingSpinner />;

  if (!isLoading) {
    content = null;
  }

  if (!isLoading && err) {
    content = <h1>{err}</h1>;
  }

  return (
    <section className={classes.section}>
      <a href="assets/resume.pdf" target="_blank" rel="norefferer">
        Download Resume
      </a>
      <div className={classes.canvas_container}>
        {content}
        <canvas ref={canvasRef} />
      </div>
    </section>
  );
};

export default ResumeComponent;
