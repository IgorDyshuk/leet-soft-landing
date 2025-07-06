import web from "../../../assets/servicesSvg/web.svg";
import ContactButton from "../../ContactButton.jsx";

export default function SelectCustomizedServices() {
    return (
        <div
            className="w-fit relative bg-white rounded-4xl overflow-hidden flex flex-col select-card"
            style={{
                padding: "clamp(1.15rem, 0.6686rem + 1.3595vw, 2.3rem)",
            }}
        >
            <img src={web} alt="icon" className="mb-[1.25rem]"
                 style={{
                     width: 'clamp(2.2rem, 1.8686rem + 1.3595vw, 3.5rem)',
                     height: 'clamp(2.2rem, 1.8686rem + 1.3595vw, 3.5rem)'
                 }}
            />

            <h2 className="uppercase mb-2 md:mb-3 xl:mb-4"
                style={{fontSize: 'clamp(1.2rem, 0.9961rem + 0.8366vw, 2rem)'}}
            >
                Select customized services
            </h2>

            <div className="pb-2 font-mulish overflow-hidden">
                <div
                    className="font-mulish home-font-clamp leading-[1.3] pb-[0.3rem]"
                >
                    Have a unique idea in mind? <br />
                    If you don’t see your project type listed, let’s talk. We’re always excited to explore new challenges and bring bold ideas to life. Share your vision with us — we’ll help you shape it into a powerful, working solution.
                </div>
            </div>

            <ContactButton/>

        </div>
    )
}