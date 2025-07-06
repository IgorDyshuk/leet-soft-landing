import OpenCaseButton from "./OpenCaseButton.jsx";

export default function ProjectCard({project}) {
    return (
        <div className="project-card bg-ls-lightgrey rounded-4xl"
             // style={{padding: '32px'}}
             style={{ padding: '31px', maxWidth: '532px', width: '100%' }}
        >
            <div className={"relative"}>
                <img src={project.image} alt="" width={"469px"}/>
                <div className={"absolute top-[16px] left-[21px] flex gap-[11px] font-mulish font-bold"}
                     style={{fontSize: "clamp(1rem, 0.9203rem + 0.3268vw, 1.3125rem)",}}
                >
                    <span className={"flex gap-1 project-filter gap-[11px]"}>
                        <img src={project.country.flag} alt="" width={"35px"}/>
                        {project.country.name}
                    </span>
                    {project.filters.map((filter, index) => (
                        <span key={index} className={"project-filter"}>
                            {filter}
                        </span>
                    ))}
                </div>
            </div>

            <h2 className="uppercase mt-[2rem]"
                style={{fontSize: 'clamp(1.2rem, 0.9961rem + 0.8366vw, 2rem)'}}
            >
                {project.title}
            </h2>

            <p className={"font-mulish home-font-clamp text-ls-grey mt-[11px]"}>
                {project.description}
            </p>

            <OpenCaseButton/>
        </div>
    )
}