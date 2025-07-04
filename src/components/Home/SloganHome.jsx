import cirle from "../../assets/homeSvg/circle.svg";
import arrow from "../../assets/homeSvg/arrow.svg";

export default function SloganHome() {
    return (
        <div
            className="lg:absolute z-20 container-px-clamp pt-4 lg:pt-[10rem]  2xl:pt-[12rem] pb-3 w-full bg-black lg:bg-transparent">
            <div className="grid grid-cols-[2fr_1fr]">
                <div className="flex flex-col">
                    <div className="flex flex-col uppercase home-head-font-clamp leading-[1.2]">
                        <span>custom</span>
                        <span>software</span>
                        <span className="text-gradient-ls">development</span>
                    </div>
                    <span
                        className={"font-mulish home-font-clamp home-info-padding-clamp home-info-width-clamp leading-[1.3]"}>
                            We are a full-cycle web and mobile development company that exercises quality and communication
                        </span>
                </div>

                <div className={"hidden lg:flex items-start justify-end "}>
                    <div
                        className={'flex items-center gap-5 font-unbounded-medium uppercase home-scroll-font-clamp'}>
                        scroll down
                        <button
                            onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}
                            className="relative w-[42px] h-[42px] cursor-pointer"
                        >
                            <img src={cirle} alt="" className="w-full h-full object-contain"/>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <img src={arrow} alt="" className="w-[22px] h-[22px]"/>
                            </div>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}