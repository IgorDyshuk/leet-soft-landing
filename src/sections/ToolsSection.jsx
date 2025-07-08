import {tools} from "../components/Tools/tools.js";
import ToolContainer from "../components/Tools/ToolContainer.jsx";
import "/src/components/Tools/tools.css"

export default function ToolsSection() {

    return (<section
        id={"tools"}
        className={"bg-ls-lightgrey"}
        style={{
            padding: "clamp(2.375rem, 1.7201rem + 2.9936vw, 5.3125rem) 0px",
        }}
    >

        <h1 className={"uppercase section-h1-clamp text-center"}
        >
            Tools
        </h1>

        <div
            className="flex flex-wrap xl:flex-nowrap justify-center gap-x-[0px] sm:gap-x-[8px] gap-y-[20px] container-px-clamp"
            style={{
                marginTop: "clamp(2.375rem, 2.1521rem + 1.0191vw, 3.375rem)",
                gapX: ""
            }}
        >
            {tools.map((tool) => (
                <ToolContainer key={tool.id} tool={tool}/>
            ))}
        </div>


    </section>)
}