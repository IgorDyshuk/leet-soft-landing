import './App.css'
import HomeSection from "./sections/HomeSection.jsx";
import {useEffect, useState} from "react";
import ServicesSection from "./sections/ServicesSection.jsx";
import AboutUsSection from "./sections/AboutUsSection.jsx";
import LoadingSection from "./sections/LoadingSection.jsx";
import ProjectsSections from "./sections/ProjectsSections.jsx";
import PartnersSection from "./sections/PartnersSection.jsx";
import ReviewsSection from "./sections/ReviewsSection.jsx";
import ToolsSection from "./sections/ToolsSection.jsx";
import TeamSection from "./sections/TeamSection.jsx";

function App() {
    const [zoomStyle, setZoomStyle] = useState({});
    const [loading, setLoading] = useState(() => {
        const alreadyVisited = sessionStorage.getItem("alreadyVisited");
        return !alreadyVisited;
    });

    useEffect(() => {
        function updateZoom() {
            const width = window.innerWidth;
            if (width >= 1280 && width <= 1700) {
                setZoomStyle({zoom: 0.9});
            } else {
                setZoomStyle({zoom: 1});
            }
        }

        updateZoom();
        window.addEventListener('resize', updateZoom);
        return () => window.removeEventListener('resize', updateZoom);
    }, []);

    return (
        <div className={"font-unbounded bg-black"} style={zoomStyle} >


            {loading && (
                <LoadingSection
                    onFinish={() => {
                        sessionStorage.setItem("alreadyVisited", "true");
                        setLoading(false);
                    }}
                />
            )}

            <div
                className={`
                    transition-opacity duration-350 ease-in-out
                    ${loading ? "opacity-0 pointer-events-none" : "opacity-100"}
                `}
                style={{
                    visibility: loading ? "hidden" : "visible"
                }}
            >
                <HomeSection/>
                <ServicesSection/>
                <AboutUsSection/>
                <ProjectsSections/>
                <PartnersSection/>
                <ReviewsSection/>
                <ToolsSection/>
                <TeamSection/>
            </div>
        </div>
    )
}

export default App
