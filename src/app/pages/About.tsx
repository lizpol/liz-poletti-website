import Navigation from "../components/Navigation";
import { ArrowRight } from "lucide-react";
import profileImage from "figma:asset/0427c0b149d0b3877afcf22e7c50621c4158addb.png";
import "../../styles/portfolio.css";

export default function About() {
  return (
    <div className="portfolio-page min-h-screen bg-slate-50">
      <Navigation />
      <main className="about-main">
        <header className="portfolio-heading about-heading">
          <span className="portfolio-eyebrow">A little about me</span>
          <h1>Hello, I’m <em>Liz.</em></h1>
          <p>Based in Dublin, Ireland, I’m a UX / Product Designer working on complex digital products in startup and scale-up environments.</p>
          <img src={profileImage} alt="Laiza Poletti — Product Designer" className="about-portrait" />
          <span className="about-location">Dublin, Ireland</span>
        </header>

        <section className="about-story" aria-labelledby="about-story-heading">
          <span className="portfolio-eyebrow">My perspective</span>
          <h2 id="about-story-heading">Finding the structure.<br />Making it <em>human.</em></h2>
            <p>Before moving into design, I completed a PhD in Classics at Oxford. My research involved working with ancient texts that are often incomplete or fragmented — piecing them together, identifying patterns, and building coherent interpretations from limited evidence.</p>
            <p>That experience shaped how I approach product design: I look for underlying structure before jumping to solutions, I'm comfortable working with ambiguity, and I think carefully about how people process information.</p>
            <p>I've worked both in-house and with early-stage companies, as a sole designer and within design teams, partnering closely with founders and engineers to shape products from concept through launch and iteration.</p>
            <p>I'm currently open to long-term roles where I can contribute to a product's evolution, while remaining available for select collaborations.</p>
        </section>

        <section className="about-principles" aria-labelledby="principles-heading">
          <div className="portfolio-heading">
            <span className="portfolio-eyebrow">How I think</span>
            <h2 id="principles-heading">A few guiding <em>principles.</em></h2>
          </div>
          <div className="principles-grid">
            <div><span className="principle-number">01</span><h3>Systems over screens</h3><p>I focus on flows, dependencies, and logic — not just visuals.</p></div>
            <div><span className="principle-number">02</span><h3>Clarity in complexity</h3><p>I simplify dense information without oversimplifying decisions.</p></div>
            <div><span className="principle-number">03</span><h3>Thinking across the product</h3><p>I design features with the wider product ecosystem in mind.</p></div>
          </div>
        </section>

        <section className="portfolio-heading about-contact">
          <span className="portfolio-eyebrow">Let’s talk</span>
          <h2>Good work starts with<br />a <em>conversation.</em></h2>
          <p>Open to long-term roles and select collaborations. I’d love to hear what you’re working on.</p>
          <a href="mailto:polettilaiza@gmail.com" className="portfolio-button">Get in touch <ArrowRight size={17} aria-hidden="true" /></a>
        </section>
      </main>
      <footer className="portfolio-footer">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <a href="mailto:polettilaiza@gmail.com">polettilaiza@gmail.com</a>
            <a href="https://www.linkedin.com/in/laiza-poletti" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p>© 2026 Laiza Poletti</p>
        </div>
      </footer>
    </div>
  );
}
