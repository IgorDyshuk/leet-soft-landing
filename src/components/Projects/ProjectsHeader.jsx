import React, {useState} from "react";
import "./Projects.css";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCrousel/EmblaCarouselArrowButtons.jsx'

export default function ProjectsHeader({ emblaApi }) {
    const filters = ["All Projects", "SaaS", "Web", "Mobile App", "Web3", "Blockchain"];
    const [activeFilter, setActiveFilter] = useState("All Projects");


    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="flex justify-between">
            <div className="flex gap-[16px] font-mulish font-bold"
                 style={{fontSize: "clamp(1rem, 0.9203rem + 0.3268vw, 1.3125rem)"}}
            >
                {filters.map((filter, index) => {
                    const isActive = activeFilter === filter;

                    return (
                        <button
                            key={index}
                            className={`filter ${isActive ? "active-filter" : ""}`}
                            onClick={() => setActiveFilter(filter)}
                            style={{
                                padding: "11px 22px",
                                color: isActive ? "white" : "black",
                                background: isActive
                                    ? "linear-gradient(90deg, #00F4E6, #2C9AFF)"
                                    : undefined
                            }}
                        >
                            {filter}
                        </button>
                    );
                })}
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                </div>
            </div>
        </div>
    );
}
