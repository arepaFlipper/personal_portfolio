import { useState } from "react"
import Education from "./Education"
import Experience from "./Experience"
import Header from "./Header"
import Skills from "./Skills"
import { useParams } from "react-router-dom"

const CV = () => {
  const { lan } = useParams();
  const [language, setLanguage] = useState(lan || "EN");
  const on_click = () => {
    const new_language = (language === "ES") ? "EN" : "ES";
    setLanguage(new_language)
  }
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto p-8 max-w-3xl bg-white shadow-lg text-black">
        <Header language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Skills language={language} />
      </div>
      <button className="text-blue hover:underline cursor-pointer" onClick={on_click}>
        {(language === "ES") ? "Versión en inglés " : "Get the Spanish version"}
      </button>
    </div>
  )
}

export default CV;
