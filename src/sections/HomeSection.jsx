import Header from "../components/Header.jsx";
import videoBg from '/src/assets/videoBg.mp4';
import { useEffect, useRef } from "react";

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

            <div className="z-20 xl:absolute xl:inset-x-0 xl:top-0">
                <Header />
            </div>

            <div className="relative flex-grow overflow-hidden xl:mt-0">
                <video
                    ref={videoRef}
                    src={videoBg}
                    autoPlay loop playsInline
                    className="relative w-full h-auto object-cover video-clamp transform"
                />
                <div className={"lg:w-full lg:bg-black lg:h-[200px]"}></div>
            </div>

            <div className="absolute z-20 container-px-clamp">
                <div className="grid grid-cols-2">
                    <div className="flex">
                    </div>
                    <div className="grid grid-rows-3">
                        {/* Ваш контент */}
                    </div>
                </div>
            </div>

        </section>
    );
}