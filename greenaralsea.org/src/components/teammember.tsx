import React from "react";

const TeamMember: React.FC<IMember> = (props) => {
  return (
    <div className="bg-gray-50 rounded-lg lg:max-h-[500px] shadow sm:flex  dark:border-gray-700 grid md:grid-cols-2 gap-4">
      <div className=" w-full">
        <img
          className="rounded-lg w-full h-full sm:rounded-none sm:rounded-l-lg"
          src={props.avatar}
          alt={props.name.split(",")[0]}
        />
      </div>
      <div className="p-5 md:max-w-[50%] w-full">
        <h3 className="text-xl md:text-[35px] font-bold tracking-tight text-gray-900 mb-2">
          <a>{props.name.split(",")[0]}</a>
        </h3>
        <span className="text-gray-500 dark:text-gray-500 md:text-[20px] font-medium">
          {props.name.split(",")[1]}
        </span>
        <p className="mt-3 text-justify mb-4 font-light text-gray-500 dark:text-gray-400 md:text-xl">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
