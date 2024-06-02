"use client";

import { pdfjs, Document, Page } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import { useLayoutEffect, useRef, useState } from "react";
import useResizeObserver from "@react-hook/resize-observer";
import classes from "./ResumeComponent.module.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const getWidthFromRect = (sizes: DOMRectReadOnly) => {
  if (sizes?.width) {
    if (sizes.width > 600) return;
    else if (sizes.width < 600 && sizes.width >= 400) return 400;
    else if (sizes.width < 400 && sizes.width >= 300) return 300;
    else return 250;
  }
};

const useSize = (target: any) => {
  const [size, setSize] = useState<number | undefined>();

  useLayoutEffect(() => {
    target.current &&
      setSize(getWidthFromRect(target.current.getBoundingClientRect()));
  }, [target]);

  useResizeObserver(target, (entry) =>
    setSize(getWidthFromRect(entry.contentRect))
  );
  return size;
};

const fileProps = { url: "../resume.pdf" };

export default function DocumentLoader() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const target = useRef<HTMLDivElement | null>(null);
  const size = useSize(target);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div ref={target} className={classes.canvas_container}>
      <Document file={fileProps} onLoadSuccess={onDocumentLoadSuccess}>
        <Page width={size} pageNumber={pageNumber} />
      </Document>
    </div>
  );
}
