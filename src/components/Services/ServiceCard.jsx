import web from "/src/assets/servicesSvg/web.svg"
import "./serviceCard.css"
import {useEffect, useLayoutEffect, useRef, useState} from "react";

export default function ServiceCard() {
    const [isOpen, setIsOpen] = useState(false);
    const [closedHeight, setClosedHeight] = useState(0);
    const cardRef = useRef(null);
    const [showTags, setShowTags] = useState(false);

    useEffect(() => {
        let timeout;
        if (isOpen) {
            timeout = setTimeout(() => setShowTags(true), 50); // задержка 300мс
        } else {
            setShowTags(false);
        }
        return () => clearTimeout(timeout);
    }, [isOpen]);


    const tags = ["Web Platforms", "Corporate Sites", "E-commerce", "Landing page"];

    function getResponsiveGap() {
        const width = window.innerWidth;
        if (width >= 1280) return 24;
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



    const calculatedHeight = isOpen
        ? closedHeight * 2 + getResponsiveGap()
        : closedHeight || "auto";


    return (
        <div
            ref={cardRef}
            className="relative bg-white rounded-4xl overflow-hidden flex flex-col card"
            style={{
                padding: "clamp(1.15rem, 0.6686rem + 1.3595vw, 2.3rem)",
                height: isOpen ? calculatedHeight : undefined,
                transition: "height 0.3s ease-in-out",
            }}
        >
            <img src={web} alt="icon" className="mb-[1.25rem]"
                 style={{
                     width: 'clamp(2.2rem, 1.8686rem + 1.3595vw, 3.5rem)',
                     height: 'clamp(2.2rem, 1.8686rem + 1.3595vw, 3.5rem)'
                 }}
            />

            <h2 className="uppercase mb-2 md:mb-3 xl:mb-4"
                style={{fontSize: 'clamp(1.2rem, 0.9961rem + 0.8366vw, 2rem)'}}
            >
                Web Development
            </h2>

            <div className="pb-2 font-mulish overflow-hidden">
                <div
                    className="font-mulish home-font-clamp"
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        transition: "max-height 0.6s ease-in-out",
                        maxHeight: showTags ? "1000px" : "1.5em",
                        WebkitLineClamp: isOpen ? "unset" : 1
                    }}
                >
                    <span
                        className="font-bold">We build websites that deliver results and solve real business problems</span>
                    , from landing pages to e-commerce platforms.
                </div>
            </div>

            <div
                className="flex transition-all duration-500 ease-in-out flex-wrap gap-3 xl:gap-4 mt-auto w-[18rem] sm:w-[32rem] md:w-[40rem] lg:w-[45rem] xl:w-[30rem] 2xl:w-[40rem]"
                style={{
                    maxHeight: showTags ? "150px" : 'clamp(1.9375rem, 1.6667rem + 1.1111vw, 3rem)',
                    overflow: showTags ? "visible" : "hidden",
                    transition: "max-height 0.3s ease-in-out",
                }}
            >
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-ls-lightgrey font-mulish font-bold rounded-full"
                        style={{
                            fontSize: 'clamp(0.875rem, 0.7635rem + 0.4575vw, 1.3125rem)',
                            paddingRight: 'clamp(0.9375rem, 0.4688rem + 1.5vw, 1.3125rem)',
                            paddingTop: 'clamp(0.3125rem, 0.0781rem + 0.75vw, 0.5rem)',
                            paddingBottom: 'clamp(0.3125rem, 0.0781rem + 0.75vw, 0.5rem)',
                        }}
                    >
                        <span className="bg-gradient-ls rounded-full"
                              style={{
                                  width: "clamp(0.625rem, 0.5772rem + 0.1961vw, 0.8125rem)",
                                  height: "clamp(0.625rem, 0.5772rem + 0.1961vw, 0.8125rem)",
                                  marginLeft: "clamp(0.58rem, 0.5035rem + 0.3137vw, 0.88rem)",
                                  marginRight: "clamp(0.38rem, 0.3035rem + 0.3137vw, 0.68rem)",
                              }}
                        ></span>
                        {tag}
                    </div>
                ))}
            </div>


            <div
                onClick={() => setIsOpen(!isOpen)}
                className="absolute z-20 -bottom-2 -right-2 pt-9 w-[4rem] h-[4rem] rounded-full bg-gray-100 flex items-center justify-center cutout"
                style={{
                    width: 'clamp(4rem, 1.5rem + 8vw, 6rem)',
                    height: 'clamp(4rem, 1.5rem + 8vw, 6rem)',
                }}
            >
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    rounded-full
                    flex items-center justify-center cursor-pointer group
                    ${isOpen ? "bg-gradient-ls" : "bg-white hover-gradient-desktop"}`}
                     style={{
                         width: 'clamp(2.66rem, 2.242rem + 1.715vw, 4.3rem)',
                         height: 'clamp(2.66rem, 2.242rem + 1.715vw, 4.3rem)',
                     }}
                >
                    <div
                        className={`transition-transform duration-300 ease-in-out transform
                        ${isOpen ? "-rotate-45" : "group-hover:rotate-45"} `}
                    >
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-all duration-200 ease-in-out"
                        >
                            <defs>
                                <linearGradient id="arrow-gradient" x1="2" y1="2" x2="16" y2="16"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00F4E6"/>
                                    <stop offset="1" stopColor="#2C9AFF"/>
                                </linearGradient>
                            </defs>
                            <path
                                d="M13.5876 6.11792L4.05883 15.6468C3.58785 16.1177 2.82423 16.1177 2.35324 15.6468C1.88227 15.1758 1.88225 14.4122 2.35319 13.9412L11.8809 4.41237H3.93819C3.27203 4.41237 2.73201 3.87234 2.73201 3.20619C2.73201 2.54003 3.27203 2 3.93819 2H14.272C15.2263 2 16 2.77365 16 3.728V14.0619C16 14.728 15.46 15.268 14.7938 15.268C14.1277 15.268 13.5876 14.728 13.5876 14.0619V6.11792Z"
                                fill="url(#arrow-gradient)"
                                className={`transition-all duration-200 ease-in-out group-hover:fill-white
                                ${isOpen ? "fill-white" : "group-hover:fill-white"}`}
                            />
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    );
}