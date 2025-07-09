export const config = [
    {
        name: "name",
        placeholder: "Введіть ім’я",
        required: true,
        type: "text",
    },
    {
        name: "email",
        placeholder: "Введіть пошту",
        required: true,
        type: "email",
    },
    {
        name: "phone",
        placeholder: "Введіть номер телефону",
        required: false,
        type: "tel",
    },
    {
        name: "description",
        placeholder: "Опишіть Ваш проект",
        required: true,
        type: "text",
    },
];

export const initialState = {
    name: "",
    email: "",
    phone: "",
    description: "",
};
