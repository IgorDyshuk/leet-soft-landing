import {useNavigate} from "react-router-dom";

export default function ContactContainer({contact}) {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url);
    };

    return (
        <div className="flex items-center"
             style={{gap: "16px"}}
        >
            <div className="text-white font-mulish font-bold"
                 style={{fontSize: "clamp(1.0325rem, 0.9133rem + 0.4889vw, 1.5rem)"}}
            >
                {contact.connection}
            </div>

            <div className="flex gap-[4px]">
                {contact.connectionLinks.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => handleClick(link.url)}
                    >
                        <img
                            src={link.icon}
                            alt={link.name}
                            className={"contact-icon"}
                            style={{width:'32px',height:'32px'}}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
