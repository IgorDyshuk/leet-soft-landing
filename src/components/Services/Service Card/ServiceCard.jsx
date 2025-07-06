import "./serviceCard.css"
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import ServiceCardTags from "./ServiceCardTags.jsx";
import ServiceCardButton from "./ServiceCardButton.jsx";

export default function ServiceCard({card, height}) {
    const [isOpen, setIsOpen] = useState(false);
    const [closedHeight, setClosedHeight] = useState(0);
    const cardRef = useRef(null);
    const [showDescription, setShowDescription] = useState(false);
    const width = window.innerWidth;

    useEffect(() => {
        let timeout;
        if (isOpen) {
            timeout = setTimeout(() => setShowDescription(true), 50); // задержка 300мс
        } else {
            setShowDescription(false);
        }
        return () => clearTimeout(timeout);
    }, [isOpen]);

    function getResponsiveGap() {
        if (width >= 1700) return 24;
        if (width >= 1280) return 75;
        return 20;
    }

    useLayoutEffect(() => {
        if (cardRef.current) {
            if (closedHeight === 0 && !isOpen) {
                const height = cardRef.current.getBoundingClientRect().height;
                setClosedHeight(height);
            }
        }
    }, [isOpen, closedHeight]);


    const multiplier = (() => {
        if (height === 'last-card') {
            if (width <= 480) return 2.6;
            if (width <= 639) return 2.2;
            if (width <= 768) return 1.7;
            if (width <= 1024) return 1.5;
            if (width <= 1280) return 1.4;
            if (width <= 1535) return 1.4;
            return 1.5;
        }

        if (height === 'card first-card') {
            if (width <= 471) return 3.2;
            if (width <= 490) return 2.5;
            if (width <= 639) return 2.2;
            if (width <= 768) return 2.1;
            if (width <= 1024) return 1.9;
            if (width <= 1280) return 1.8;
            if (width <= 1555) return 2.1;
            return 2;
        }

        // default for other cards
        if (width <= 480) return 2.8;
        if (width <= 565) return 2.02;
        if (width <= 639) return 1.9;
        if (width <= 768) return 2;
        if (width <= 1024) return 1.8;
        if (width <= 1280) return 1.7;
        if (width <= 1535) return 2.2;
        return 2;
    })();



    const calculatedHeight =
        width > 639
            ? (isOpen ? closedHeight * multiplier + getResponsiveGap() : closedHeight || "auto")
            : (isOpen ? closedHeight * multiplier + getResponsiveGap() : "auto");


    return (
        <div
            ref={cardRef}
            className={`relative bg-white rounded-4xl overflow-hidden flex flex-col ${height}`}
            style={{
                padding: "clamp(1.15rem, 0.6686rem + 1.3595vw, 2.3rem)",
                height: isOpen ? calculatedHeight : undefined,
                transition: "height 0.3s ease-in-out",
            }}
        >
            <img src={card.icon} alt="icon" className="mb-[1.25rem]"
                 style={{
                     width: 'clamp(2.2rem, 1.8686rem + 1.3595vw, 3.5rem)',
                     height: 'clamp(2.2rem, 1.8686rem + 1.3595vw, 3.5rem)'
                 }}
            />

            <h2 className="uppercase mb-2 md:mb-3 xl:mb-4"
                style={{fontSize: 'clamp(1.2rem, 0.9961rem + 0.8366vw, 2rem)'}}
            >
                {card.title}
            </h2>

            <div className="pb-2 font-mulish overflow-hidden">
                <div
                    className={`font-mulish home-font-clamp ${isOpen ? '' : 'description-width'}`}
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        transition: "width max-height 0.6s ease-in-out",
                        maxHeight: showDescription ? "1000px" : "1.5em",
                        WebkitLineClamp: isOpen ? "unset" : 1,
                    }}
                >
                    <span
                        className="font-bold">{card.boldDescription}
                    </span>
                    {card.description}
                </div>
            </div>

            <ServiceCardTags tags={card.tags} isOpen={isOpen} height={height}/>

            <ServiceCardButton isOpen={isOpen} setIsOpen={setIsOpen}/>

        </div>
    );
}