import useMediaQuery from '@/hooks/useMediaQuery';
import { SocialMediaIcons } from '@/components';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ComputersCanvas from '@/scenes/Computers';

type TLanding = {
  setSelectedPage: (value: string) => void;
}


const Landing = ({ setSelectedPage }: TLanding) => {
  return (
    <section id="home" className="md:flex md:justify-around md:items-center md:h-full gap-16 py-10">
      <Image_section />
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <Main_text />
        <Call_to_actions setSelectedPage={setSelectedPage} />
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  )
}

export default Landing

const Image_section = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="mt-16 md:mt-0 h-5/6 w-1/2">
      <ComputersCanvas />
    </div>

  )
}

const Main_text = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <p className="text-6xl font-playfair z-10 text-center md:text-start">
        Cris {" F. "}
        <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[50px] before:-top-[120px] before:z-[-1]" >
          Tovar
        </span>
      </p>

      <p className="mt-10 mb-7 text-sm text-center md:text-start">
        Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
        viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
      </p>
    </motion.div>
  )

}

const Call_to_actions = ({ setSelectedPage }: TLanding) => {

  return (
    <motion.div
      className="flex mt-5 justify-center md:justify-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <AnchorLink
        className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-3 font-semibold hover:bg-blue hover:text-white transition duration-500"
        onClick={() => setSelectedPage("contact")} href="#contact"
      >
        Contact Me
      </AnchorLink>
      <AnchorLink
        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
        onClick={() => setSelectedPage("contact")} href="#contact"
      >
        <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
          Let's talk
        </div>
      </AnchorLink>
    </motion.div>
  )
}
