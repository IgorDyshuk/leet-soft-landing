import "./contact.scss";
import Input from "./Input";
import {config, initialState} from "./config";
import {useState} from "react";
import FormButton from "./FormButton.jsx";

function ContactForm() {
    const [formValue, setFormValue] = useState(initialState);

    const onChange = (e) => {
        const {name, value} = e.target;
        setFormValue((prev) => ({...prev, [name]: value}));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("Отправленные данные:", formValue);

    };

    return (
        <>
            <form
                className="form_container font-mulish"
                onSubmit={onSubmit}
                style={{
                    fontSize: "21px"
                }}
            >
                {config.map(({name, ...rest}) => (
                    <Input
                        key={name}
                        name={name}
                        value={formValue[name]}
                        onChange={onChange}
                        {...rest}
                    />
                ))}

               <FormButton/>
            </form>

        </>
    );
}

export default ContactForm;
