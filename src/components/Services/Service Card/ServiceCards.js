import webIcon from "/src/assets/servicesSvg/web.svg";
import mobileIcon from "/src/assets/servicesSvg/mobile.svg";
import aiIcon from "/src/assets/servicesSvg/ai.svg";
import consultIcon from "/src/assets/servicesSvg/consulting.svg";
import softwareIcon from "/src/assets/servicesSvg/software.svg";

export const serviceCards = [
    {
        id: "web",
        icon: webIcon,
        title: "Web Development",
        boldDescription: "We create high-performance, scalable web solutions tailored to your business needs.",
        description: ` Specializing in custom websites and web applications, we focus on delivering clean architecture, seamless user experience, and reliable functionality. Whether you're launching a new platform or upgrading an existing system, our solutions are built to perform and grow with your business.`,
        tags: ["web platforms", "corporate site", "marketplace", "enterprise apps", "ecommerce"]
    },
    {
        id: "mobile",
        icon: mobileIcon,
        title: "Mobile Development",
        boldDescription: "We design and build scalable cross-platform mobile applications tailored to your product and business needs.",
        description: ` With a focus on performance, intuitive UX, and maintainable architecture, our apps deliver a seamless experience across iOS and Android.`,
        tags: ["pwa", "cross-platform apps", "loyalty programs", "health care"]
    },
    {
        id: "ai",
        icon: aiIcon,
        title: "AI/ML Solutions",
        boldDescription: "We develop tailored AI and machine learning solutions that turn data into actionable insights and intelligent features.",
        description: ` From predictive analytics to automation and recommendation systems, our models are designed to solve real business challenges.`,
        tags: ["LLM", "chatbots", "AI agents", "GenAI", "Prediction models", "Data analytics", "ML"]
    },
    {
        id: "consulting",
        icon: consultIcon,
        title: "IT Consulting",
        boldDescription: "We provide strategic IT consulting to help you make confident technology decisions and drive business growth.",
        description: ` Whether you're planning a new product, optimizing existing systems, or scaling your infrastructure, we offer expert guidance rooted in real-world experience.`,
        tags: ["IT infrastructure", "Strategic planning", "Digitalization strategy", "AI integration strategy", "System audit"]
    },
    {
        id: "software",
        icon: softwareIcon,
        title: "Software Development",
        boldDescription: "We deliver end-to-end software development services tailored to your business vision — from MVPs to full-scale platforms.",
        description: ` Our expertise includes SaaS solutions, CRM/ERP systems, and Web3 applications.`,
        tags: ["MVP development", "CRM/ERP system development", "SaaS development", "Web3"]
    }
];

