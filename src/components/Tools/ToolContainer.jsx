export default function ToolContainer({tool}) {
    return (
        <div
            className={"flex flex-col justify-center items-center"}
            style={{
                gap: "clamp(0.5rem, 0.4721rem + 0.1274vw, 0.625rem)",
                width: "clamp(10.5625rem, 10.1863rem + 1.7197vw, 12.25rem)",
                height: "clamp(5.6875rem, 5.1859rem + 2.293vw, 7.9375rem)",
            }}
        >
            <img
                src={tool.icon}
                alt=""
                style={{
                    width: "clamp(3.4375rem, 3.1588rem + 1.2739vw, 4.6875rem)",
                    height: "clamp(3.4375rem, 3.1588rem + 1.2739vw, 4.6875rem)"
                }}
            />
            <span
                className={"uppercase"}
                style={{fontSize: "clamp(1rem, 0.9303rem + 0.3185vw, 1.3125rem)"}}
            >
                {tool.name}
            </span>
        </div>
    )
}