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

type TSkill_data = {
  skill_name: string;
  Image: string;
  width: number;
  height: number;
}

function Technologies() {
  return (
    <section id="technologies" className=" 1300 1300:w-[1250px] my-5 h-screen relative overflow-hidden  flex flex-col items-center justify-center ">

      <motion.div className="md:w-2/4 mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }}>
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-green">TECH</span>NOLOGIES
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <LineGradient width="w-1/3" />
        <p className="mt-10 mb-7">
          I have a knack for envisioning unique and user-centric solutions.
          Whether it's crafting intuitive user interfaces or designing creative features,
          I believe that imagination is the driving force behind remarkable software.
          With every project, I strive to bring a touch of innovation and creativity
          that captures users' attention and enhances their experiences.
        </p>
      </motion.div>
      <div className=" w-full 800:w-[800px] h-auto  flex 950:hidden   flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Skill_data.map((data: TSkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Frontend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full 800:w-[850px] h-auto hidden 950:flex  flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Frontend_skill.map((data: TSkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Frontend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full 800:w-[770px] h-auto hidden 950:flex  flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Backend_skill.map((data: TSkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Backend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full 800:w-[670px] h-auto hidden 950:flex  flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Full_stack.map((data: TSkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Backend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full 800:w-[630px] h-auto hidden 950:flex  flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Other_skill.map((data: TSkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Backend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full 800:w-[500px] h-auto hidden 950:flex  flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Other_skill2.map((data: TSkill_data, index: number) => (
          <Skill_data_provider
            key={data.skill_name + index}
            type={"Backend_skill"}
            data={data}
            index={index}
          />
        ))}
      </div>
      <div className=" w-full 800:w-[600px] h-auto hidden 950:flex  flex-row items-center justify-around mt-[30px] flex-wrap   ">
        {Other_skill3.map((data: TSkill_data, index: number) => (
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
