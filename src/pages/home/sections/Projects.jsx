import { Link } from "react-router-dom"
import { MdArrowForward, MdArrowOutward } from "react-icons/md"
import ProjectsJSON from "../../../data/projects.json"
import Badge from "../../../components/Badge"

const Projects = () => {
    return (
        <>
            <article id="projects" className="flex flex-col gap-4">
                <h2 className="sticky top-0 lg:hidden text-primary">PROJECTS</h2>
                <div className="flex flex-col gap-4">
                {ProjectsJSON.slice(0, 3).map((project, index) => (
                    <a 
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="grid grid-cols-3 gap-4 cursor-pointer group">
                    <figure className="col-span-1 bg-red-200 aspect-video rounded shadow overflow-hidden">
                        <img src={`./assets/images/projects/${project.image}`} alt="" srcSet="" />
                    </figure>
                    <div className="col-span-2 flex flex-col">
                        <h3 className="flex items-center gap-2 group-hover:text-primary">
                            {project.title} 
                            <MdArrowOutward className="transition-transform group-hover:-translate-y-2 group-hover:translate-x-2"/>
                        </h3>
                        <p className="text-sm text-slate-600 lg:text-base">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                        {project.tech_stack.map((tech, indexTech) => (
                            <Badge key={indexTech}>
                                {tech}
                            </Badge>
                        ))}
                        </div>
                    </div>
                    </a>
                ))}
                </div>
                <Link 
                to="/archive"
                className="flex items-center gap-2 cursor-pointer group hover:text-primary font-bold">
                    View All Project Archive <MdArrowForward className="transition-transform group-hover:translate-x-2"/>
                </Link>
            </article>
        </>
    )
}

export default Projects