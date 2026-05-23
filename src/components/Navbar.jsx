import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black text-white px-6 py-4 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-500">Vishnu</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col mt-4 gap-4 text-gray-300 md:hidden">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#resume" onClick={() => setOpen(false)}>Resume</a></li>
          <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;