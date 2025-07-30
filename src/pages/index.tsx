import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import ProjectCard from "./components/proyectcard";
import Project from "./components/proyects";
import Tools from "./components/tools";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-950 text-white font-sans p-8 flex flex-col items-center gap-8">
        <About />
        <Skills />
        <Tools />

        <section
          id="proyectos"
          className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <ProjectCard
            title="Tutorías App"
            description="App para gestión y reservas de tutorías educativas."
            repoLink="https://github.com/ValentinCarniel/Tutorias_app"
            demoLink="https://tudemo.com"
          />
          <ProjectCard
            title="Proyecto Tareas"
            description="Gestor de tareas con FastAPI, SQL y Frontend moderno."
            repoLink="https://github.com/ValentinCarniel/proyecto_tareas"
            demoLink="https://tareasdemo.com"
          />
        </section>

        <section className="w-full max-w-4xl bg-gray-800 rounded-lg p-6 shadow-lg mt-8">
          <Project />
        </section>

        <section
          id="contacto"
          className="w-full max-w-xl bg-gray-900 rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Redes / Contacto
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/ValentinCarniel"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub: ValentinCarniel
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/valentin-carniel-139043300"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn: valentin-carniel
              </a>
            </li>
            <li>
              <a
                href="mailto:josevalentincarniel@gmail.com"
                className="text-blue-400 hover:underline"
              >
                Email: josevalentincarniel@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
