import { FunctionComponent } from "react";
import { ISkill } from "../type";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  const bar_width = `${level}%`;

  return (
    <div className="my-8 text-white bg-gray-300 rounded-full dark:bg-indigo-999 dark:bg-dark-100">
      <div
        className="flex px-4 py-1 rounded-full items center bg-gradient-to-r from-tokos to-blue to-autres lang"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
