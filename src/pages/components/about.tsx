export default function About() {
  return (
    <section id="about" className="w-full max-w-4xl mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
      <img
        src="/valen.jpg" // poné tu imagen en la carpeta /public
        alt="Foto de perfil"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
      />
      <div>
        <h2 className="text-2xl font-semibold text-white mb-2">¡Hola! Soy Valentín Carniel</h2>
        <p className="text-gray-300">
         Soy Jose Valentín Carniel, un programador backend junior apasionado por
         las APIs y bases de datos. Me gusta trabajar con JavaScript, Python,
         C#, .NET y PHP, siempre buscando aprender y mejorar en el desarrollo de
         soluciones robustas y eficientes.
        </p>
      </div>
    </section>
  );
}


