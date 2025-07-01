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

            if (width >= 900) {
                videoRef.current.style.transform = `scale(1.23)`;
            } else {
                const scale = Math.max(1, 1.23 - (900 - width) * 0.000575);
                videoRef.current.style.transform = `scale(${scale})`;
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

            <div className="lg:absolute z-20 container-px-clamp pt-4 lg:pt-[12rem] pb-3 w-full bg-black lg:bg-transparent">
                <div className="grid grid-cols-[2fr_1fr]">
                    <div className="flex flex-col">
                        <div className="flex flex-col uppercase home-head-font-clamp leading-[1.2]">
                            <span>custom</span>
                            <span>software</span>
                            <span className="text-gradient-ls">development</span>
                        </div>
                        <span className={"font-mulish home-font-clamp mt-7 home-info-width-clamp leading-[1.3]"}>
                            We are a full-cycle web and mobile development company that exercises quality and communication
                        </span>
                    </div>

                    <div className={"hidden lg:flex items-start justify-end "}>
                        <div className={'flex items-center gap-5 font-unbounded-medium uppercase home-scroll-font-clamp'}>
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

            <div className="relative flex-grow overflow-x-hidden xl:mt-0">
                <video
                    ref={videoRef}
                    src={videoBg}
                    autoPlay loop playsInline
                    className="relative w-full h-auto object-cover video-clamp transform scale-180 md:scale-100"
                />
                <div className={"lg:w-full lg:bg-black lg:h-[200px]"}></div>
            </div>


        </section>
    );
}