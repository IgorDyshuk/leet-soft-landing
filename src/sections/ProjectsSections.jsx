import ProjectsHeader from "../components/Projects/ProjectsHeader.jsx";
import "/src/components/Projects/Projects.css"
import '/src/components/Projects/EmblaCrousel/embla.css'
import EmblaCarousel from "../components/Projects/EmblaCrousel/EmblaCarousel.jsx";
import useEmblaCarousel from "embla-carousel-react";

export default function ProjectsSections() {
    const OPTIONS = { align: 'center' }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);


    return (
        <section id={"projects"} className={"bg-white overflow-hidden"}>
            <div className={"container-px-clamp "}>
                <h1 className={"uppercase section-h1-clamp"}
                    style={{paddingBottom: "clamp(1rem, 0.7451rem + 1.0458vw, 2rem)"}}
                >
                    projects
                </h1>

                <ProjectsHeader emblaApi={emblaApi}/>
            </div>

            <EmblaCarousel slides={SLIDES} emblaRef={emblaRef} options={OPTIONS} />
        </section>
    )
}