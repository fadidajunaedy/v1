import { Link } from "react-router-dom"
import { LuLink } from "react-icons/lu"
import { MdArrowBack, MdArrowOutward } from "react-icons/md"
import { IoFolderOpenOutline } from "react-icons/io5"

import ProjectsJSON from "../data/projects.json"
import Badge from "../components/Badge"

const ProjectsArchive = () => {
    return (
        <>
            <section className="w-full h-full">
                <div className="container py-4 lg:py-24">
                    <Link 
                    to="/"
                    className="flex items-center gap-2 cursor-pointer group text-primary font-bold mb-4">
                        <MdArrowBack className="transition-transform group-hover:-translate-x-2"/>
                        Fadida Junaedy
                    </Link>
                    <h1>All Projects</h1>
                    {/* <div className="overflow-x-auto mt-12"> */}
                    <table className="w-full table-projects mt-12">
                        <thead>
                            <tr className="py-2 border-b-2">
                                <th>Year</th>
                                <th className="text-left">Project</th>
                                <th className="text-left hidden lg:table-cell">Tech Stack</th>
                                <th className="hidden lg:table-cell">Link</th>
                                <th className="hidden lg:table-cell">Source</th>
                            </tr>
                        </thead>
                        <tbody>
                        {ProjectsJSON.map((project, index) => (
                        <tr key={index}>
                            <td className="text-center">{project.year}</td>
                            <td>
                                <span className="hidden lg:block">
                                    {project.title}
                                </span>
                                <a 
                                href={project.link}
                                target="_blank"
                                className="lg:hidden flex items-center gap-2 hover:text-primary font-semibold group">
                                    {project.title}
                                    <MdArrowOutward className="transition-transform group-hover:-translate-y-2 group-hover:translate-x-2"/>
                                </a>
                            </td>
                            <td className="hidden lg:table-cell">
                                <div className="flex flex-wrap items-center gap-2">
                                {project.tech_stack.map((tech, indexTech) => (
                                    <Badge key={indexTech}>
                                        {tech}
                                    </Badge>
                                ))}
                                </div>
                            </td>
                            <td className="hidden lg:table-cell text-center">
                                {project.link && (
                                <a 
                                href={project.link} 
                                target="_blank" 
                                className="text-center hover:text-primary cursor-pointer">
                                    <LuLink className="mx-auto" />
                                </a>
                                )}

                            </td>
                            <td className="hidden lg:table-cell text-center">
                                {project.source && (
                                <a 
                                href={project.source} 
                                target="_blank" 
                                className="text-center hover:text-primary cursor-pointer">
                                    <IoFolderOpenOutline className="mx-auto" />
                                </a>
                                )}
                            </td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                    {/* </div> */}

                </div>
            </section>
        </>
    )
}

export default ProjectsArchive