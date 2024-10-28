const Education = ({ language }: { language: string }) => {
  const title = (language === "EN") ? "Education" : "Educación";
  const text = (language === "EN") ? "Electrical Engineer" : "Energía eléctrica";
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">{title}</h2>
      <h3 className="text-xl font-semibold text-gray-700">Escuela Colombiana De Ingeniería - Bogotá, Colombia</h3>
      <p className="text-gray-700">{text}</p>
      <p className="text-gray-600 italic">01/2012 - 03/2017</p>
    </section>
  )
}

export default Education
