import React from "react";
import Languages from "./Languages";
import Software from "./Software";
import FrameLib from "./FrameLib";
import Tools from "./Tools";

const Tech = ({ languages, software, frameLib, tools }) => {
  return (
    <section className="infogrid">
      <Languages languages={languages} />
      <FrameLib frameLib={frameLib} />
      <Tools tools={tools} />
      <Software software={software} />
    </section>
  );
};
export default Tech;
