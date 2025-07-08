import ProjectsHeader from "../components/Projects/ProjectsHeader.jsx";
import "/src/components/Projects/Projects.css"
import '/src/components/EmblaCrousel/embla.css'
import EmblaCarousel from "../components/EmblaCrousel/EmblaCarousel.jsx";
import useEmblaCarousel from "embla-carousel-react";
import {projects} from "../components/Projects/Projects.js";
import {useMemo, useState} from "react";

export default function ProjectsSections() {
    const OPTIONS = {align: 'center'}
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

    const [activeFilter, setActiveFilter] = useState("All Projects")

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All Projects") return projects
        return projects.filter((project) => project.filters.includes(activeFilter))
    }, [activeFilter])

    return (<section
        id={"projects"}
        className={"bg-white"}
        style={{
            paddingTop: "clamp(2.5rem, 1.9427rem + 2.5478vw, 5rem)",
            paddingBottom: "clamp(4.875rem, 3.7325rem + 5.2229vw, 10rem)"
        }}
    >
        <h1 className={"uppercase section-h1-clamp container-px-clamp "}
            style={{paddingBottom: "clamp(1rem, 0.7451rem + 1.0458vw, 2rem)"}}
        >
            projects
        </h1>

        <ProjectsHeader emblaApi={emblaApi} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>

        <EmblaCarousel
            card = {"project"}
            items={filteredProjects}
            slides={SLIDES}
            emblaRef={emblaRef}
            options={OPTIONS}
            styles={"embla"}
        />
    </section>)
}