
export default function ArrowDown({rotate = false}) {
    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${rotate ? 'rotate-180' : ''}`}
        >
            <defs>
                <linearGradient id="gradient-stroke" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00F4E6"/>
                    <stop offset="1" stopColor="#2C9AFF"/>
                </linearGradient>
            </defs>

            <line
                x1="12"
                y1="5"
                x2="12"
                y2="19"
                stroke="url(#gradient-stroke)"
                strokeWidth="2.3"
                strokeLinecap="round"
            />

            <path
                d="M6 13l6 6 6-6"
                stroke="url(#gradient-stroke)"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
};