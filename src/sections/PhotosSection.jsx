import useEmblaCarousel from "embla-carousel-react";
import {NextButton, PrevButton, usePrevNextButtons} from "../components/EmblaCrousel/EmblaCarouselArrowButtons.jsx";
import EmblaCarousel from "../components/EmblaCrousel/EmblaCarousel.jsx";
import {photos} from "../components/Photos/photos.js";

export default function PhotosSection() {
    const OPTIONS = {align: 'start'}
    const SLIDE_COUNT = 5
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
            paddingBottom: "clamp(4.875rem, 3.7325rem + 5.2229vw, 10rem)",
        }}
    >
        <div className={"flex justify-between overflow-scroll container-px-clamp "}
        >
            <h1 className={"uppercase section-h1-clamp"}
            >
                Our photos
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
            items={photos}
            slides={SLIDES}
            emblaRef={emblaRef}
            options={OPTIONS}
            styles={"embla embla-reviews embla-photos"}
        />
    </section>)
}