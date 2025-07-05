import ContactButton from "../components/ContactButton.jsx";
import About from "/src/assets/AboutSvg/About.svg"
import AboutSmall from "/src/assets/AboutSvg/AboutSmall.svg"
import {useEffect, useState} from "react";

export default function AboutUsSection() {
    const [image, setImage] = useState(window.innerWidth >= 1024 ? About : AboutSmall);

    useEffect(() => {
        const onResize = () => {
            setImage(window.innerWidth >= 1024 ? About : AboutSmall);
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <section
            id={"about"}
            className={"container-px-clamp relative"}
            style={{
                paddingTop: "clamp(5rem, 3.7255rem + 5.2288vw, 10rem)",
                paddingBottom: "clamp(5rem, 3.7255rem + 5.2288vw, 10rem)",
            }}
        >

            <div className={"bg-ls-lightgrey flex flex-col lg:flex-row rounded-4xl"}>
                <div className={"about-padding"}>
                    <h1 className={"uppercase section-h1-clamp"}
                        style={{paddingBottom: "clamp(1rem, 0.7451rem + 1.0458vw, 2rem)"}}
                    >
                        About Us
                    </h1>
                    <p className={"font-mulish home-font-clamp"}>
                        Welcome to LeetSoft, your partner in the digital world. Born from the shared vision of two
                        friends, our company specializes in the development of immersive websites, AI-based bots and
                        business automation tools.
                    </p>
                    <p className={"font-mulish home-font-clamp mt-4"}
                       style={{paddingBottom: "clamp(1.5rem, 1.1973rem + 1.2418vw, 2.6875rem)"}}
                    >
                        Explore our portfolio to see how we've transformed ideas into working tools. Join us at LeetSoft
                        and let's implement your idea together.
                    </p>


                    <ContactButton/>
                </div>

                <img src={image} alt=""
                     className={"w-[1300px] rounded-4xl"}
                />
            </div>
        </section>
    )
}