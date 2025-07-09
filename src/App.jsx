import './App.css'
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

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
        <BrowserRouter>
            <Routes>
                <Route
                    path="leet-soft-landing"
                    element={<HomePage style={zoomStyle} loading={loading} setLoading={setLoading} />}
                />
            </Routes>

        </BrowserRouter>
    )
}

export default App
