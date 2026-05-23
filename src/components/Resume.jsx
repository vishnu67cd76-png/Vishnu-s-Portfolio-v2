function Resume() {
  const education = [
    {
      title: "Bachelor of Science (BSc) in Computer Science",
      university: "Calicut University",
      college: "Sadanam Kumaran College, Pathiripala",
      year: "Completed: 2026",
    },
    {
      title: "Higher Secondary Education (Plus Two) - Computer Science",
      university: "Government Higher Secondary School Kottayi",
      college: "",
      year: "Completed: 2023",
    },
  ];

  return (
    <section
      id="resume"
      className="min-h-screen bg-[#2b1f2f] text-white px-6 py-20"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-purple-300 mb-4">
        Resume
      </h2>

      <p className="text-center text-gray-400 mb-12">
        A brief overview of my educational background and qualifications
      </p>

      {/* Section Heading */}
      <div className="text-center mb-10">
        <h3 className="text-2xl text-purple-300 mb-2">
          Education & Qualifications
        </h3>
        <p className="text-gray-400 text-sm">
          Building a strong foundation through structured learning and
          continuous self-development
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-[#3b2a3f] p-6 rounded-xl border border-purple-400/20 hover:border-purple-400 transition"
          >
            <h4 className="text-lg font-semibold text-purple-200">
              {edu.title}
            </h4>

            <p className="text-gray-300 mt-2">{edu.university}</p>

            {edu.college && (
              <p className="text-gray-400 text-sm">{edu.college}</p>
            )}

            <p className="text-purple-400 text-sm mt-2">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resume;