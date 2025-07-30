import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">Valentín Carniel</div>

      {/* Botón hamburguesa para móvil */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menú para escritorio y móvil */}
      <div
        className={`${
          open ? "block" : "hidden"
        } sm:flex sm:items-center sm:gap-8`}
      >
        <Link href="#proyectos" className="block px-3 py-2 hover:underline">
          Proyectos
        </Link>
        <Link href="#contacto" className="block px-3 py-2 hover:underline">
          Contacto
        </Link>
        <a
          href="mailto:josevalentincarniel@gmail.com"
          className="block px-3 py-2 text-blue-400 hover:underline"
        >
          Email
        </a>
      </div>
    </nav>
  );
}
