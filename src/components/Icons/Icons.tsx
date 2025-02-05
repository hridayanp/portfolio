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
    <SiJavascript size={50} color="#fff" />,
    <SiTypescript size={50} color="#fff" />,
    <SiReact size={50} color="#fff" />,
    <SiRedux size={50} color="#fff" />,
    <SiNextdotjs size={50} color="#fff" />,
    <SiSwift size={50} color="#fff" />,
    <SiTailwindcss size={50} color="#fff" />,
  ],
  backend: [
    <SiNodedotjs size={50} color="#fff" />,
    <SiExpress size={50} color="#fff" />,
    <SiTypescript size={50} color="#fff" />,
  ],
  database: [
    <SiMysql size={50} color="#fff" />,
    <SiMongodb size={50} color="#fff" />,
    <BiLogoPostgresql size={50} color="#fff" />,
    <DiRedis size={50} color="#fff" />,
  ],
  devops: [
    <SiDocker size={50} color="#fff" />,
    <SiKubernetes size={50} color="#fff" />,
    <SiSkaffold size={50} color="#fff" />,
    <FaAws size={50} color="#fff" />,
    <SiTerraform size={50} color="#fff" />,
  ],
  dataManagement: [
    <SiJira size={50} color="#fff" />,
    <SiConfluence size={50} color="#fff" />,
    <SiTrello size={50} color="#fff" />,
  ],
  development: [
    <SiGit size={50} color="#fff" />,
    <SiFigma size={50} color="#fff" />,
    <SiAstro size={50} color="#fff" />,
    <SiExpo size={50} color="#fff" />,
  ],
};
