import React from "react";
import { Props } from "./types";

export default (props: Props) => {
  const { word, type } = props;
  return (
    <div className="flex flex-col justify-self-center items-center">
      <h1 className="text-7xl font-semibold text-white capitalize max-sm:text-4xl">
        {word}
      </h1>
      <span className="text-4xl text-white max-sm:text-2xl">as</span>
      <h1 className="text-7xl font-semibold text-white capitalize max-sm:text-4xl">
        {type}
      </h1>
    </div>
  );
};
