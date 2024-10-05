const Experience = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Experience</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Full-stack Engineer - ABEXUS LLC (Remote)</h3>
        <p className="text-gray-600 italic mb-2">07/2020 - present</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Developed highly responsive web and mobile applications using <span className="font-semibold">React</span>, <span className="font-semibold">React Native</span>, and <span className="font-semibold">TypeScript</span>, improving UX across platforms.</li>
          <li>Built and maintained backend systems in <span className="font-semibold">Node.js</span> (with <span className="font-semibold">TypeScript</span>) and <span className="font-semibold">PostgreSQL</span>, integrating APIs and microservices for real-time data processing.</li>
          <li>Deployed applications to <span className="font-semibold">AWS</span>, <span className="font-semibold">Digital Ocean</span>, <span className="font-semibold">Vercel</span> and <span className="font-semibold">Heroku</span>, ensuring scalability and reliability.</li>
          <li>Utilized <span className="font-semibold">Docker</span> and <span className="font-semibold">NGINX</span> to manage CI/CD pipelines and optimize infrastructure for continuous deployment.</li>
          <li>Collaborated with cross-functional teams to deliver scalable solutions and improve software architecture.</li>
          <li>Assisted in the development of backend services using <span className="font-semibold">Python</span> and <span className="font-semibold">Django</span>, improving API response times by 20%.</li>
          <li>Worked with <span className="font-semibold">PostgreSQL</span> for efficient database management and data integrity.</li>
          <li>Deployed internal tools using <span className="font-semibold">AWS</span> services such as <span className="font-semibold">S3</span> and <span className="font-semibold">EC2</span>.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Software Engineer Intern - Platzi inc</h3>
        <p className="text-gray-600 italic mb-2">06/2019 - 01/2021</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Developed a health application that allows users to book medical appointments, leveraging the MERN stack (<span className="font-semibold">MongoDB</span>, <span className="font-semibold">Express</span>, <span className="font-semibold">React</span>, <span className="font-semibold">Node.js</span>) for full-stack functionality.</li>
          <li>Implemented a user-friendly UI for medical professionals to publish and manage medical assessments, ensuring a seamless experience for both doctors and patients.</li>
          <li>Created and optimized RESTful APIs for managing patient data, appointments, and medical assessments, with a focus on scalability and security.</li>
          <li>Utilized MongoDB for efficient data storage and retrieval, ensuring fast and reliable access to appointment and medical records.</li>
          <li>Integrated authentication and role-based access control (RBAC) for secure user management and access to sensitive medical data.</li>
          <li>Ensured cross-platform compatibility and responsiveness for mobile and desktop users using <span className="font-semibold">React</span> for the frontend and <span className="font-semibold">Node.js</span> for the backend.</li>
        </ul>
      </div>
    </section>

  )
}

export default Experience;
