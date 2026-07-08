import React, { useRef, useState } from "react";
import { socialLinks } from "../../data/socialLinks";
import { siteConfig } from "../../data/siteConfig";
import { getIcon } from "../../utils/iconLoader";
import { sendContactMessage } from "../../services/emailService";
import Card from "../common/Card";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import { HiMailOpen } from "react-icons/hi";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await sendContactMessage(form.current);
      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      if (error.message === "EMAILJS_NOT_CONFIGURED") {
        alert("EmailJS cloud credentials are not configured in src/data/siteConfig.js. Directing you to your email client instead...");
        
        const formData = new FormData(form.current);
        const name = formData.get("user_name");
        const email = formData.get("user_email");
        const messageText = formData.get("message");
        
        const subject = encodeURIComponent(`Outreach from ${name}`);
        const body = encodeURIComponent(`Sender Email: ${email}\n\nMessage:\n${messageText}`);
        window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      } else {
        alert("Failed to send email. Please check your parameters and try again.");
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background radial highlights */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-brand-indigo/5 blur-[130px] rounded-full" />
      <div className="absolute bottom-1/4 right-[-10%] w-96 h-96 bg-brand-violet/5 blur-[130px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Outreach"
          title="Get In"
          highlightText="Touch"
          subtitle="Feel free to send a message directly using the contact form, or connect with me via email or socials."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <Card hoverable={false} className="flex-1 flex flex-col justify-between p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8 font-medium">
                  I am currently seeking an internship or full-stack software development role starting in 2026. If you have an opportunity or want to discuss a project, feel free to reach out. I'll get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-brand-indigo shrink-0 shadow-inner">
                      {getIcon("FaEnvelope", { size: 14 })}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email Me</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-sm text-slate-200 hover:text-brand-indigo transition font-semibold">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-brand-indigo shrink-0 shadow-inner">
                      {getIcon("FaPhone", { size: 14 })}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Call Me</p>
                      <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-sm text-slate-200 hover:text-brand-indigo transition font-semibold">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-brand-indigo shrink-0 shadow-inner">
                      {getIcon("FaMapMarkerAlt", { size: 14 })}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Location</p>
                      <p className="text-sm text-slate-200 font-semibold">
                        {siteConfig.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-10 border-t border-slate-850 pt-6">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-4">Connect on socials</p>
                <div className="flex gap-3">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target={link.platform !== "email" ? "_blank" : undefined}
                      rel="noreferrer"
                      title={link.label}
                      className="w-10 h-10 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-brand-indigo/30 flex items-center justify-center text-slate-400 hover:text-white transition duration-300 shadow-md"
                    >
                      {getIcon(link.icon, { size: 16 })}
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="lg:col-span-7 flex">
            <Card hoverable={false} className="p-8 sm:p-10 w-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <HiMailOpen className="text-brand-indigo animate-pulse" size={24} /> Write a Message
                </h3>
                <p className="text-[10px] text-slate-500 mb-8 font-bold uppercase tracking-wider">Use this form to drop me an instant inbox notification.</p>

                <form
                  ref={form}
                  onSubmit={sendMessage}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Name</label>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="p-4 rounded-xl bg-slate-950/70 border border-white/5 focus:border-brand-indigo/50 hover:border-white/10 outline-none transition duration-300 text-sm placeholder:text-slate-700 text-slate-200"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="p-4 rounded-xl bg-slate-950/70 border border-white/5 focus:border-brand-indigo/50 hover:border-white/10 outline-none transition duration-300 text-sm placeholder:text-slate-700 text-slate-200"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Message</label>
                    <textarea
                      rows="6"
                      name="message"
                      placeholder="Type your message here..."
                      required
                      className="p-4 rounded-xl bg-slate-950/70 border border-white/5 focus:border-brand-indigo/50 hover:border-white/10 outline-none transition duration-300 text-sm placeholder:text-slate-700 text-slate-200 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSending}
                    variant="primary"
                    className="w-full uppercase tracking-wider py-4 font-extrabold text-xs"
                  >
                    {isSending ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
