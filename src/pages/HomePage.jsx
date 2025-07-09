import LoadingSection from "../sections/LoadingSection.jsx";
import HomeSection from "../sections/HomeSection.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import AboutUsSection from "../sections/AboutUsSection.jsx";
import ProjectsSections from "../sections/ProjectsSections.jsx";
import PartnersSection from "../sections/PartnersSection.jsx";
import ReviewsSection from "../sections/ReviewsSection.jsx";
import ToolsSection from "../sections/ToolsSection.jsx";
import TeamSection from "../sections/TeamSection.jsx";
import PhotosSection from "../sections/PhotosSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";

export default function HomePage({style, loading, setLoading}) {
    return (
        <div className={"font-unbounded bg-black"} style={style}>


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
                <PhotosSection/>
                <ContactSection/>
            </div>
        </div>
    )
}