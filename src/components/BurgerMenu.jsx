export default function BurgerMenu({open}) {

    return (
        <div
            className={`absolute z-[90] top-[(--header-height)] right-0 w-screen border-b bg-black bg-opacity-90 shadow-lg transform transition-all duration-500 ease-in-out ${
                open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'
            }`}
        >
            <nav className="flex flex-col gap-8 py-6 items-end uppercase text-white container-px-clamp">
                {['about us', 'our services', 'process', 'tools', 'projects', 'contact'].map((item) => (
                    <span key={item} className="cursor-pointer hover-gradient-ls">
                            {item}
                        </span>
                ))}
            </nav>
        </div>
    );
}
