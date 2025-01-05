import ExperienceJSON from "../../../data/experience.json"

const Experience = () => {
    return (
        <>
            <article id="experience" className="flex flex-col gap-4">
                <h2 className="sticky top-0 lg:hidden">EXPERIENCE</h2>
                <div className="flex flex-col gap-8">
                {ExperienceJSON.map((experience, index) => (
                    <div 
                    key={index} 
                    className="flex flex-col gap-2 cursor-pointer group">
                        <h3 className="flex items-center gap-2 group-hover:text-primary">
                            {experience.place} ({experience.period})
                        </h3>
                        <h3 className="text-sm lg:text-base italic group-hover:text-primary">{experience.role} · <span>{experience.status}, {experience.type}</span></h3>
                        <p className="text-sm lg:text-base">
                            {experience.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                            {experience.tech_stack.map((tech, indexTech) => (
                            <span key={indexTech} className="backdrop-blur bg-secondary/30 text-primary py-2 px-4 text-xs rounded-full">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
            </article>
        </>
    )
}

export default Experience