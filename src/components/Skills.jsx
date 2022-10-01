import React from "react";
import { FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

import styles from "../style/Skills.module.css";

const SkillCard = ({ skill, icon, exp }) => {
  return (
    <div className={styles.skillcard}>
      {icon} <p>{skill}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div className={styles.wrapper}>
      <h5 className={styles.header}>Skills</h5>
      <div className={styles.container}>
        <SkillCard
          skill={"Html"}
          icon={<AiOutlineHtml5 scale={2} size={"35px"}/>}
          exp={"Expert"}
        />
        <SkillCard
          skill={"Css"}
          icon={<FaCss3Alt scale={2} size={"35px"}/>}
          exp={"Expert"}
        />
        <SkillCard
          skill={"Javascript"}
          icon={<IoLogoJavascript scale={2} size={"35px"}/>}
          exp={"Expert"}
        />
        <SkillCard
          skill={"React"}
          icon={<FaReact scale={2} size={"35px"}/>}
          exp={"Expert"}
        />
        <SkillCard
          skill={"Node.js"}
          icon={<FaNodeJs scale={2} size={"35px"}/>}
          exp={"Expert"}
        />
        <SkillCard
          skill={"MongoDB"}
          icon={<DiMongodb scale={2} size={"35px"}/>}
          exp={"Intermediate"}
        />
        <SkillCard
          skill={"Express.js"}
          icon={<SiExpress scale={2} size={"35px"}/>}
          exp={"Intermediate"}
        />
      </div>
    </div>
  );
};

export default Skills;
