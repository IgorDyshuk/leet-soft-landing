import {teamMembers} from "../components/Team/team.js"
import TeamMemberContainer from "../components/Team/TeamMemberContainer.jsx";

export default function TeamSection() {
    return (<section
        id={"our team"}
        className={"bg-white"}
        style={{
            padding: "clamp(4.875rem, 3.7325rem + 5.2229vw, 10rem) 0",
        }}
    >

        <h1 className={"uppercase section-h1-clamp text-center"}
        >
            our team
        </h1>

        <div
            className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between gap-x-[0px] sm:gap-x-[8px] gap-y-[32px] container-px-clamp"
            style={{
                marginTop: "clamp(2.375rem, 2.1521rem + 1.0191vw, 3.375rem)",
            }}
        >
            {teamMembers.map((tool) => (
                <TeamMemberContainer key={tool.id} member={tool}/>
            ))}
        </div>


    </section>)
}