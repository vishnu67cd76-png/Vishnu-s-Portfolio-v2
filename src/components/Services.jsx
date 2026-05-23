import { Code, Globe, Terminal } from "lucide-react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: <Globe size={30} />,
      title: "Web Development",
      points: [
        "Custom website development",
        "Responsive design",
        "Interactive web applications",
        "Front-end development",
      ],
    },
    {
      icon: <Code size={30} />,
      title: "Project-based Services",
      points: [
        "API integration",
        "Dynamic logic & functionality",
        "Modern UI implementation",
      ],
    },
    {
      icon: <Terminal size={30} />,
      title: "Programming & Scripting",
      points: [
        "Basic scripting & automation",
        "Problem solving with code",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-[#2b1f2f] text-white px-6 py-20"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-purple-300 mb-4">
        Services
      </h2>

      <p className="text-center text-gray-400 mb-16">
        What I can do for you
      </p>

      {/* RESPONSIVE GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#3a2a3f] rounded-xl p-6 sm:p-8 text-center 
                       hover:scale-105 hover:shadow-xl 
                       hover:shadow-purple-500/20 transition"
          >
            {/* Icon */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-500 text-black mb-6">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-purple-200 mb-4">
              {service.title}
            </h3>

            {/* Points */}
            <ul className="text-gray-300 text-xs sm:text-sm space-y-2">
              {service.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;