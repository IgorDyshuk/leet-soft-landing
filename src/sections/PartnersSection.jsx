import image2 from '/src/assets/PartnersSvg/image2.svg'
import image3 from '/src/assets/PartnersSvg/image3.svg'
import image4 from '/src/assets/PartnersSvg/image4.svg'
import image5 from '/src/assets/PartnersSvg/image5.svg'
import image6 from '/src/assets/PartnersSvg/image6.svg'
import image7 from '/src/assets/PartnersSvg/image7.svg'
import image1 from "../assets/PartnersSvg/image1.svg";
import MarqueeItem from "../components/Partners/MarqueeItem.jsx";
import React from "react";

export default function PartnersSection() {
    const partnersImages = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
    ];

    return (
        <section className={"overflow-hidden bg-black"}
                 style={{padding: "clamp(2.375rem, 1.7201rem + 2.9936vw, 5.3125rem) 0px"}}
        >
            <h1 className={"uppercase section-h1-clamp container-px-clamp text-white"}
                style={{paddingBottom: "clamp(1.875rem, 1.7078rem + 0.7643vw, 2.625rem)"}}
            >
                our partners
            </h1>

            <div className="container mx-auto">
                <MarqueeItem images={partnersImages}/>
            </div>
        </section>
    )
}