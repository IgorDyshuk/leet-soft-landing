import Header from "../components/Header.jsx";
import videoBg from '/src/assets/videoBg.mp4'
import {useEffect, useRef} from "react";

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
        <section className={'relative text-white overflow-x-hidden min-h-screen'}>
            <video
                ref={videoRef}
                src={videoBg} autoPlay loop playsInline
                className="absolute inset-0 w-full h-auto object-cover z-0 video-clamp transform"
            />

            <div className="relative z-11">
                <Header/>
            </div>

            <div className="relative z-10 h-full min-h-screen px-36.5">
                <div className={'grid-cols-2'}>
                    <div className={"flex"}>

                    </div>
                    <div className={"grid-rows-3"}></div>
                </div>
            </div>

        </section>
    )
}