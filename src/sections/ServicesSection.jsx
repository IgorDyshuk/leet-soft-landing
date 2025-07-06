import ServiceCard from "../components/Services/Service Card/ServiceCard.jsx";
import SelectCustomizedServices from "../components/Services/Select Cusimized Services/SelectCustomizedServices.jsx";
import {useEffect, useState} from "react";
import {serviceCards} from "../components/Services/Service Card/ServiceCards.js";

export default function ServicesSection() {
    const [leftColumn, setLeftColumn] = useState([]);
    const [rightColumn, setRightColumn] = useState([]);

    const cardsLeft = [
        <ServiceCard card={serviceCards[0]} key="l1" height="card first-card" />,
        <ServiceCard card={serviceCards[2]} key="l2" height="card" />,
        <ServiceCard card={serviceCards[4]} key="l3" height="last-card" />
    ];

    const cardsRight = [
        <ServiceCard card={serviceCards[1]} key="r1" height="card" />,
        <ServiceCard card={serviceCards[3]} key="r2" height="card" />,
        <SelectCustomizedServices key="r3" />
    ];

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1280) {
                const mixed = [];
                for (let i = 0; i < cardsLeft.length; i++) {
                    if (cardsLeft[i]) mixed.push(cardsLeft[i]);
                    if (cardsRight[i]) mixed.push(cardsRight[i]);
                }
                setLeftColumn(mixed);
                setRightColumn([]);
            } else {
                setLeftColumn(cardsLeft);
                setRightColumn(cardsRight);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <section id="services" className={"bg-ls-lightgrey container-px-clamp"}
                 style={{paddingBottom:'clamp(2.5rem, 1.7831rem + 2.9412vw, 5.3125rem)'}}
        >
            <h1 className={"uppercase section-h1-clamp"}
                style={{
                    paddingTop: "clamp(2.5rem, 1.8787rem + 2.549vw, 4.9375rem)",
                    paddingBottom: "clamp(2rem, 1.7132rem + 1.1765vw, 3.125rem)"
                }}>
                Services
            </h1>

            <div className="flex flex-col xl:grid gap-[1.25rem] xl:gap-[1.5rem] xl:grid-cols-2">
                <div className={"flex flex-col gap-[1.25rem] xl:gap-[1.5rem]"}>
                    {leftColumn.map((el, idx) => (
                        <div key={`left-${idx}`}>{el}</div>
                    ))}
                </div>
                <div className={"flex flex-col gap-[1.25rem] xl:gap-[1.5rem]"}>
                    {rightColumn.map((el, idx) => (
                        <div key={`right-${idx}`}>{el}</div>
                    ))}
                </div>
            </div>

        </section>
    )
}