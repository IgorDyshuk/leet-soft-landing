import Logo1 from "../../assets/homeSvg/Logo 1.svg";
import {useEffect, useRef} from "react";

export default function Logo() {
    const logoRef = useRef(null);

    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;

            if (width >= 900) {
                logoRef.current.style.transform = "scale(1.34)";
            } else {
                const scale = Math.max(1, 1.34 - (900 - width) * 0.0006);
                logoRef.current.style.transform = `scale(${scale})`;
            }
        };

        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    return (
        <div className="flex items-center logo-spacing">
            <img ref={logoRef} src={Logo1} alt="Logo"/>
            <span className="font-logo-clamp leading-[130%]">
                leet<span className={"text-gradient-ls"}>soft</span>
            </span>
        </div>
    )
}

