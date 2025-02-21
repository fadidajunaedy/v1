import Badge from "../../../components/Badge";
import ExperienceJSON from "../../../data/experience.json";

const Experience = () => {
  return (
    <>
      <article id="experience">
        <h3 className=" lg:hidden text-primary mb-4">EXPERIENCE</h3>
        <div className="flex flex-col gap-8">
          {ExperienceJSON.map((experience, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="md:hidden text-xs font-semibold opacity-80">
                {experience.period}
              </span>
              <div className="flex items-end gap-2">
                <h4 className="text-xl md:text-2xl flex-shrink-0">
                  {experience.place}
                </h4>
                <span className="hidden md:block border-b-2 border-dotted border-gray-500 opacity-80 flex-grow"></span>
                <span className="hidden md:block text-xs italic opacity-80  flex-shrink-0">
                  {experience.period}
                </span>
              </div>
              <h5 className="italic opacity-80">
                {experience.role} ·{" "}
                <span>
                  {experience.status}, {experience.type}
                </span>
              </h5>
              <ul className="ml-4 list-disc opacity-60 mb-2">
                {experience.achievements?.map(
                  (achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  )
                )}
              </ul>
              <div className="flex flex-wrap items-center gap-2">
                {experience.tech_stack.map((tech, indexTech) => (
                  <span key={indexTech} className="opacity-60">
                    {tech}
                    {indexTech !== experience.tech_stack.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default Experience;
