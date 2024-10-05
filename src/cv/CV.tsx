import Education from "./Education"
import Experience from "./Experience"
import Header from "./Header"
import Skills from "./Skills"

const CV = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto p-8 max-w-3xl bg-white shadow-lg text-black">
        <Header />
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  )
}

export default CV;
