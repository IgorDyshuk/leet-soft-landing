import Header from "../components/Header.jsx";
import videoBg from '/src/assets/videoBg.mp4';
import {useEffect, useRef} from "react";
import cirle from "/src/assets/circle.svg";
import arrow from "/src/assets/arrow.svg";

export default function HomeSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        function updateScale() {
            const width = window.innerWidth;

            if (width > 1024) {
                videoRef.current.style.left = `clamp(0rem, -4.7535rem + 15.2113vw, 13.5rem)`;
                videoRef.current.style.top = `clamp(0rem, -1.4525rem + 4.6479vw, 4.125rem)`;
            } else {
                videoRef.current.style.left = `0`;
                videoRef.current.style.top = `clamp(0rem, -1.4525rem + 4.6479vw, 4.125rem)`;
            }
        }

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    return (
        <section className="text-white overflow-x-hidden flex flex-col">

            <div className="z-30 xl:absolute xl:inset-x-0 xl:top-0">
                <Header/>
            </div>

            <div
                className="lg:absolute z-20 container-px-clamp pt-4 lg:pt-[10rem]  2xl:pt-[12rem] pb-3 w-full bg-black lg:bg-transparent">
                <div className="grid grid-cols-[2fr_1fr]">
                    <div className="flex flex-col">
                        <div className="flex flex-col uppercase home-head-font-clamp leading-[1.2]">
                            <span>custom</span>
                            <span>software</span>
                            <span className="text-gradient-ls">development</span>
                        </div>
                        <span
                            className={"font-mulish home-font-clamp home-info-padding-clamp home-info-width-clamp leading-[1.3]"}>
                            We are a full-cycle web and mobile development company that exercises quality and communication
                        </span>
                    </div>

                    <div className={"hidden lg:flex items-start justify-end "}>
                        <div
                            className={'flex items-center gap-5 font-unbounded-medium uppercase home-scroll-font-clamp'}>
                            scroll down
                            <button
                                onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}
                                className="relative w-[42px] h-[42px] cursor-pointer"
                            >
                                <img src={cirle} alt="" className="w-full h-full object-contain"/>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img src={arrow} alt="" className="w-[22px] h-[22px]"/>
                                </div>
                            </button>

                        </div>

                    </div>
                </div>
            </div>

            <div className="overflow-hidden xl:mt-0">
                <div className={'relative ' +
                    'pt-[4.75rem] sm:pt-[7rem] md:pt-[8rem] lg:pt-0 pb-32.5 sm:pb-50 md:pb-60 lg:pb-0'}>
                    <div className={"absolute lg:hidden top-0 w-full bg-gradient-to-t from-transparent to-black h-20 z-10"}></div>
                    <video
                        ref={videoRef}
                        src={videoBg}
                        autoPlay loop playsInline
                        className="relative w-full h-auto object-cover transform scale-220 lg:scale-123"
                    />
                    <div className={"absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black " +
                        "h-40 sm:h-70 md:h-70 lg:h-70 xl:h-80 2xl:h-100 z-10"}>

                    </div>
                    <div className={"lg:w-full lg:bg-black lg:h-[90px] xl:h-[100px] 2xl:h-[90px]"}></div>
                </div>
            </div>


        </section>
    );
}