import React from "react";

import SinglePagePDFViewer from "./components/pdf/single-page";
//import AllPagesPDFViewer from "./components/pdf/all-pages";
//import { sampleBase64pdf } from "./sampleBase64pdf"
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import  samplePDF  from "./sample.pdf";
import "./styles.css";

export default function App() {
  return (
    <div>
     <div className="App">
        <h1>Computer science and engineering</h1>
        <h2>Semester 3</h2>
          <h4>PDF 1</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
          <h4>PDF 2</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
          <h4>PDF 3</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
        <h2>Semester 4</h2>
          <h4>PDF 1</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
          <h4>PDF 2</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
          <h4>PDF 3</h4>
          <SinglePagePDFViewer pdf={samplePDF} />


        <h1>Electrical and electronics engineering</h1>
        <h2>Semester 5</h2>
          <h4>PDF 1</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
          <h4>PDF 2</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
          <h4>PDF 3</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
        <h2>Semester 6</h2>
          <h4>PDF 1</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
          <h4>PDF 2</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
          <h4>PDF 3</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
      </div>
    </div> 
  );
}