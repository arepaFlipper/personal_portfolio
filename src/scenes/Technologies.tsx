import {
  Skill_data,
  Frontend_skill,
  Backend_skill,
  Full_stack,
  Other_skill,
  Other_skill2,
  Other_skill3,
} from "@/assets/constants";
import { LineGradient } from '@/components';
import Skill_data_provider from "@/components/Skill_data_provider";
import { motion } from "framer-motion";

interface ISkill_data {
  skill_name: string;
  Image: string;
  width: number;
  hight: number;
}

function Technologies() {
  return (
    <section id="technologies" className=" 1300 1300:w-[1250px] my-5 h-screen relative overflow-hidden  flex flex-col items-center justify-center ">

      <motion.div className="md:w-2/4 mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }}>
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">TECH</span>NOLOGIES
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
      <div className=" w-full 800:w-[800px] h-auto  flex 950:hidden   flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Skill_data.map((data: ISkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Frontend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full 800:w-[850px] h-auto hidden 950:flex  flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Frontend_skill.map((data: ISkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Frontend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full 800:w-[770px] h-auto hidden 950:flex  flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Backend_skill.map((data: ISkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Backend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full 800:w-[670px] h-auto hidden 950:flex  flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Full_stack.map((data: ISkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Backend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full 800:w-[630px] h-auto hidden 950:flex  flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Other_skill.map((data: ISkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Backend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full 800:w-[500px] h-auto hidden 950:flex  flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Other_skill2.map((data: ISkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Backend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full 800:w-[600px] h-auto hidden 950:flex  flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Other_skill3.map((data: ISkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Backend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      {/* <div className=" w-full h-full  absolute  flex flex-col  items-center  justify-center"> */}
      {/*   <div className=" w-[1000px] 1000:w-full h-full z-[-10] opacity-[0.3]  absolute flex flex-col bg-cover items-center justify-center "> */}
      {/*     <video */}
      {/*       className="w-full h-auto" */}
      {/*       preload="false" */}
      {/*       playsInline */}
      {/*       loop */}
      {/*       muted */}
      {/*       autoPlay={true} */}
      {/*       src="/cards-video.webm" */}
      {/*     ></video> */}
      {/*   </div> */}
      {/* </div> */}
    </section>
  );
}

export default Technologies;
