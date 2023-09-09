import { LineGradient } from '@/components';
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const skills = [
    { title: "Experience", text: 'A auctor pharetra. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.', delay: 0, color: 'bg-blue' },
    { title: "Innovative", text: 'Urna,eget pulvinar ut, mattis sed, tristique in, nunc. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.', delay: 0.5, color: 'bg-red' },
    { title: "Imaginative", text: 'Accuman eu fringilla ac, vestibulum sit amet, luctus ut, elementum. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.', delay: 0.8, color: 'bg-yellow' },
  ]
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div className="md:w-1/3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-10 before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img className="z-10" src="/src/assets/skills-image.png" alt="skills" />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="/src/assets/skills-image.png" />
          )}
        </div>
      </div>
      <div className="md:flex md:justify-between mt-16 gap-32">
        {skills.map((item, index) => (
          <Skill_item key={index} idx={index} text={item.text} color={item.color} delay={item.delay} title={item.title} />
        ))}
      </div>
    </section>
  )
}

type TSkill = {
  title: string;
  text: string;
  color: string;
  delay: number;
  idx: number;
}

const Skill_item = ({ title, text, color, delay, idx }: TSkill) => {
  return (
    <motion.div className="md:w-1/3 mt-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay }} variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }}>
      <div className="relative h-32">
        <div className="z-10">
          <p className="font-playfair font-semibold text-5xl">{`0${idx + 1}`}</p>
          <p className="font-playfair font-semibold text-3xl">{title}</p>
        </div>
        <div className={`w-1/2 md:w-3/4 h-32 ${color} absolute right-0 top-0 z-[-1]`} />
      </div>
      <p className="mt-5">
        {text}
      </p>
    </motion.div>
  )
}

export default MySkills
