import useEmblaCarousel from "embla-carousel-react";
import {reviews} from "../components/Reviews/reviews.js";
import EmblaCarousel from "../components/EmblaCrousel/EmblaCarousel.jsx";
import {NextButton, PrevButton, usePrevNextButtons} from "../components/EmblaCrousel/EmblaCarouselArrowButtons.jsx";

export default function ReviewsSection() {
    const OPTIONS = {align: 'start'}
    const SLIDE_COUNT = 4
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi)

    return (<section
        className={"bg-white"}
        style={{
            padding: "clamp(4.875rem, 3.7325rem + 5.2229vw, 10rem) 0",
        }}
    >
        <div className={"flex justify-between overflow-scroll container-px-clamp "}
        >
            <h1 className={"uppercase section-h1-clamp"}
            >
                Reviews
            </h1>

            <div className="hidden lg:grid embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                </div>
            </div>
        </div>


        <EmblaCarousel
            card={""}
            items={reviews}
            slides={SLIDES}
            emblaRef={emblaRef}
            options={OPTIONS}
            styles={"embla embla-reviews"}
        />
    </section>)
}