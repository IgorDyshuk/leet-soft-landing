import MainSection from "./MainSection.jsx";
import OfficesSection from "./OfficesSection.jsx";
import ContactSection from "./ContactsSection.jsx";

export default function Footer() {
    return (
        <div className={"footer flex flex-wrap justify-between items-center gap-x-[10px] xl:gap-x-[0] gap-y-[40px]"}
             style={{
                 padding: "clamp(2.375rem, 2.1521rem + 1.0191vw, 3.375rem) clamp(1.25rem, -0.6936rem + 7.9739vw, 8.875rem)"
             }}
        >
            <MainSection/>

            <OfficesSection/>

            <ContactSection/>
        </div>
    )
}