import { LineGradient } from '@/components';
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}


const Project = ({ title }: { title: string }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt.</p>
      </div>
      <img src={`/src/assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div className="md:w-2/4 mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }}>
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-green">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <LineGradient width="w-1/3" />
        <p className="mt-10 mb-7">
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </p>
      </motion.div>
      <section id="projects" className="flex justify-center">
        <motion.div className="sm:grid sm:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={container}>
          <div className="flex justify-center text-center items-center p-10 bg-green max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          {["Project 1", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6", "Project 7"].map((project, index) => <Project key={index} title={project} />)}

          <div className="flex justify-center text-center items-center p-10 bg-green max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </section>
    </section>
  )
}

export default Projects
