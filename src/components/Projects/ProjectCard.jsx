import OpenCaseButton from "./OpenCaseButton.jsx";

export default function ProjectCard({project}) {
    return (
        <div className="project-card bg-ls-lightgrey rounded-4xl"
             style={{
                 padding: 'clamp(0.9375rem, 0.7146rem + 1.0191vw, 1.9375rem)',
             }}
        >
            <div className={"relative"}>
                <img src={project.image} alt="" width={"469px"}/>
                <div className={"absolute top-[16px] left-[21px] flex flex-col sm:flex-row font-mulish font-bold"}
                     style={{
                         fontSize: "clamp(1rem, 0.9203rem + 0.3268vw, 1.3125rem)",
                         gap: "clamp(0.5rem, 0.4582rem + 0.1911vw, 0.6875rem)"
                     }}
                >
                    <span className={"flex project-filter"}
                          style={{gap: "clamp(0.5rem, 0.4582rem + 0.1911vw, 0.6875rem)"}}
                    >
                        <img src={project.country.flag} alt="country flag"
                             style={{width: 'clamp(1.625rem, 1.4996rem + 0.5732vw, 2.1875rem)'}}
                        />
                        {project.country.name}
                    </span>
                    {project.filters.map((filter, index) => (
                        <span key={index} className={"project-filter"}>
                            {filter}
                        </span>
                    ))}
                </div>
            </div>

            <h2 className="uppercase"
                style={{
                    fontSize: 'clamp(1.125rem, 0.9299rem + 0.8917vw, 2rem)',
                    marginTop: "clamp(1rem, 0.7771rem + 1.0191vw, 2rem)"
                }}
            >
                {project.title}
            </h2>

            <p className={"font-mulish home-font-clamp text-ls-grey"}
            style={{marginTop: 'clamp(0.5rem, 0.4582rem + 0.1911vw, 0.6875rem)'}}>
                {project.description}
            </p>

            <OpenCaseButton/>
        </div>
    )
}