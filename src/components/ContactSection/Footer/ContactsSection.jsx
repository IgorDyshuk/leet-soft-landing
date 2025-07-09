import {contactLinks} from "./contactLinks.js";
import ContactContainer from "./ContactContainer.jsx";

export default function ContactSection() {
    return (
        <div>
            <p className={"footer-font-small"}>
                Contacts
            </p>

            <div
                className={"flex flex-col"}
                style={{
                    marginTop: 'clamp(1rem, 0.8885rem + 0.5096vw, 1.5rem)',
                    gap: "clamp(1rem, 0.9303rem + 0.3185vw, 1.3125rem)"
                }}
            >
                {contactLinks.map((contact) => (
                    <ContactContainer contact={contact} key={contact.id}/>
                ))}
            </div>

        </div>
    )
}