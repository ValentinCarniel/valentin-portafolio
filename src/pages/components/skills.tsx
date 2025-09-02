import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiPython,
  SiMysql,
  SiJson,
  SiApollographql,
} from "react-icons/si";
import { MdStorage } from "react-icons/md";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
  { name: "SQL Server", icon: MdStorage, color: "text-blue-700" },
  { name: "JSON", icon: SiJson, color: "text-pink-500" },
  { name: "API REST", icon: SiApollographql, color: "text-red-500" },
  { name: "typescript", icon: SiJavascript, color: "text-blue-500" }, // Reusing JavaScript icon for TypeScript
];

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="w-full max-w-4xl bg-gray-800 rounded-lg p-6 shadow-lg mt-8"
    >
      <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2 text-white">
        Habilidades
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center text-center">
        {skills.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            title={name}
            className="flex flex-col items-center gap-2 cursor-pointer p-3 rounded-lg transition duration-300 ease-in-out hover:bg-white/10 hover:scale-105"
          >
            <Icon className={`${color} text-5xl`} />
            <span className="text-sm text-gray-300">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
