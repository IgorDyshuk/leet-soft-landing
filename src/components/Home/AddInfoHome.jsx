import lightning from "../../assets/homeSvg/lightning.svg";
import quality from "../../assets/homeSvg/quality.svg"
import bestPractices from "../../assets/homeSvg/bestPractices.svg"

export default function AddInfoHome() {
    const addInfo = [
        {
            icon: lightning,
            title: "speed",
            text: "We're dedicated to delivering results quickly, according to our deadlines. Timely project completion is our priority."
        },
        {
            icon: quality,
            title: "quality",
            text: "We ensure that our projects are technically well-designed, making them easy to maintain and allowing for the addition of new features."
        },
        {
            icon: bestPractices,
            title: "best practices",
            text: "We always keep an eye on the industry's best practices to implement our clients' features as effectively as possible."
        },
    ]

    return (
        <div
            className={"xl:absolute bg-black xl:bg-transparent bottom-0 w-full z-20 container-px-clamp grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}
            style={{columnGap: "clamp(1.875rem, -5.625rem + 11.7188vw, 8.4375rem)"}}
        >
            {addInfo.map((item, index) => (
                <div key={index} className={
                    "flex flex-col min-w-0 flex-[1_1_0%] " +
                    (index === addInfo.length - 2 ? "max-w-[493px]" : "max-w-[443px]")
                }
                     style={{paddingBottom: "clamp(2rem, 1.315rem + 2.8105vw, 4.6875rem)"}}
                >
                    <img src={item.icon} alt="" className="add-info-icon-clamp"/>
                    <h1 className={"uppercase leading-[1.2]"}
                        style={{
                            fontSize: "clamp(1.5rem, 1.3725rem + 0.5229vw, 2rem)",
                            paddingTop: "clamp(1rem, 0.9203rem + 0.3268vw, 1.3125rem)",
                        }}
                    >
                        {item.title}
                    </h1>
                    <p className={"font-mulish leading-[1.3]"}
                       style={{
                           fontSize: "clamp(1rem, 0.9203rem + 0.3268vw, 1.3125rem)",
                           paddingTop: "clamp(0.5625rem, 0.5306rem + 0.1307vw, 0.6875rem)",
                       }}
                    >
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    )
}