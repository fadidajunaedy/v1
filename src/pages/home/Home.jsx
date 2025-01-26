import { MdArrowOutward } from "react-icons/md"

import About from "./sections/About"
import Certification from "./sections/Certification"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"

import FileResume from "../../assets/pdf/FADIDAJUNAEDY_RESUME_2025.pdf"

const Home = () => {
    return (
        <>
            <About />
            <hr />
            <Experience />
            <hr />
            <Education />
            <hr />
            <Certification />
            <hr />
            <a 
            href={FileResume}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 cursor-pointer group hover:text-primary font-bold">
                View Full Resume <MdArrowOutward className="transition-transform group-hover:-translate-y-2 group-hover:translate-x-2"/>
            </a>
            <hr />
            <Projects />
        </>
    )
}

export default Home