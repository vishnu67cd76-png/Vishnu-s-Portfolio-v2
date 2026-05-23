import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2b1f2f] text-white border-t border-gray-700">
      
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        
        {/* Name */}
        <h3 className="text-xl font-semibold text-purple-300 mb-2">
          Vishnu
        </h3>

        {/* Tagline */}
        <p className="text-gray-400 text-sm mb-6">
          Independent Developer • Building modern web experiences
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl mb-6">
          <a href="https://www.instagram.com/_heis_en_berg_" target="_blank" rel="noreferrer"
             className="hover:text-purple-400 transition">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/in/vishnu6776" target="_blank" rel="noreferrer"
             className="hover:text-purple-400 transition">
            <FaLinkedin />
          </a>

          <a href="https://github.com/vishnu67cd76-png" target="_blank" rel="noreferrer"
             className="hover:text-purple-400 transition">
            <FaGithub />
          </a>

          <a href="https://wa.me/9567681668" target="_blank" rel="noreferrer"
             className="hover:text-purple-400 transition">
            <FaWhatsapp />
          </a>

          <a href="mailto:vishnu67cd76@gmail.com"
             className="hover:text-purple-400 transition">
            <FaEnvelope />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2026 Vishnu. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;