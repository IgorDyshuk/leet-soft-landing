export default function ReviewCard({item}) {
    return (
        <div className="project-card bg-ls-lightgrey rounded-4xl"
             style={{
                 padding: 'clamp(0.9375rem, 0.7146rem + 1.0191vw, 1.9375rem)',
             }}
        >
            <div className={"flex items-center"}
                 style={{gap: 'clamp(0.9375rem, 0.8957rem + 0.1911vw, 1.125rem)'}}
            >
                <img src={item.image} alt=""
                     className={"rounded-full"}
                     style={{
                         width: 'clamp(3.875rem, 3.5545rem + 1.465vw, 5.3125rem)',
                         height: 'clamp(3.875rem, 3.5545rem + 1.465vw, 5.3125rem)',
                     }}
                />
                <div>
                    <h2 className="uppercase"
                        style={{
                            fontSize: 'clamp(1.125rem, 0.9299rem + 0.8917vw, 2rem)',
                        }}
                    >
                        {item.name}
                    </h2>
                    <p className={"font-mulish home-font-clamp leading-[1.3]"}>{item.job}</p>
                </div>
            </div>

            <p className={"font-mulish home-font-clamp leading-[1.4] text-ls-grey"}
               style={{marginTop: "clamp(0.9375rem, 0.8957rem + 0.1911vw, 1.125rem)"}}
            >
                {item.message}
            </p>

            {item.projectPhoto && (
                <div
                    style={{
                        width: 'clamp(16.5625rem, 13.7201rem + 12.9936vw, 29.3125rem)',
                        height: 'clamp(9.25rem, 7.6338rem + 7.3885vw, 16.5rem)',
                        backgroundImage: `url(${item.projectPhoto})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '18px',
                        marginTop: '20px',
                    }}
                />
            )}

        </div>
    )
}