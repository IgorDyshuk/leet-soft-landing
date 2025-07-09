import {useNavigate} from "react-router-dom";

export default function LinkContainer({link}) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`${link.navigate}`)
    }

    return (
        <button onClick={handleClick} className={"hover:cursor-pointer"}>
            <img
                src={link.icon}
                alt={link.name}
                style={{
                    width: "clamp(2.5rem, 2.4582rem + 0.1911vw, 2.6875rem)",
                    height: "clamp(2.5rem, 2.4582rem + 0.1911vw, 2.6875rem)"
                }}
            />
        </button>
    )
}