import {useEffect, useRef} from "react";

export default function BurgerMenu({open, menuItems, setOpen}) {
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
        <div
            ref={dropdownRef}
            className={`absolute z-[90] top-[var(--header-height)] right-0 w-screen border-b bg-black bg-opacity-90 shadow-lg transform transition-all duration-500 ease-in-out ${
                open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'
            }`}
        >
            <nav className="flex flex-col gap-8 py-6 items-end uppercase text-white container-px-clamp">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            setOpen(false);
                            const target = document.getElementById(item.id);
                            if (target) {
                                target.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="cursor-pointer hover-gradient-ls text-right w-full uppercase"
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </div>
    );
}