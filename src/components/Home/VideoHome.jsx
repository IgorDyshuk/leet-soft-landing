import videoBg from "../../assets/videoBg.mp4";
import {useEffect, useRef} from "react";

export default function VideoHome() {
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
        <div className="overflow-hidden xl:mt-0">
            <div className={'relative ' +
                'pt-[4.75rem] sm:pt-[7rem] md:pt-[8rem] lg:pt-0 pb-32.5 sm:pb-50 md:pb-60 lg:pb-0'}>
                <div
                    className={"absolute lg:hidden top-0 w-full bg-gradient-to-t from-transparent to-black h-20 z-10"}></div>
                <video
                    ref={videoRef}
                    src={videoBg}
                    autoPlay
                    loop
                    playsInline
                    muted
                    className="relative w-full h-auto object-cover transform scale-220 lg:scale-123"
                />
                <div className={"absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black " +
                    "h-40 sm:h-70 md:h-70 lg:h-70 xl:h-80 2xl:h-100 z-10"}>

                </div>
                <div className={"lg:w-full lg:bg-black lg:h-[90px] xl:h-[100px] 2xl:h-[90px]"}></div>
            </div>
        </div>
    )
}