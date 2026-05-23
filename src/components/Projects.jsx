import { motion } from "framer-motion";

import logicImg from "../assets/images/logicGateLab.png";
import sipImg from "../assets/images/sip.png";
import weatherImg from "../assets/images/weather.png";

function Projects() {
  const projects = [
    {
      title: "Logic Gate Lab",
      year: "2025",
      description:
        "Interactive logic gate simulator built using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
      image: logicImg,
      live: "https://logic-gate-lab.vercel.app/",
      github: "https://github.com/vishnu67cd76-png/Logic-gate-lab.vercel.app",
    },
    {
      title: "SIP Calculator",
      year: "2025",
      description:
        "Financial planning tool to calculate SIP returns with dynamic inputs.",
      image: sipImg,
      live: "https://sip-calculator-ashen.vercel.app/",
      github: "https://github.com/vishnu67cd76-png/SIP-Calculator-",
    },
    {
      title: "Weather App",
      year: "2025",
      description:
        "Real-time weather app using OpenWeather API.",
      image: weatherImg,
      live: "https://find-weather-ruby.vercel.app/",
      github: "https://github.com/vishnu67cd76-png/Find-Weather",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#2b1f2f] text-white px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My <span className="text-purple-500">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-[#3a2a3f] rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold">
                {project.title}{" "}
                <span className="text-gray-400 text-sm">({project.year})</span>
              </h3>

              <p className="text-gray-400 mt-2 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex gap-3 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 text-sm"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-800 text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;