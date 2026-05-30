import { useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const messageData = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
        }
      );

      if (response.ok) {
        alert("Message Sent Successfully");
        form.current.reset();
      } else {
        alert("Failed To Send");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Touch
            </span>
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-6">
              Send Message
            </h3>

            <form
              ref={form}
              onSubmit={sendMessage}
              className="space-y-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-slate-800 border border-white/10 focus:border-cyan-400 outline-none transition"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-slate-800 border border-white/10 focus:border-cyan-400 outline-none transition"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-slate-800 border border-white/10 focus:border-cyan-400 outline-none transition resize-none"
              />

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition shadow-lg shadow-cyan-500/30 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-cyan-400 font-medium">
                    Email
                  </p>
                  <p className="text-slate-300">
                    shanmuharasasulakshan@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-cyan-400 font-medium">
                    Phone
                  </p>
                  <p className="text-slate-300">
                    +94 77 224 5243
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-cyan-400 font-medium">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/Sulakshan-S"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-cyan-400 transition"
                  >
                    Github Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-cyan-400 font-medium">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/sulakshan-shanmuharasa-12478a2b9"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-cyan-400 transition"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-slate-800/50 border border-white/10">
              <p className="text-slate-300 leading-relaxed">
                I'm currently seeking internship and graduate
                opportunities in Software Engineering and Full
                Stack Development. Feel free to reach out if
                you'd like to collaborate or discuss opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;