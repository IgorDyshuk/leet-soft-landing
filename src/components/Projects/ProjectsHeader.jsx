import {NextButton, PrevButton, usePrevNextButtons} from "../EmblaCrousel/EmblaCarouselArrowButtons.jsx";

export default function ProjectsHeader({ emblaApi, activeFilter, setActiveFilter }) {
    const filters = ["All Projects", "SaaS", "Web", "Mobile App", "Web3", "Blockchain"]

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="flex justify-between overflow-scroll container-px-clamp ">
            <div
                className="flex font-mulish font-bold text-nowrap"
                style={{
                    fontSize: "clamp(1rem, 0.9203rem + 0.3268vw, 1.3125rem)",
                    gap: "clamp(0.5rem, 0.3885rem + 0.5096vw, 1rem)"
                }}
            >
                {filters.map((filter, index) => {
                    const isActive = activeFilter === filter

                    return (
                        <button
                            key={index}
                            className={`filter ${isActive ? "active-filter" : ""}`}
                            onClick={() => setActiveFilter(filter)}
                            style={{
                                color: isActive ? "white" : "black",
                                background: isActive
                                    ? "linear-gradient(90deg, #00F4E6, #2C9AFF)"
                                    : undefined,
                            }}
                        >
                            {filter}
                        </button>
                    )
                })}
            </div>

            <div className="hidden lg:grid embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </div>
    )
}
