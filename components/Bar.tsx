import { FunctionComponent } from "react";
import { ISkill } from "../type";
//import { motion } from "framer-motion";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  const bar_width = `${level}%`;

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-dark-100">
      <div
        className="flex px-4 py-1 rounded-full items center bg-gradient-to-r from-red-600 to-blue to-yellow-400"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
