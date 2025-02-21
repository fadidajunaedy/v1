import { Link } from "react-router-dom";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import ProjectsJSON from "../../../data/projects.json";
import Badge from "../../../components/Badge";

const Projects = () => {
  return (
    <>
      <article id="projects">
        <h3 className="lg:hidden text-primary mb-4">PROJECTS</h3>
        <div className="flex flex-col gap-8">
          {ProjectsJSON.slice(0, 3).map((project, index) => (
            <Link
              key={index}
              to={`/archive/${project.content_key}`}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b-2 cursor-pointer group"
            >
              <img
                src={`./assets/images/projects/${project.image}`}
                alt={project.title}
                className="col-span-1 hidden md:block aspect-video object-cover border-2 rounded-md"
              />
              <div className="col-span-2 flex flex-col gap-4">
                <h4 className="flex items-center gap-2 group-hover:text-primary">
                  {project.title}
                  <MdArrowOutward className="transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" />
                </h4>

                <p className="text-xs md:text-sm text-slate-600 lg:text-base">
                  {project.description}
                </p>
                <img
                  src={`./assets/images/projects/${project.image}`}
                  alt={project.title}
                  className="col-span-1 md:hidden aspect-video object-cover border-2 rounded-md"
                />
                <div className="flex flex-wrap items-center gap-2">
                  {project.tech_stack.map((tech, indexTech) => (
                    <span key={indexTech} className="opacity-60">
                      {tech}
                      {indexTech !== project.tech_stack.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to="/archive"
          className="flex items-center gap-2 cursor-pointer group hover:text-primary font-bold mt-8"
        >
          View All Project Archive{" "}
          <MdArrowForward className="transition-transform group-hover:translate-x-2" />
        </Link>
      </article>
    </>
  );
};

export default Projects;
