export default function BurgerIcon({ open, onClick }) {
    return (
        <div
            onClick={onClick}
            className="relative w-7 h-[19px] cursor-pointer flex flex-col justify-between items-end"
        >
            <span
                className={`block h-[2px] w-5 rounded-[10px] bg-white transform transition-all duration-300 ease-in-out
                    ${open ? 'translate-y-[0.55rem] rotate-45 w-full' : 'translate-y-0 rotate-0'}
                `}
            />
            <span
                className={`block h-[2px] w-full rounded-[10px] bg-white transition-all duration-300 ease-in-out
                    ${open ? 'opacity-0' : 'opacity-100'}
                `}
            />
            <span
                className={`block h-[2px] w-3 rounded-[10px] transform transition-all duration-300 ease-in-out
                    ${open ? '-translate-y-[8px] -rotate-45 w-full bg-white' : 'bg-gradient-ls translate-y-0 rotate-0'}
                `}
            />
        </div>
    );
}
