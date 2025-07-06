import React from 'react'
import {projects} from "../Projects.js";
import ProjectCard from "../ProjectCard.jsx";

const EmblaCarousel = ({emblaRef}) => {

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {projects.map((project) => (
                        <div className="embla__slide" key={project.id}>
                            <ProjectCard project={project}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
