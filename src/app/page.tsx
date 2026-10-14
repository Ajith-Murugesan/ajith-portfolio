import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectsSection } from "@/components/projects-section";
import { awards, experience, profile, skillGroups } from "@/data/portfolio";
import profileImage from "./profile_image.png";

function SectionHeading({ number, title, description }: { number: string; title: string; description?: string }) {
  return <div className="section-intro"><p className="section-kicker">{number}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Full Stack Engineer</p><h1>Ajith <em>M.</em></h1>
              <p className="hero-headline">Full Stack Engineer <span aria-hidden="true">|</span> .NET Core <span aria-hidden="true">|</span> React.js <span aria-hidden="true">|</span> Angular <span aria-hidden="true">|</span> AWS</p>
              <p className="lede">{profile.summary}</p>
              <div className="hero-actions"><a className="button button-primary" href="#projects">View Projects <span aria-hidden="true">↗</span></a><a className="button button-secondary" href="#contact">Contact Me</a></div>
              <div className="social-links" aria-label="Professional profiles"><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
            </div>
            <div className="hero-art">
              <Image className="hero-profile-image" src={profileImage} alt="Portrait of Ajith M" fill priority sizes="(max-width: 800px) 100vw, 45vw" />
            </div>
          </div>
        </section>
        <section id="about" className="section"><div className="container split-layout"><div><p className="section-kicker">01 / About</p><h2>Engineering practical products from interface to infrastructure.</h2></div><div className="body-copy"><p>I deliver full-stack web application features across React.js and Angular frontends with .NET Core and Node.js backends. My work includes REST APIs, cloud-integrated systems, data access, and maintainable application experiences.</p><p>I bring experience with SQL and NoSQL databases, query optimization, Agile delivery, and enterprise tools—from technical design through deployment.</p><dl className="quick-facts"><div><dt>Location</dt><dd>{profile.location}</dd></div><div><dt>Focus</dt><dd>Web applications and cloud integrations</dd></div></dl></div></div></section>
        <section id="skills" className="section section-muted"><div className="container"><SectionHeading number="02 / Skills" title="A focused, full-stack toolkit." description="Technologies used across interface development, APIs, data, cloud services, and team delivery." /><div className="skill-grid">{skillGroups.map(([group, skills]) => <article className="skill-card" key={group}><h3>{group}</h3><ul className="chip-list">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div></div></section>
        <section id="experience" className="section"><div className="container"><SectionHeading number="03 / Experience" title="Growing through consistent delivery." description="KANINI Software Solutions Inc. · February 2023–Present" /><ol className="timeline">{experience.map((item, index) => <li key={item.role}><div className="timeline-date">{item.period}</div><article><p className="role-number">0{index + 1}</p><h3>{item.role}</h3><p>{item.summary}</p></article></li>)}</ol></div></section>
        <ProjectsSection />
        <section id="awards" className="section"><div className="container"><SectionHeading number="05 / Recognition" title="Collaboration and continuous learning." /><div className="recognition-grid">{awards.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>
        <section id="education" className="section section-muted"><div className="container education"><div><p className="section-kicker">06 / Education</p><h2>Strong technical foundations.</h2></div><article><p className="education-year">2019—2023</p><h3>B.Tech in Information Technology</h3><p>Coimbatore Institute of Engineering and Technology</p><p className="cgpa">CGPA <strong>9.08/10</strong></p></article></div></section>
        <section id="contact" className="section contact-section"><div className="container contact-content"><p className="section-kicker">07 / Contact</p><h2>Let&apos;s build something <em>meaningful.</em></h2><p>For a conversation about engineering work or collaboration, get in touch through email or a professional profile.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a><div className="contact-bottom"><span>{profile.location}</span><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
