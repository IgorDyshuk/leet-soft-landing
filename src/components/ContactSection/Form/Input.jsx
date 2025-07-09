const Input = (props) => {
    const { placeholder, type = "text", ...rest } = props;

    return (
        <label className="input_container">
            <input
                className="input"
                autoComplete="off"
                type={type}
                {...rest}
            />
            <p className="input_placeholder">{placeholder}</p>
        </label>
    );
};

export default Input;
