import { useEffect, useState } from "react"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { MdOutlineLocalPhone } from "react-icons/md"
import { GoMail } from "react-icons/go"

const Header = () => {
    const [sections, setSections] = useState([
        {
          id: "about",
          title: "ABOUT"
        },
        {
          id: "experience",
          title: "EXPERIENCE"
        },
        {
          id: "education",
          title: "EDUCATION"
        },
        {
          id: "certification",
          title: "CERTIFICATION"
        },
        {
          id: "projects",
          title: "PROJECTS"
        }
    ])
    
    const [activeId, setActiveId] = useState('')
    
    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
    }
    
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.7 })
    
        const sectionElements = document.querySelectorAll('article')
        sectionElements.forEach((section) => {
          observer.observe(section)
        })
    
        return () => {
          sectionElements.forEach((section) => {
            observer.unobserve(section)
          })
        }
    }, [])

    return (
        <>
            <header className="lg:sticky lg:top-0 lg:self-start lg:w-1/2 lg:h-screen flex flex-col gap-4 py-12 lg:py-24">
                <h1>Fadida Junaedy</h1>
                <h2>Web Developer</h2>
                <p className="max-w-sm">I enjoys turning ideas into functional and useful web applications.</p>
                <nav className="hidden lg:flex flex-col gap-6 mt-12">
                {sections.map((section) => (
                    <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`group transition flex items-center gap-2 w-[fit-content] hover:text-primary ${activeId === section.id && 'font-bold text-primary'}`}>
                        <span className={`block transition w-[3rem] group-hover:w-[6rem] ${activeId === section.id && 'w-[6rem]'} h-[1px] bg-gray-500`}></span>{section.title}
                    </a>
                ))}
                </nav>
                <div className="flex items-center gap-8 mt-[unset] lg:mt-auto">
                    <a 
                    href="tel:+6289501437800"
                    target="_blank"
                    className="hover:text-primary cursor-pointer">
                        <MdOutlineLocalPhone size={24} />
                    </a>
                    <a 
                    href="mailto:fadidajunaedy@gmail.com"
                    target="_blank"
                    className="hover:text-primary cursor-pointer">
                        <GoMail size={24} />
                    </a>
                    {/* <a 
                    href="https://www.instagram.com/fadidajunaedy"
                    target="_blank"
                    className="hover:text-primary cursor-pointer">
                        <FaInstagram size={24} />
                    </a> */}
                    <a 
                    href="https://github.com/fadidajunaedy"
                    target="_blank"
                    className="hover:text-primary cursor-pointer">
                        <FaGithub size={24} />
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/fadidajunaedy"
                    target="_blank"
                    className="hover:text-primary cursor-pointer">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header