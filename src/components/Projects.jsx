import "./Projects.css";

function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and Vite.",
      link: "https://vivek-portfoli-o.netlify.app/",
    },
    {
      title: "Currency Converter",
      description: "A real-time currency converter using an API.",
      link: "https://currency-converter-v10.netlify.app",
    },
    {
      title: "Todo App",
      description: "A simple task manager with CRUD operations.",
      link: "https://project1-todo-list-react.netlify.app",
    },
    {
      title: "Online Photo Gallery",
      description: "Search any photo from web using unsplash API",
      link: "https://mypho2gallery.netlify.app",
    },
  ];

  return (
    <section className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
