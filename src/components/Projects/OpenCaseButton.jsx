export default function OpenCaseButton() {
    return (
        <button className={" mt-[24px] uppercase flex text-gradient-ls flex items-center gap-[11px] "}
                style={{fontSize: "clamp(1rem, 0.9203rem + 0.3268vw, 1.3125rem)",}}
        >

            <span className={"underline-gradient"}>open case</span>
            <svg
                width="21"
                height="21"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-200 ease-in-out"
            >
                <defs>
                    <linearGradient id="arrow-gradient" x1="2" y1="2" x2="16" y2="16"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00F4E6"/>
                        <stop offset="1" stopColor="#2C9AFF"/>
                    </linearGradient>
                </defs>
                <path
                    d="M13.5876 6.11792L4.05883 15.6468C3.58785 16.1177 2.82423 16.1177 2.35324 15.6468C1.88227 15.1758 1.88225 14.4122 2.35319 13.9412L11.8809 4.41237H3.93819C3.27203 4.41237 2.73201 3.87234 2.73201 3.20619C2.73201 2.54003 3.27203 2 3.93819 2H14.272C15.2263 2 16 2.77365 16 3.728V14.0619C16 14.728 15.46 15.268 14.7938 15.268C14.1277 15.268 13.5876 14.728 13.5876 14.0619V6.11792Z"
                    fill="url(#arrow-gradient)"
                    className={`transition-all duration-250 ease-in-out`}
                />
            </svg>
        </button>
    )
}