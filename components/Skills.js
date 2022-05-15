import React from "react";
import Element from "react-scroll/modules/components/Element";
import SkillBar from "./progressbar/SkillBar";

const skilllist = [
  { skillL: "HTML5", ability: 90 },
  { skillL: "CSS3", ability: 88 },
  { skillL: "PHP", ability: 50 },
  { skillL: "C#", ability: 62 },
  { skillL: "SQL", ability: 70 },
  { skillL: "SaSS", ability: 55 },
  { skillL: "C++", ability: 76 },
  { skillL: "Java", ability: 68 },
  { skillL: "Javascript", ability: 70 },
  { skillL: "React JS", ability: 65 },
  { skillL: "Next JS", ability: 55 },
  { skillL: "Node JS", ability: 45 },
];

function Skills() {
  return (
    <Element id="skills" name="skills" style={{ marginBottom: "40px" }}>
      <div className="w-full my-40 h-auto flex flex-col justify-center items-center mb-5 mt-10">
        <h1 className="text-black text-6xl font-bold text-center">
          My Expertise
        </h1>
      </div>
      {skilllist.map((val, key) => {
        return (
          <div key={key}>
            <h2
              style={{
                marginRight: "100px",
                marginLeft: "100px",
                fontWeight: "bold",
              }}
            >
              {val.skillL}
            </h2>
            <SkillBar value={val.ability} />
          </div>
        );
      })}
    </Element>
  );
}

export default Skills;
