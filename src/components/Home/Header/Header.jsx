import {useEffect, useRef, useState} from "react";
import LanguageSelect from "../LanguageSelect.jsx";
import Logo from "../Logo.jsx";
import BurgerMenuButton from "./BurgerMenuButton.jsx";
import BurgerMenu from "./BurgerMenu.jsx";

export default function Header() {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { id: 'about', label: 'about us' },
        { id: 'services', label: 'our services' },
        { id: 'process', label: 'process' },
        { id: 'tools', label: 'tools' },
        { id: 'projects', label: 'projects' },
        { id: 'contact', label: 'contact' }
    ];

    return (
        <>
            <div
                className="relative z-[100] flex items-center justify-between uppercase container-px-clamp pt-header-clamp header-font-clamp
            bg-black xl:bg-transparent xl:bg-gradient-to-t xl:from-transparent xl:to-black"
                style={{'--header-height': 'clamp(64px, 10vw, 100px)'}}
            >
                <Logo/>

                <div className="hidden xl:flex header-gap-clamp">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                const target = document.getElementById(item.id);
                                if (target) {
                                    target.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className={`cursor-pointer uppercase hover-gradient-ls`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="hidden xl:flex items-center gap-2">
                    <LanguageSelect/>
                </div>

                <div className="xl:hidden flex items-center gap-2">
                    <BurgerMenuButton open={open} setOpen={setOpen}/>
                </div>
            </div>

            <BurgerMenu open={open} menuItems={menuItems} setOpen={setOpen} />
        </>
    );
}
