import Logo1 from '/src/assets/Logo 1.svg'
import LanguageSelect from "./LanguageSelect.jsx";

export default function Header() {
    return (<div className="flex items-center justify-between uppercase px-clamp py-[32px] text-[1.28rem]
        bg-gradient-to-t from-transparent to-black">
        <div className="flex items-center gap-5.5">
            <img src={Logo1} alt="Logo" className={"scale-134"}/>
            <span className=" text-[32px] leading-[130%]">
                    leet<span className={"text-gradient-ls"}>soft</span>
                </span>
        </div>

        <div className="flex gap-9.5">
            {['about us', 'our services', 'process', 'tools', 'projects', 'contact'].map((item) => (
                <span
                    key={item}
                    className={`cursor-pointer ${
                        item === 'our services' ? 'text-gradient-ls hover:text-white' : 'hover-gradient-ls'
                    }`}
                >
                    {item}
                </span>
            ))}
        </div>


        <div className={"flex items-center gap-2"}>
            <LanguageSelect/>
        </div>
    </div>)
}