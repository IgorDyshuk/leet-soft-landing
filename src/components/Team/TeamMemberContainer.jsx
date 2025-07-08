export default function TeamMemberContainer({member}) {
    return (
        <div
            className="flex flex-col items-center"
            style={{
                width: 'clamp(21.75rem, 21.0812rem + 3.0573vw, 24.75rem)'
            }}
        >
            <img src={member.image} alt=""
                 className={"rounded-full"}
                 style={{
                     width: 'clamp(7.5rem, 6.9427rem + 2.5478vw, 10rem)',
                     height: 'clamp(7.5rem, 6.9427rem + 2.5478vw, 10rem)',
                 }}
            />

            <h2 className="uppercase"
                style={{
                    marginTop: "clamp(1.0625rem, 0.9371rem + 0.5732vw, 1.625rem)",
                    fontSize: 'clamp(1.125rem, 0.9299rem + 0.8917vw, 2rem)',
                }}
            >
                {member.name}
            </h2>

            <p className={"font-mulish home-font-clamp leading-[1.3]"}>{member.job}</p>

            <p className={"font-mulish home-font-clamp leading-[1.4] text-ls-grey text-center"}
               style={{
                   marginTop: "clamp(0.6875rem, 0.6178rem + 0.3185vw, 1rem)",
                   padding: "0 clamp(0.875rem, 0.8193rem + 0.2548vw, 1.125rem)"
            }}
            >
                {member.description}
            </p>

        </div>
    )
}