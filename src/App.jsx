import './App.css'
import HomeSection from "./sections/HomeSection.jsx";
import {useEffect, useState} from "react";
import ServicesSection from "./sections/ServicesSection.jsx";

function App() {
    const [zoomStyle, setZoomStyle] = useState({});

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
        <div className={"font-unbounded"} style={zoomStyle}>
            <HomeSection/>

            <ServicesSection/>
        </div>
    )
}

export default App
