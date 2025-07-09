
export default function ArrowDown({rotate = false}) {
    return (
        <div
            className={`w-[21px] h-[21px] transition-all duration-300 ease-in-out ${
                rotate ? "bg-gradient-to-br from-[#00F4E6] to-[#2C9AFF] rotate-[-45deg]" : "bg-gradient-to-br from-[#00F4E6] to-[#2C9AFF] rotate-[135deg]"
            }`}
            style={{
                WebkitMask: `url('data:image/svg+xml;utf8,<svg fill="black" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M13.5876 6.11792L4.05883 15.6468C3.58785 16.1177 2.82423 16.1177 2.35324 15.6468C1.88227 15.1758 1.88225 14.4122 2.35319 13.9412L11.8809 4.41237H3.93819C3.27203 4.41237 2.73201 3.87234 2.73201 3.20619C2.73201 2.54003 3.27203 2 3.93819 2H14.272C15.2263 2 16 2.77365 16 3.728V14.0619C16 14.728 15.46 15.268 14.7938 15.268C14.1277 15.268 13.5876 14.728 13.5876 14.0619V6.11792Z"/></svg>')`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                maskSize: "contain",
                width: "clamp(1rem, 0.9303rem + 0.3185vw, 1.3125rem)",
                height: "clamp(1rem, 0.9303rem + 0.3185vw, 1.3125rem)",
            }}
        ></div>

    )
};

