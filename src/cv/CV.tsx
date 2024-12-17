import { useState } from "react"
import Education from "./Education"
import Experience from "./Experience"
import Header from "./Header"
import Skills from "./Skills"
import { useParams } from "react-router-dom"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CV = () => {
  const { lan } = useParams();
  const [language, setLanguage] = useState(lan || "EN");
  const on_click = () => {
    const new_language = (language === "ES") ? "EN" : "ES";
    setLanguage(new_language)
  }

  const downloadPDF = () => {
    const cvElement = document.getElementById("cv-container");
    if (cvElement) {
      html2canvas(cvElement, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("CV_Senior_Full-Stack_Cristian_F_Tovar.pdf");
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div
        id="cv-container"
        className="container mx-auto p-8 max-w-3xl bg-white shadow-lg text-black"
      >
        <Header language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Skills language={language} />
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="text-blue hover:underline cursor-pointer mx-2"
          onClick={on_click}
        >
          {language === "ES" ? "Versión en inglés" : "Get the Spanish version"}
        </button>
        <button
          className="bg-black border border-white text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={downloadPDF}
        >
          📄 Download PDF
        </button>
      </div>
    </div>
  );
}

export default CV;
