const projects = [
  {
    id: 1,
    name: "Project A",
    description: "This is project A",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Project B",
    description: "This is project B",
    status: "Completed",
  },
  {
    id: 3,
    name: "Project C",
    description: "This is project C",
    status: "Pending",
  },
];

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Status: {project.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
