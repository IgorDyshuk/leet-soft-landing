import gmail from "/src/assets/Footer/ContactLinks/gmail.svg";
import telegram from "/src/assets/Footer/ContactLinks/telegram.svg";
import viber from "/src/assets/Footer/ContactLinks/viber.svg";
import watsUp from "/src/assets/Footer/ContactLinks/watsUp.svg";


export const contactLinks = [
    {
        id: 'contactLink1',
        connection: "sales@leetsoft.org",
        connectionLinks: [
            {
                name: "gmail",
                icon: gmail,
                url: "/",
            }
        ]
    },
    {
        id: 'contactLink2',
        connection: "+380 73 758 17 72",
        connectionLinks: [
            {
                name: "telegram",
                icon: telegram,
                url: "/",
            },
            {
                name: "viber",
                icon: viber,
                url: "/",
            },
            {
                name: "watsUp",
                icon: watsUp,
                url: "/",
            },

        ]
    },
    {
        id: 'contactLink3',
        connection: "+34 611 333 312",
        connectionLinks: [
            {
                name: "telegram",
                icon: telegram,
                url: "/",
            },
            {
                name: "viber",
                icon: viber,
                url: "/",
            },
            {
                name: "watsUp",
                icon: watsUp,
                url: "/",
            },

        ]
    },

]