import {
  Skill_data,
  Frontend_skill,
  Backend_skill,
  Full_stack,
  Other_skill,
  Other_skill2,
  Other_skill3,
} from "@/assets/constants";
import Skill_data_provider from "@/components/Skill_data_provider";

interface ISkill_data {
  skill_name: string;
  Image: string;
  width: number;
  hight: number;
}

function Technologies() {
  return (
    <section className=" 1300 1300:w-[1250px] h-full relative overflow-hidden  flex flex-col items-center justify-center m-auto">

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
      <div className=" w-full h-full  absolute  flex flex-col  items-center  justify-center">
        <div className=" w-[1000px] 1000:w-full h-full z-[-10] opacity-[0.3]  absolute flex flex-col bg-cover items-center justify-center ">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay={true}
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
