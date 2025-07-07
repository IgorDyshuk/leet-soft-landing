import React from "react";

export default function PartnerContainer({image}) {
    return (
        <div
            className="border-1 border-white/20 flex items-center justify-center"
            style={{
                padding: 'clamp(0.25rem, 0.2361rem + 0.0637vw, 0.3125rem) clamp(1.5rem, 1.3885rem + 0.5096vw, 2rem)',
                marginRight: "clamp(0.6875rem, 0.5064rem + 0.828vw, 1.5rem)",
                borderRadius: "clamp(1.5rem, 1.3885rem + 0.5096vw, 2rem)",
            }}
        >
            <img
                style={{
                    height: "clamp(4.25rem, 3.2468rem + 4.586vw, 8.75rem)",
                    width: "clamp(4.25rem, 3.2468rem + 4.586vw, 8.75rem)"
                }}
                src={image}
            />
        </div>
    )
}