interface Skill {
  label: string;
  value: string;
}

const Skills = ({ language }: { language: string }) => {
  const title = language === "EN" ? "Skills" : "Habilidades";

  const skillData: Skill[] = [
    { label: "Programming Languages:", value: "Python, JavaScript / TypeScript" },
    { label: "Tools and Frameworks:", value: "React, React Native, Node.js, Docker, Terraform, Jest, PostgreSQL, Amazon DynamoDB" },
    { label: "Languages:", value: "English (C1), Spanish (native)" }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
        {title}
      </h2>
      <div className="flex flex-col">
        {skillData.map(({ label, value }, index) => (
          <div key={index} className="flex mb-2">
            <p className="font-semibold text-gray-700 mr-2">{label}</p>
            <p className="text-gray-600">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

