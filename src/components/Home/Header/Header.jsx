import {useEffect, useRef, useState} from "react";
import LanguageSelect from "../LanguageSelect.jsx";
import Logo from "../Logo.jsx";
import BurgerMenuButton from "./BurgerMenuButton.jsx";
import BurgerMenu from "./BurgerMenu.jsx";

export default function Header() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div
                className="relative z-[100] flex items-center justify-between uppercase container-px-clamp pt-header-clamp header-font-clamp
            bg-black xl:bg-transparent xl:bg-gradient-to-t xl:from-transparent xl:to-black"
                style={{'--header-height': 'clamp(64px, 10vw, 100px)'}}
                ref={dropdownRef}
            >
                <Logo/>

                <div className="hidden xl:flex header-gap-clamp">
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

                <div className="hidden xl:flex items-center gap-2">
                    <LanguageSelect/>
                </div>

                <div className="xl:hidden flex items-center gap-2">
                    <BurgerMenuButton open={open} setOpen={setOpen}/>
                </div>
            </div>

            <BurgerMenu open={open}/>

        </>
    );
}
