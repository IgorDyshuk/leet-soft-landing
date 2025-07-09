import React from 'react'
import ProjectCard from "../Projects/ProjectCard.jsx";
import ReviewCard from "../Reviews/ReviewCard.jsx";
import {reviews} from "../Reviews/reviews.js";
import PhotoCard from "../Photos/PhotoCard.jsx";

const EmblaCarousel = ({emblaRef, items, styles, card}) => {

    return (
        <div className={`${styles}`}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {items.map((item) => (
                        <div className="embla__slide" key={item.id}>
                            {card === "project" ? (
                                <ProjectCard item={item}/>
                            ) : card === "review" ? (
                                <ReviewCard item={item}/>
                            ) : (
                                <PhotoCard item={item}/>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
