import { portfolioProjects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <div className="section-intro">
          <p className="section-kicker">04 / Projects · 7 professional applications</p>
          <h2>Professional projects, shared safely.</h2>
          <p>Seven applications across healthcare and enterprise workflows, described at a high level to respect confidentiality.</p>
        </div>
        <div className="project-grid all-projects-grid">
          {portfolioProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-label">{project.group}</p>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-divider" />
              <p className="contribution"><strong>Contribution</strong>{project.contribution}</p>
              <ul className="tags">{project.technologies.slice(0, 5).map((technology) => <li key={technology}>{technology}</li>)}</ul>
              <details className="project-details">
                <summary>View details <span aria-hidden="true">↓</span></summary>
                <div className="project-details-content">
                  <div>
                    <h4>Key contributions</h4>
                    <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </div>
                  {project.impact.length > 0 && <div><h4>Business impact</h4><ul>{project.impact.map((impact) => <li key={impact}>{impact}</li>)}</ul></div>}
                  <div><h4>Technology stack</h4><ul className="tags">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
                </div>
              </details>
              <p className="confidential">Details are generalized to respect confidentiality.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
