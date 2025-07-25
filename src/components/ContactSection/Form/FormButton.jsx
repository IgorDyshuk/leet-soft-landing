export default function FormButton() {
    return (
        <button
            type="submit"
            className="w-fit custom-card flex items-center py-[20px] px-[32px] rounded-2xl
                       hover: cursor-pointer"
            style={{
                gap: "clamp(0.625rem, 0.4975rem + 0.5229vw, 1.125rem)",
                padding: "clamp(0.9375rem, 0.8578rem + 0.3268vw, 1.25rem) clamp(1.5rem, 1.3725rem + 0.5229vw, 2rem)",
                marginTop: "10px",
            }}
        >
            <span className="uppercase text-white font-unbounded"
                  style={{fontSize: 'clamp(0.875rem, 0.7635rem + 0.4575vw, 1.3125rem)'}}
            >
                get started
            </span>
            <svg
                width="22"
                height="22"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-200 ease-in-out"
            >
                <defs>
                    <linearGradient id="arrow-gradient" x1="2" y1="2" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00F4E6"/>
                        <stop offset="1" stopColor="#2C9AFF"/>
                    </linearGradient>
                </defs>
                <path
                    d="M13.5876 6.11792L4.05883 15.6468C3.58785 16.1177 2.82423 16.1177 2.35324 15.6468C1.88227 15.1758 1.88225 14.4122 2.35319 13.9412L11.8809 4.41237H3.93819C3.27203 4.41237 2.73201 3.87234 2.73201 3.20619C2.73201 2.54003 3.27203 2 3.93819 2H14.272C15.2263 2 16 2.77365 16 3.728V14.0619C16 14.728 15.46 15.268 14.7938 15.268C14.1277 15.268 13.5876 14.728 13.5876 14.0619V6.11792Z"
                    fill="url(#arrow-gradient)"
                    className="fill-white"
                />
            </svg>
        </button>
    );
}
