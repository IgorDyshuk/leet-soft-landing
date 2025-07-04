import LanguageSelect from "../LanguageSelect.jsx";
import BurgerIcon from "./BurgerIcon.jsx";

export default function BurgerMenuButton({open, setOpen}) {

    return (
        <div className={"flex items-center gap-2 relative"}>
            <div
                className={`transition-all duration-500 ease-in-out transform ${
                    open
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-2 pointer-events-none'
                }`}
            >
                <div className="w-[60px]">
                    <LanguageSelect/>
                </div>
            </div>

            <BurgerIcon open={open} onClick={() => setOpen(!open)} />
        </div>
    )
}