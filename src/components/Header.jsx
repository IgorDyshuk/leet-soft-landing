import Logo1 from '/src/assets/Logo 1.svg'
import LanguageSelect from "./LanguageSelect.jsx";
import Logo from "./Logo.jsx";

export default function Header() {
    return (<div className="flex items-center justify-between uppercase container-px-clamp pt-header-clamp text-[1.28rem]
        bg-gradient-to-t from-transparent to-black">
        <Logo/>

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