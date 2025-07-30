type ProjectCardProps = {
  title: string;
  description: string;
  repoLink?: string;
  demoLink?: string;
};

export default function ProjectCard({
  title,
  description,
  repoLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="mt-4 flex gap-4">
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition-colors"
          >
            Repositorio
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white font-medium transition-colors"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
