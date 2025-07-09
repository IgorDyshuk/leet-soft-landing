import Logo from "../../Home/Logo.jsx";
import {links} from "./links.js";
import LinkContainer from "./LinkContainer.jsx";

export default function MainSection() {
    return (
        <div>
            <Logo/>

            <div className={"flex"}
                 style={{
                     gap: "10px",
                     marginTop: "clamp(1.25rem, 1.0271rem + 1.0191vw, 2.25rem)",
                 }}
            >
                {links.map((link) => (
                    <LinkContainer key={link.id} link={link}/>
                ))}
            </div>

            <p
                className={"footer-font-small hidden md:block"}
                style={{marginTop: "clamp(1.5rem, 1.3328rem + 0.7643vw, 2.25rem)"}}
            >
                All rights reserved
            </p>
        </div>
    )
};