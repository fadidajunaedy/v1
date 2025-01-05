import EducationJSON from "../../../data/education.json"

const Education = () => {
    return (
        <>
            <article id="education" className="flex flex-col gap-4">
                <h2 className="sticky top-0 lg:hidden">EDUCATION</h2>
                <div className="flex flex-col gap-8">
                {EducationJSON.map((education, index) => (
                    <div 
                    key={index}
                    className="flex flex-col gap-2 cursor-pointer group">
                    <h3 className="flex items-center gap-2 group-hover:text-primary">
                        {education.place} ({education.period})
                    </h3>
                    <h3 className="text-sm lg:text-base italic group-hover:text-primary">
                        {education.title}
                    </h3>
                    <p className="text-sm lg:text-base">
                        {education.description}
                    </p>
                    </div>
                ))}
                </div>
            </article>
        </>
    )
}

export default Education