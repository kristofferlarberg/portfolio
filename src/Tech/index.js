import React from "react";
import Languages from "./Languages";
import Software from "./Software";
import FrameLib from "./FrameLib";
import Tools from "./Tools";

const Tech = ({ languages, software, frameLib, tools }) => {
  return (
    <footer className="tech">
      <h3 className="tech">Skills</h3>
      <section className="techgrid">
        <Languages languages={languages} />
        <FrameLib frameLib={frameLib} />
        <Tools tools={tools} />
        <Software software={software} />
      </section>
    </footer>
  );
};
export default Tech;
