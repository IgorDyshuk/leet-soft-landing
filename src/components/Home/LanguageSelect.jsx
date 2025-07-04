import { useEffect, useRef, useState } from 'react';
import ArrowDown from "../ArrowDown.jsx";


export default function LanguageSelect() {
    const languages = ['EN', 'RU', 'UA'];
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('EN');
    const dropdownRef = useRef(null);

    const handleSelect = (lang) => {
        setSelected(lang);
        setOpen(false);
    };

    // Закрытие по клику вне dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative z-30" ref={dropdownRef}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 uppercase hover:cursor-pointer"
            >
                {selected}
                <ArrowDown rotate={open}/>
            </button>

                <ul className={`absolute right-0 mt-2 w-18 bg-black bg-opacity-90 border border-white rounded-md shadow-lg transform transition-all duration-500 ease-in-out ${
                    open ? 'opacity-100 translate-y-1 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'
                }`}>
                    {languages.map((lang) => (
                        <li
                            key={lang}
                            onClick={() => handleSelect(lang)}
                            className="px-3 py-2 cursor-pointer hover-gradient-ls"
                        >
                            {lang}
                        </li>
                    ))}
                </ul>
        </div>
    );
}
