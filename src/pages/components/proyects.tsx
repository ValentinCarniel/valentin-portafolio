import ProjectCard from "./proyectcard";

export default function Projects() {
  const proyectos = [
    {
      title: "Tutorías App",
      description: "Una app para gestionar tutorías, con gestión de usuarios y sesiones.",
      repoLink: "https://github.com/ValentinCarniel/Tutorias_app",
      demoLink: "https://tutorias-app-demo.vercel.app",
    },
    {
      title: "Proyecto Tareas",
      description: "App web con FastAPI y SQLite para gestión de tareas, con login y registro.",
      repoLink: "https://github.com/ValentinCarniel/proyecto_tareas",
      demoLink: "https://proyectotareas.vercel.app/",
    },
    {
      title: "Chatbot AI",
      description: "Demo de un chatbot con FastAPI y OpenAI GPT, frontend interactivo.",
      repoLink: "https://github.com/ValentinCarniel/Chatbot-Ai",
      demoLink: "https://ValentinCarniel.github.io/Chatbot-Ai/",
    },
  ];

  return (
    <section className="px-4 py-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Mis Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((proyecto, index) => (
            <ProjectCard
              key={index}
              title={proyecto.title}
              description={proyecto.description}
              repoLink={proyecto.repoLink}
              demoLink={proyecto.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
