import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface Skill_data {
  skill_name: string;
  Image: string;
  width: number;
  height: number;
}

interface Props {
  data: Skill_data;
  index: number;
  type: string;
}

function Skill_data_provider({ data, index, type }: Props) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="relative group"
    >
      <div
        className={`${type === "Backend_skill"
          ? "w-[35px] 400:w-[45px] 800:w-[50px]"
          : "w-[40px] 400:w-[50px] 800:w-[55px]"
          } cursor-pointer z-0 1300:w-[${data.width}px] h-auto rounded-[5px] z-20 relative mx-[10px] my-[5px]`}
      >
        <img
          alt={data.skill_name}
          width={data.width}
          height={data.height}
          src={data.Image}
          className=""
        />
      </div>
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xl rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-30">
        {data.skill_name}
      </div>
    </motion.div>
  );
}

export default Skill_data_provider;
