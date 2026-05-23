function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold mb-6">
        About <span className="text-purple-500">Me</span>
      </h2>

      <p className="max-w-2xl text-center text-gray-400 text-lg">
      I’m an independent developer who builds modern, responsive web applications with a focus on clean UI and real-world usability.
      I enjoy turning ideas into functional products and continuously improving through hands-on projects and practical development experience.
      </p>
    </section>
  );
}

export default About;