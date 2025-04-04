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

const Project = ({ title, href, desc, repo, image }: { title: string, href: string, desc: string, repo: string, image: string }) => {
  const overlayStyles = `cursor-pointer absolute aspect-square h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <div className="relative hover:opcacity-100" >
      <picture className="h-full w-full hover:opcacity-90">
        <a className={overlayStyles} href={href}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{desc}</p>
        </a>
        <a className="absolute z-40 bottom-3 w-[46px] h-[46px] hover:w-[50px] hover:h-[50px] flex items-center justify-center right-3 bg-white rounded-full" href={repo}>
          <img src={(repo.includes("github") ? "github-142-svgrepo-com.svg" : "gitlab.svg")} alt={projectTitle} className='aspect-square w-[40px] h-[40px]' />
        </a>
        <img src={image} alt={projectTitle} className='aspect-square object-cover w-[400px] h-[400px] content-start ' />
      </picture>
    </div>
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
          This section represents the tangible results of my passion and expertise in software
          development. Each project is a testament to my commitment to turning ideas into
          reality, whether it's building user-friendly web applications, optimizing
          database systems, or crafting innovative solutions.

          With a focus on delivering excellence, I've undertaken a diverse range of projects
          that showcase my versatility and dedication. From small-scale applications to
          large-scale endeavors, I approach every project with the same level of enthusiasm
          and attention to detail.

          In this portfolio, you'll find examples of my work that highlight not just my
          technical skills, but also my ability to adapt to various challenges and
          industries. Whether you're interested in exploring my front-end designs,
          back-end implementations, or the seamless integration of technology into real-world
          solutions, you'll discover the breadth and depth of my capabilities.

          These projects are more than just lines of code; they are the embodiment of my commitment
          to creating impactful, user-centric, and innovative solutions. I invite you to explore
          this collection and witness the results of my passion for turning ideas into digital reality.
        </p>
      </motion.div>
      <section id="projects" className="flex justify-center">
        <motion.div className="sm:grid sm:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={container}>
          <div className="flex justify-center text-center items-center p-10 bg-green max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          {[
            { title: "finance_app", image: "finance_app.webp", repo: "https://github.com/arepaflipper/finance_app", href: "https://finance-dashboard.cristiantovar.com/", desc: "Gain insights at a glance! Our web dashboard features dynamic pie and bar charts for a quick overview of your finances. Track expenses, analyze income trends, and make informed decisions with ease. Simplify financial management—empower your financial journey!" },
            { title: "Quiz Craft AI", image: "quiz_craft_ai.webp", repo: "https://github.com/arepaflipper/quizcraftai", href: "https://quizcraftai.cristiantovar.com/dashboard", desc: "powerful AI-driven quiz platform that allows you to create and deploy quizzes that leverage the capabilities of artificial intelligence." },
            { title: "Blog Post App", image: "blogpost.webp", repo: "https://gitlab.com/arepaflipper/frontend", href: "https://blogpost.cristiantovar.com/", desc: "A blog post app where you can create, edit, and delete blog posts. It has a user-friendly interface and a responsive design that adapts to different screen sizes." },
            { title: "reddit_clone", image: "reddit_clone.webp", repo: "https://github.com/arepaflipper/reddit_clone", href: "https://redditclone.cristiantovar.com/", desc: "This clone seamlessly mirrors the popular Reddit interface, offering users an intuitive, engaging experience. With a clean UI, innovative features, and robust moderation tools, it fosters vibrant discussions while prioritizing user safety. " },
            { title: "inlaze_movies", image: "inlaze_movies.webp", repo: "https://github.com/arepaflipper/inlaze_films", href: "https://inlaze.cristiantovar.com/", desc: "Inlaze Movies is a sleek app that lets you explore popular, now playing, upcoming, top-rated, and favorite movies with intuitive navigation and personalized recommendations. Enjoy a seamless movie discovery experience!" },
            { title: "onlypandas", image: "onlypandas.webp", repo: "https://github.com/arepaflipper/onlypandas", href: "http://onlypandas.cristiantovar.com/", desc: "OnlyPandas is a content subscription platform dedicated to panda conservation. To ensure the survival of pandas by promoting their natural reproduction behaviors through high-quality, exclusive content." },
            { title: "ionic + Capacitor demo", image: "ionic-capacitor.webp", repo: "https://github.com/arepaFlipper/ionic_capacitor", href: "http://ionic-capacitor.cristiantovar.com/", desc: "This is a project demostration for Assignar" },
            { title: "chat_app", image: "chat_app.webp", repo: "https://github.com/arepaflipper/chat_app", href: "http://telesign-chatapp.cristiantovar.com/", desc: "This is a project demostration for TeleSign" },
            { title: "fighting_game (coming soon)", image: "fighting_game.webp", repo: "https://github.com/arepaflipper/fighting_game", href: "https://fighting-game-ts.vercel.app/", desc: "🎮 Just tried this vanilla TypeScript web fighting game – it's a knockout! 👊💻 Impressive animations, intuitive controls, and a perfect blend of simplicity and depth. Diverse characters and clean TypeScript code make it a browser gaming gem! #TypeScriptGaming #IndieGame" },
          ].map(({ title, href, desc, repo, image }, index) => <Project key={index} title={title} href={href} desc={desc} repo={repo} image={image} />)}

          <div className="flex justify-center text-center items-center p-10 bg-green max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </section>
    </section>
  )
}

export default Projects
