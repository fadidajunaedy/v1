import EducationJSON from "../../../data/education.json";

const Education = () => {
  return (
    <>
      <article id="education">
        <h3 className="lg:hidden text-primary mb-4">EDUCATION</h3>
        <div className="flex flex-col gap-8">
          {EducationJSON.map((education, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 cursor-pointer group"
            >
              <span className="md:hidden text-xs italic opacity-80">
                {education.period}
              </span>
              <div className="flex items-end gap-2">
                <h4 className="flex-shrink-0">{education.place}</h4>
                <span className="hidden md:block border-b-2 border-dotted border-gray-500 opacity-80 flex-grow"></span>
                <span className="hidden md:block text-xs italic opacity-80 flex-shrink-0">
                  {education.period}
                </span>
              </div>
              <h5 className="opacity-80">{education.title}</h5>
              <p className="opacity-60">{education.description}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default Education;
