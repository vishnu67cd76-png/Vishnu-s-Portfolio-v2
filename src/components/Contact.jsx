import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;

const socialLinks = [
  {
    href: "https://www.instagram.com/_heiz_en_berg_",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/in/vishnu6776",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/vishnu67cd76-png",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://wa.me/9567681668",
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
];

function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    if (!FORMSPREE_ID) {
      setStatus("error");
      setErrorMessage(
        "Form is not configured yet. Add VITE_FORMSPREE_FORM_ID to your .env file (see README)."
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const data = await response.json().catch(() => ({}));
      setStatus("error");
      setErrorMessage(
        data.error || "Something went wrong. Please try again or email me directly."
      );
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  }

  return (
    <section id="contact" className="bg-[#2b1f2f] text-white px-6 pt-20 pb-32">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-300 mb-4">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Mail className="text-purple-400 shrink-0" />
            <a href="mailto:vishnu67cd76@gmail.com">vishnu67cd76@gmail.com</a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-purple-400 shrink-0" />
            <a href="tel:+919567681668">+91 9567681668</a>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-purple-400 shrink-0" />
            <a
              href="https://maps.app.goo.gl/ZFYE6q4HkvrYFLkX7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kottayi, Palakkad, Kerala, India
            </a>
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-3">Connect on social</p>
            <div className="flex gap-5 text-2xl">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name (eg: Vishnu)"
            className="w-full p-3 bg-[#3a2a3f] rounded outline-none focus:ring-2 focus:ring-purple-500"
            required
            disabled={status === "sending"}
          />

          <input
            type="email"
            name="email"
            placeholder="Email (eg: vishnu67cd76@gmail.com)"
            className="w-full p-3 bg-[#3a2a3f] rounded outline-none focus:ring-2 focus:ring-purple-500"
            required
            disabled={status === "sending"}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number (eg: +91 9567681668)"
            className="w-full p-3 bg-[#3a2a3f] rounded outline-none focus:ring-2 focus:ring-purple-500"
            required
            disabled={status === "sending"}
          />

          <textarea
            name="message"
            placeholder="Message (eg: Hi Vishnu, I am interested in your work!)"
            rows={4}
            className="w-full p-3 bg-[#3a2a3f] rounded outline-none focus:ring-2 focus:ring-purple-500 resize-y"
            required
            disabled={status === "sending"}
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Send size={18} />
            {status === "sending" ? "Sending…" : "Send"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm" role="status">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm" role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
