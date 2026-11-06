import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Laptop,
  Code2,
  Network,
  Cloud,
  Headphones,
  CheckCircle2,
  Menu,
  X,
  Cpu,
  Database,
  LockKeyhole,
  MonitorCog,
  Wrench,
  BriefcaseBusiness,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    number: "01",
    title: "Hardware & Laptop Solutions",
    desc: "Reliable devices, repairs and lifecycle support for individuals and businesses.",
    items: [
      "New laptop sales",
      "Refurbished & second-hand laptops",
      "Laptop repair & diagnostics",
      "RAM, SSD & hardware upgrades",
      "Desktop, printer & peripheral support",
      "Annual maintenance contracts",
    ],
  },
  {
    icon: Code2,
    number: "02",
    title: "Software Development",
    desc: "Purpose-built digital products that streamline operations and support business growth.",
    items: [
      "Custom web application development",
      "Enterprise portals & dashboards",
      "Mobile application development",
      "API development & integration",
      "Legacy application modernization",
      "Software testing & quality assurance",
    ],
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Cybersecurity Services",
    desc: "Practical security strategies to protect your systems, applications and information.",
    items: [
      "Vulnerability assessment & penetration testing",
      "Security audits & risk assessment",
      "Cybersecurity architecture",
      "Cloud & endpoint security",
      "Network and firewall security",
      "Incident response & security awareness",
    ],
  },
  {
    icon: BriefcaseBusiness,
    number: "04",
    title: "IT Consultancy",
    desc: "Independent technology guidance aligned with your business priorities.",
    items: [
      "IT strategy & digital transformation",
      "Technology selection & advisory",
      "Infrastructure assessment",
      "IT policy & governance",
      "Security architecture consulting",
      "Compliance readiness support",
    ],
  },
  {
    icon: Network,
    number: "05",
    title: "IT Infrastructure & Networks",
    desc: "Stable, secure infrastructure designed for dependable day-to-day operations.",
    items: [
      "Network design & implementation",
      "Server setup & administration",
      "Wi-Fi & structured cabling",
      "Firewall configuration",
      "Infrastructure monitoring",
      "IT asset management",
    ],
  },
  {
    icon: Cloud,
    number: "06",
    title: "Cloud, Backup & Support",
    desc: "Keep your business available, backed up and ready to scale.",
    items: [
      "Cloud migration & management",
      "Data backup & recovery",
      "Disaster recovery planning",
      "Microsoft 365 & business email support",
      "Remote IT support",
      "Preventive maintenance",
    ],
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Security-minded",
    text: "Security considered across every technology layer.",
  },
  {
    icon: Cpu,
    title: "End-to-end IT",
    text: "Hardware, software and infrastructure under one roof.",
  },
  {
    icon: Headphones,
    title: "Ongoing support",
    text: "Practical support beyond delivery and installation.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScX3tcEZqda2yi83ghOh0CbedIaAissE7EnoBU8zd1wJz3U4A/viewform?embedded=true";

  return (
    <div>
      <header className="header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Naps Enterprise home"
        >
          <div className="brand-mark">
            <img src="/logo.jpeg" alt="Naps Enterprise" className="brand-logo" />
          </div>
          <span className="brand-name">
            NAPS <b>ENTERPRISE</b>
            <small>TECHNOLOGY SOLUTIONS</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["Home", "About", "Services", "Why Naps", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Get in touch <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid"></div>
          <div className="hero-content">
            <div className="eyebrow">
              <span className="pulse"></span> YOUR TECHNOLOGY PARTNER
            </div>
            <h1>
              Technology that
              <br />
              moves your business <em>forward.</em>
            </h1>
            <p className="hero-copy">
              From laptops and IT infrastructure to custom software and
              cybersecurity, Naps Enterprise helps you make technology work
              smarter.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                Explore our services <ArrowRight size={17} />
              </a>
              <a className="button button-outline" href="#contact">
                Talk to our team
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                <span>IT</span>
                <span>HW</span>
                <span>CS</span>
              </div>
              <span>Hardware · Software · Cybersecurity</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow"></div>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="core-card">
              <div className="core-top">
                <span className="live-dot"></span> TECHNOLOGY ECOSYSTEM{" "}
                <span className="core-menu">•••</span>
              </div>
              <div className="core-icon">
                <MonitorCog size={42} />
              </div>
              <div className="core-title">
                One partner.
                <br />
                <span>Complete IT.</span>
              </div>
              <div className="core-line"></div>
              <div className="core-stats">
                <div>
                  <ShieldCheck />
                  <b>Secure</b>
                  <small>By design</small>
                </div>
                <div>
                  <Code2 />
                  <b>Innovative</b>
                  <small>By approach</small>
                </div>
                <div>
                  <Wrench />
                  <b>Reliable</b>
                  <small>By support</small>
                </div>
              </div>
            </div>
            <div className="float-tag tag-top">
              <span className="tag-icon">
                <LockKeyhole size={16} />
              </span>
              <span>
                <b>Cybersecurity</b>
                <small>Protect what matters</small>
              </span>
            </div>
            <div className="float-tag tag-bottom">
              <span className="tag-icon tag-blue">
                <Laptop size={16} />
              </span>
              <span>
                <b>Hardware & Software</b>
                <small>All in one place</small>
              </span>
            </div>
            <div className="visual-caption">
              SMARTER TECHNOLOGY. STRONGER BUSINESS.
            </div>
          </div>
          <div className="hero-bottom">
            <span>01 / 04</span>
            <span className="bottom-rule"></span>
            <span>BUILT FOR WHAT'S NEXT</span>
          </div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-kicker">
            WHO WE ARE <span>—</span> ABOUT NAPS
          </div>
          <div className="intro-layout">
            <h2>
              We bring your
              <br />
              technology <em>together.</em>
            </h2>
            <div className="intro-text">
              <p>
                Naps Enterprise is an IT solutions company focused on helping
                people and businesses use technology with confidence. We bring
                hardware expertise, software engineering and cybersecurity
                knowledge together to deliver practical, dependable solutions.
              </p>
              <a className="text-link" href="#contact">
                Let's discuss your requirements <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="highlight-grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div className="highlight" key={title}>
                <div className="highlight-icon">
                  <Icon size={21} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                WHAT WE DO <span>—</span> OUR SERVICES
              </div>
              <h2>
                Technology solutions
                <br />
                for <em>every layer.</em>
              </h2>
            </div>
            <p>
              Whether you need a dependable laptop, a custom-built application
              or a stronger security posture, we can help you find the right
              solution.
            </p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, number, title, desc, items }) => (
              <article className="service-card" key={number}>
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon size={23} />
                  </div>
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p className="service-desc">{desc}</p>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="service-link">
                  Discuss this service <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="why section-pad" id="why-naps">
          <div className="why-left">
            <div className="section-kicker">
              THE NAPS ADVANTAGE <span>—</span>
            </div>
            <h2>
              Good technology
              <br />
              should feel <em>simple.</em>
            </h2>
            <p>
              We focus on understanding your requirement first, then
              recommending solutions that are practical, secure and built to
              last.
            </p>
            <a className="button button-primary" href="#contact">
              Start a conversation <ArrowRight size={17} />
            </a>
          </div>
          <div className="why-list">
            <div>
              <span>01</span>
              <section>
                <h3>One connected technology partner</h3>
                <p>
                  Hardware, software, infrastructure and security expertise in
                  one place.
                </p>
              </section>
            </div>
            <div>
              <span>02</span>
              <section>
                <h3>Solutions around your needs</h3>
                <p>Recommendations based on your business, budget and goals.</p>
              </section>
            </div>
            <div>
              <span>03</span>
              <section>
                <h3>Security at the core</h3>
                <p>
                  A security-aware approach to systems, applications and
                  operations.
                </p>
              </section>
            </div>
            <div>
              <span>04</span>
              <section>
                <h3>Support that stays with you</h3>
                <p>Assistance for maintenance, upgrades and what comes next.</p>
              </section>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-heading">
            <div className="section-kicker">
              LET'S CONNECT <span>—</span> CONTACT US
            </div>
            <h2>
              Have a project
              <br />
              in <em>mind?</em>
            </h2>
            <p>
              Tell us what you need. Whether it's a laptop repair, a new
              software project or a cybersecurity consultation, we'd be happy to
              hear from you.
            </p>
            <div className="contact-details">
              <div>
                <Mail size={18} />
                <span>
                  <small>EMAIL</small>
                  <b>naps.enterprises@outlook.com</b>
                </span>
              </div>
              <div>
                <Phone size={18} />
                <span>
                  <small>PHONE</small>
                  <b>+91 907676 8686</b>
                </span>
              </div>
              <div>
                <MapPin size={18} />
                <span>
                  <small>LOCATION</small>
                  <b>Mumbai, Maharashtra, India</b>
                </span>
              </div>
            </div>
            <div className="social-block">
              <small>FOLLOW NAPS ENTERPRISE</small>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/share/18j6er4Jbo/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={17} />
                </a>
                <a
                  href="https://www.instagram.com/napsenterprise?vrfl=bmx5bGUzazRlbHFu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/naps-enterprise-88b0b024a/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>
          </div>
          <div className="form-panel">
            <div className="form-panel-head">
              <div>
                <span className="form-label">ENQUIRY FORM</span>
                <h3>How can we help?</h3>
              </div>
              <div className="form-badge">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <p className="form-note">
              Share your details through our secure Google Form. Our team can
              follow up with you about your requirement.
            </p>
            <div className="google-form-wrap">
              <iframe
                title="Naps Enterprise contact form"
                src={googleFormUrl}
                width="100%"
                height="620"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
            <p className="form-help">
              If the form does not load,{" "}
              <a
                href="https://docs.google.com/forms/"
                target="_blank"
                rel="noreferrer"
              >
                open Google Forms
              </a>{" "}
              or contact us directly.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">
            N<span>.</span>
          </span>
          <span className="brand-name">
            NAPS <b>ENTERPRISE</b>
            <small>TECHNOLOGY SOLUTIONS</small>
          </span>
        </a>
        <div className="footer-mid">
          <p>Technology. Trust. Transformation.</p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/share/18j6er4Jbo/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/napsenterprise?vrfl=bmx5bGUzazRlbHFu"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/naps-enterprise-88b0b024a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Naps Enterprise. All rights reserved.
          </span>
          <div>
            <a href="#home">
              Back to top <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
