import Badge from "../../../components/Badge"
import ExperienceJSON from "../../../data/experience.json"

const Experience = () => {
    return (
        <>
            <article id="experience" className="flex flex-col gap-4">
                <h2 className="sticky top-0 lg:hidden text-primary">EXPERIENCE</h2>
                <div className="flex flex-col gap-8">
                {ExperienceJSON.map((experience, index) => (
                    <div 
                    key={index} 
                    className="flex flex-col gap-2 group">
                        <span className="text-xs text-slate-600 font-semibold">{experience.period}</span>
                        <h3 className="flex items-center gap-2 group-hover:text-primary">
                            {experience.place}
                        </h3>
                        <p className="text-sm lg:text-base italic group-hover:text-primary">{experience.role} · <span>{experience.status}, {experience.type}</span></p>
                        <p className="text-sm text-slate-600 lg:text-base">
                            {experience.description}
                        </p>
                        <ul className="pl-5 list-disc leading-relaxed text-slate-600">
                        {experience.achievements?.map((achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                        ))}
                        </ul>
                        <div className="flex flex-wrap items-center gap-2">
                        {experience.tech_stack.map((tech, indexTech) => (
                            <Badge key={indexTech}>{tech}</Badge>
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