import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <>
      {/* ===== FINAL CONTACT SECTION ===== */}
      <section className="bg-gray-900 text-gray-300 py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

        <p className="max-w-xl mx-auto text-gray-400 mb-6">
          Feel free to reach out for collaborations or inquiries.
        </p>

        <a
          href="mailto:davidpeter@example.com"
          className="text-blue-400 hover:underline"
        >
          vividleads4@gmail.com
        </a>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0d1117] text-gray-300 py-12 px-6 text-center border-t border-gray-700/40">
        <h3 className="text-xl font-bold mb-6">
          David <span className="text-blue-400">Peter</span>
        </h3>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="#"
            className="p-3 rounded-full bg-[#1a1f24] hover:bg-[#22272e] transition"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="#"
            className="p-3 rounded-full bg-[#1a1f24] hover:bg-[#22272e] transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="#"
            className="p-3 rounded-full bg-[#1a1f24] hover:bg-[#22272e] transition"
          >
            <Twitter className="w-6 h-6" />
          </a>

          <a
            href="#"
            className="p-3 rounded-full bg-[#1a1f24] hover:bg-[#22272e] transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} David Peter — All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
