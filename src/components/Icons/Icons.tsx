import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiSwift,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiSkaffold,
  SiJira,
  SiConfluence,
  SiTrello,
  SiGit,
  SiFigma,
  SiAstro,
  SiExpo,
  SiTailwindcss,
  SiTerraform,
} from 'react-icons/si';

import { FaAws } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiRedis } from 'react-icons/di';

export const skillIcons = {
  frontend: [
    <SiJavascript size={50} color="#F7DF1E" />,
    <SiTypescript size={50} color="#3178C6" />,
    <SiReact size={50} color="#61DAFB" />,
    <SiRedux size={50} color="#764ABC" />,
    <SiNextdotjs size={50} color="black" />,
    <SiSwift size={50} color="#FA7343" />,
    <SiTailwindcss size={50} color="#06B6D4" />,
  ],
  backend: [
    <SiNodedotjs size={50} color="#339933" />,
    <SiExpress size={50} color="black" />,
    <SiTypescript size={50} color="#3178C6" />,
  ],
  database: [
    <SiMysql size={50} color="#4479A1" />,
    <SiMongodb size={50} color="#47A248" />,
    <BiLogoPostgresql size={50} color="#336791" />,
    <DiRedis size={50} color="#DC382D" />,
  ],
  devops: [
    <SiDocker size={50} color="#2496ED" />,
    <SiKubernetes size={50} color="#326CE5" />,
    <SiSkaffold size={50} color="#1A73E8" />,
    <FaAws size={50} color="#FF9900" />,
    <SiTerraform size={50} color="#623CE4" />,
  ],
  dataManagement: [
    <SiJira size={50} color="#0052CC" />,
    <SiConfluence size={50} color="#172B4D" />,
    <SiTrello size={50} color="#0079BF" />,
  ],
  development: [
    <SiGit size={50} color="#F05032" />,
    <SiFigma size={50} color="#F24E1E" />,
    <SiAstro size={50} color="#FF5D01" />,
    <SiExpo size={50} color="black" />,
  ],
};
