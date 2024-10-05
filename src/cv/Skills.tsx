const Skills = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Skills</h2>
      <div className="flex flex-col">
        <div className="flex">
          <p className="font-semibold text-gray-700 mr-2">Programming Languages:</p>
          <p className="text-gray-600">Python, JavaScript / TypeScript</p>
        </div>
        <div className="block-inline">
          <p className="font-semibold text-gray-700 mr-2">Tools and Frameworks:</p>
          <p className="text-gray-600">React, React Native, Node.js, Docker, Terraform, Jest, PostgreSQL, Amazon DynamoDB</p>
        </div>
        <div className="flex">
          <p className="font-semibold text-gray-700 mr-2">Languages:</p>
          <p className="text-gray-600">English (C1), Spanish (native)</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
