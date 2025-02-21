import { MdArrowOutward } from "react-icons/md";
import CertificationJSON from "../../../data/certification.json";

const Certification = () => {
  return (
    <>
      <article id="certification">
        <h3 className="sticky top-0 lg:hidden text-primary mb-4">
          CERTIFICATION
        </h3>
        <div className="flex flex-col gap-8">
          {CertificationJSON.map((certification, index) => (
            <a
              key={index}
              href={certification.link}
              target="_blank"
              className="flex flex-col gap-2 cursor-pointer group"
            >
              <span className="md:hidden text-xs italic opacity-80">
                {certification.date}
              </span>
              <div className="flex items-end gap-2">
                <h4 className="flex-shrink-0 flex items-center gap-2 group-hover:text-primary">
                  {certification.title}
                  <MdArrowOutward className="transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" />
                </h4>
                <span className="hidden md:block border-b-2 border-dotted border-gray-500 opacity-80 flex-grow"></span>
                <span className="hidden md:block text-xs italic opacity-80 flex-shrink-0">
                  {certification.date}
                </span>
              </div>
              <h5 className="group-hover:text-primary opacity-80">
                {certification.publisher}
              </h5>
            </a>
          ))}
        </div>
      </article>
    </>
  );
};

export default Certification;
