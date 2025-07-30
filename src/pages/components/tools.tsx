import React from "react";
import {
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const tools = [
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-300" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-500" },
];

export default function Tools() {
  return (
    <section
      id="herramientas"
      className="w-full max-w-5xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
        Herramientas
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tools.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            title={name}
            className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-transform hover:scale-105"
          >
            <Icon className={`${color} text-5xl mb-2`} />
            <span className="text-sm text-gray-300">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
