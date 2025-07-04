import {useEffect, useState} from "react";

export default function ServiceCardTags({isOpen}) {
    const tags = ["Web Platforms", "Corporate Sites", "E-commerce", "Landing page"];

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

    return (
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
    )
}