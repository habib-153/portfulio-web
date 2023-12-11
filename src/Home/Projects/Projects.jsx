import { useEffect, useState } from "react";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="my-8">
      <SectionTitle heading="Projects"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {projects.map((project) => (
          <div key={project.id} data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={project.image}
                  alt="img"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {project.name}
                </h2>
                <p><span className="font-bold">Type: </span>{project.type}</p>
                <div className="card-actions justify-center">
                  <a href={project.live_link} className="badge badge-outline">Live Link</a>
                  <a href={project.client_side_repo} className="badge badge-outline">Client Side-R</a>
                  <a href={project.server_side_repo} className="badge badge-outline">Server side-R</a>
                </div>
                <div className="justify-center card-actions">
                        <a href={project.features} className="badge badge-outline font-bold">Features And Details</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
