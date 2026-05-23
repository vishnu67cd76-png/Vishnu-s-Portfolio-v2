import profile from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#2b1f2f] text-white flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-300 mb-6">
            Independent Developer & Web Creator
          </h1>

          <p className="text-gray-300 mb-6">
          I build modern, responsive, and user-focused web applications using React and JavaScript. With a strong foundation in HTML, CSS, and frontend architecture, I focus on creating clean interfaces and smooth user experiences.
          I enjoy turning ideas into real, functional products and continuously improving my skills by building practical, real-world projects.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a href="#projects" className="px-5 py-2 bg-purple-600 rounded hover:bg-purple-700">
              Projects
            </a>
            <a href="#contact" className="px-5 py-2 border border-gray-500 rounded hover:bg-gray-800">
              Contact
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={profile}
            alt="Vishnu"
            loading="lazy"
            className="w-[250px] md:w-[320px] rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;