import { MdArrowOutward } from "react-icons/md"
import CertificationJSON from "../../../data/certification.json"

const Certification = () => {
    return (
        <>
            <article id="certification" className="flex flex-col gap-4">
                <h2 className="sticky top-0 lg:hidden text-primary">CERTIFICATION</h2>
                <div className="flex flex-col gap-8">
                {CertificationJSON.map((certification, index) => (
                    <a 
                    key={index}
                    href={certification.link}
                    target="_blank"
                    className="flex flex-col gap-2 cursor-pointer group">
                    <span className="text-xs text-slate-600 font-semibold">{certification.date}</span>
                    <h3 className="flex items-center gap-2 group-hover:text-primary">
                        {certification.title}
                        <MdArrowOutward className="transition-transform group-hover:-translate-y-2 group-hover:translate-x-2"/>
                    </h3>
                    <p className="text-sm lg:text-base italic group-hover:text-primary">{certification.publisher}</p>
                    </a>
                ))}
                </div>
            </article>
        </>
    )
}

export default Certification