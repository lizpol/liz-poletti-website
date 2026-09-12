import Navigation from "../components/Navigation";
import { motion } from "motion/react";
import profileImage from "figma:asset/0427c0b149d0b3877afcf22e7c50621c4158addb.png";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="px-6 md:px-16 lg:px-24 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Header with Image */}
          <motion.div
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
              {/* Text Content - Left Side */}
              <div className="flex-1">
                <div className="flex items-center gap-8 mb-12">
                  <div className="h-px w-8 bg-blue-800/40" />
                  <span className="text-blue-800 text-xs tracking-[0.2em] uppercase">About</span>
                  <div className="h-px w-8 bg-blue-800/40" />
                </div>

                <h1 className="text-5xl md:text-7xl text-slate-900 mb-12 leading-tight tracking-tight">Hello, I'm Liz.</h1>

                <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                  <p>Based in Dublin, Ireland, I'm a UX / Product Designer working on complex digital products in startup and scale-up environments.</p>
                  <p>Before moving into design, I completed a PhD in Classics at Oxford. My research involved working with ancient texts that are often incomplete or fragmented — piecing them together, identifying patterns, and building coherent interpretations from limited evidence.</p>
                  <p>That experience shaped how I approach product design: I look for underlying structure before jumping to solutions, I'm comfortable working with ambiguity, and I think carefully about how people process information.</p>
                  <p>I've worked both in-house and with early-stage companies, as a sole designer and within design teams, partnering closely with founders and engineers to shape products from concept through launch and iteration.</p>
                  <p>I'm currently open to long-term roles where I can contribute to a product's evolution, while remaining available for select collaborations.</p>
                </div>
              </div>

              {/* Image - Right Side */}
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/30 to-blue-300/20 blur-2xl" />
                  <img
                    src={profileImage}
                    alt="Laiza Poletti - Product Designer"
                    className="relative w-72 md:w-96 h-auto object-cover border border-blue-200 shadow-2xl rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Strengths Cards */}
          <motion.section
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="p-8 rounded-2xl bg-white border border-blue-200 text-center">
                <h3 className="text-2xl text-slate-900 mb-4 tracking-tight">Systems Over Screens</h3>
                <p className="text-slate-700 leading-relaxed">
                  I focus on flows, dependencies, and logic — not just visuals.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-2xl bg-white border border-blue-200 text-center">
                <h3 className="text-2xl text-slate-900 mb-4 tracking-tight">Clarity in Complexity</h3>
                <p className="text-slate-700 leading-relaxed">
                  I simplify dense information without oversimplifying decisions.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-2xl bg-white border border-blue-200 text-center">
                <h3 className="text-2xl text-slate-900 mb-4 tracking-tight">Thinking Across the Product</h3>
                <p className="text-slate-700 leading-relaxed">
                  I design features with the wider product ecosystem in mind.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">Let's Work Together</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Available for freelance projects and long-term collaborations. Let's talk about your product challenges.
            </p>
            <a
              href="mailto:polettilaiza@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#201E50] text-white rounded-full hover:bg-[#5C80BC] transition-all duration-300 shadow-lg shadow-[#201E50]/25 text-sm tracking-wide uppercase"
            >
              Get in Touch
              <span>→</span>
            </a>
          </motion.section>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-blue-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <a href="mailto:polettilaiza@gmail.com" className="text-blue-800 hover:text-blue-900 text-sm transition-colors">
              Email
            </a>
            <a href="https://www.linkedin.com/in/laiza-poletti" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 text-sm transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="text-slate-600 text-sm">
            © 2026 — Available for freelance work
          </p>
        </div>
      </footer>
    </div>
  );
}