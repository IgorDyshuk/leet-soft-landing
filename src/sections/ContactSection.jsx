import "/src/components/ContactSection/contact.css"
import Footer from "../components/ContactSection/Footer/Footer.jsx";
import ContactForm from "../components/ContactSection/Form/ContactForm.jsx";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="text-white"
        >
            <div className={"flex flex-col lg:flex-row"}
                 style={{
                     padding: "clamp(2.375rem, 1.7201rem + 2.9936vw, 5.3125rem) clamp(1.25rem, -0.6936rem + 7.9739vw, 8.875rem)",
                     gap: "clamp(0rem, -7.2143rem + 11.2723vw, 6.3125rem)"
                 }}
            >
                <div
                    className={"contact-slogan"}
                >
                    shall we discuss your <span className={"text-gradient-ls"}>idea</span>?
                </div>
                <div>
                    <ContactForm/>
                </div>
            </div>

            <Footer/>
        </section>
    )
}