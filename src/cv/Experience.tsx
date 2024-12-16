import { ReactNode } from "react";

interface TJob {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

type TSection = {
  title: string;
  children: ReactNode;
}

const JobEntry = ({ title, company, duration, responsibilities }: TJob) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-gray-700">
      {title} - {company}
    </h3>
    <p className="text-gray-600 italic mb-2">{duration}</p>
    <ul className="list-disc pl-5 space-y-2">
      {responsibilities.map((task, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: task }} />
      ))}
    </ul>
  </div>
);

const Section = ({ title, children }: TSection) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
      {title}
    </h2>
    {children}
  </section>
);

const experience_data: TJob[] = [
  {
    title: "Full-stack Engineer",
    company: "ABEXUS LLC (Remote)",
    duration: "07/2020 - present",
    responsibilities: [
      "Developed highly responsive web and mobile applications using <span class='font-semibold'>React</span>, <span class='font-semibold'>React Native</span>, and <span class='font-semibold'>TypeScript</span>, improving UX across platforms.",
      "Built and maintained backend systems in <span class='font-semibold'>Node.js</span> (with <span class='font-semibold'>TypeScript</span>) and <span class='font-semibold'>PostgreSQL</span>, integrating APIs and microservices for real-time data processing.",
      "Deployed applications to <span class='font-semibold'>AWS</span>, <span class='font-semibold'>Digital Ocean</span>, <span class='font-semibold'>Vercel</span>, and <span class='font-semibold'>Heroku</span>, ensuring scalability and reliability.",
      "Utilized <span class='font-semibold'>Docker</span> and <span class='font-semibold'>NGINX</span> to manage CI/CD pipelines and optimize infrastructure for continuous deployment.",
      "Collaborated with cross-functional teams to deliver scalable solutions and improve software architecture.",
      "Assisted in the development of backend services using <span class='font-semibold'>Python</span> and <span class='font-semibold'>Django REST Framework</span>, improving API scalability and maintainability.",
      "Worked with <span class='font-semibold'>PostgreSQL</span> for efficient database management and data integrity.",
      "Deployed internal tools using <span class='font-semibold'>AWS</span> services such as <span class='font-semibold'>S3</span> and <span class='font-semibold'>EC2</span>.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Platzi Inc",
    duration: "06/2019 - 01/2021",
    responsibilities: [
      "Developed a health application that allows users to book medical appointments, leveraging the MERN stack (<span class='font-semibold'>MongoDB</span>, <span class='font-semibold'>Express</span>, <span class='font-semibold'>React</span>, <span class='font-semibold'>Node.js</span>) for full-stack functionality.",
      "Implemented a user-friendly UI for medical professionals to publish and manage medical assessments, ensuring a seamless experience for both doctors and patients.",
      "Created and optimized RESTful APIs for managing patient data, appointments, and medical assessments, with a focus on scalability and security.",
      "Utilized MongoDB for efficient data storage and retrieval, ensuring fast and reliable access to appointment and medical records.",
      "Integrated authentication and role-based access control (RBAC) for secure user management and access to sensitive medical data.",
      "Ensured cross-platform compatibility and responsiveness for mobile and desktop users using <span class='font-semibold'>React</span> for the frontend and <span class='font-semibold'>Node.js</span> for the backend.",
    ],
  },
];

const datos_experiencia: TJob[] = [
  {
    title: "Ingeniero Full-stack",
    company: "ABEXUS LLC (Remoto)",
    duration: "07/2020 - presente",
    responsibilities: [
      "Desarrollé aplicaciones web y móviles altamente responsivas utilizando <span class='font-semibold'>React</span>, <span class='font-semibold'>React Native</span> y <span class='font-semibold'>TypeScript</span>, mejorando la experiencia de usuario en múltiples plataformas.",
      "Construí y mantuve sistemas backend en <span class='font-semibold'>Node.js</span> (con <span class='font-semibold'>TypeScript</span>) y <span class='font-semibold'>PostgreSQL</span>, integrando APIs y microservicios para el procesamiento de datos en tiempo real.",
      "Implementé despliegues en <span class='font-semibold'>AWS</span>, <span class='font-semibold'>Digital Ocean</span>, <span class='font-semibold'>Vercel</span> y <span class='font-semibold'>Heroku</span>, asegurando escalabilidad y confiabilidad.",
      "Utilicé <span class='font-semibold'>Docker</span> y <span class='font-semibold'>NGINX</span> para gestionar pipelines de CI/CD y optimizar la infraestructura para un despliegue continuo.",
      "Colaboré con equipos multidisciplinarios para entregar soluciones escalables y mejorar la arquitectura del software.",
      "Asistí en el desarrollo de servicios backend utilizando <span class='font-semibold'>Python</span> y <span class='font-semibold'>Django</span>, mejorando los tiempos de respuesta de las APIs en un 20%.",
      "Trabajé con <span class='font-semibold'>PostgreSQL</span> para una gestión eficiente de bases de datos y mantener la integridad de los datos.",
      "Desplegué herramientas internas utilizando servicios de <span class='font-semibold'>AWS</span> como <span class='font-semibold'>S3</span> y <span class='font-semibold'>EC2</span>.",
    ],
  },
  {
    title: "Ingeniero de Software Interno",
    company: "Platzi Inc",
    duration: "06/2019 - 01/2021",
    responsibilities: [
      "Desarrollé una aplicación de salud que permite a los usuarios reservar citas médicas, aprovechando el stack MERN (<span class='font-semibold'>MongoDB</span>, <span class='font-semibold'>Express</span>, <span class='font-semibold'>React</span> y <span class='font-semibold'>Node.js</span>) para funcionalidad de pila completa.",
      "Implementé una interfaz amigable para que los profesionales de la salud publiquen y gestionen evaluaciones médicas, garantizando una experiencia fluida para médicos y pacientes.",
      "Creé y optimicé APIs RESTful para gestionar datos de pacientes, citas y evaluaciones médicas, enfocándome en escalabilidad y seguridad.",
      "Utilicé <span class='font-semibold'>MongoDB</span> para el almacenamiento y recuperación eficiente de datos, asegurando un acceso rápido y confiable a los registros de citas y expedientes médicos.",
      "Integré autenticación y control de acceso basado en roles (RBAC) para la gestión segura de usuarios y acceso a datos sensibles.",
      "Aseguré la compatibilidad multiplataforma y la capacidad de respuesta tanto para usuarios móviles como de escritorio, utilizando <span class='font-semibold'>React</span> en el frontend y <span class='font-semibold'>Node.js</span> en el backend.",
    ],
  },
];


const ExperienceSection = ({ language }: { language: string }) => (
  <Section title={(language === "EN") ? "Experience" : "Experiencia"}>
    {((language === "EN") ? experience_data : datos_experiencia).map((job, index) => (
      <JobEntry key={index} {...job} />
    ))}
  </Section>
);

export default ExperienceSection;

