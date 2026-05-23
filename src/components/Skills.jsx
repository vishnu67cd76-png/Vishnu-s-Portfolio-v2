function Skills() {
  const techSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Tailwind CSS",
    "jQuery",
    "C",
    "Java",
    "Python",
  ];

  const aiTools = [
    "ChatGPT",
    "Gemini",
    "Claude",
    "Cursor AI",
    "Builder.io",
    "Replit",
    "Lovable AI",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#2b1f2f] text-white px-6 py-20"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-4 text-purple-300">
        Skills
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Core technical skills
      </p>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto">

        <h3 className="text-lg text-gray-300 mb-6 text-center">
          Technologies
        </h3>

       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className="h-16 flex items-center justify-center bg-[#3b2a3f] rounded-xl hover:bg-purple-500 hover:text-black transition text-sm sm:text-base"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* AI Tools */}
        <div className="mt-16 text-center">
          <h3 className="text-lg text-gray-300 mb-6">AI Tools</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {aiTools.map((tool, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[#3b2a3f] rounded-lg hover:bg-purple-500 hover:text-black transition"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;