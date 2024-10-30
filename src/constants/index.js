import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,

    discordBlack,
    facebook,

    file02,

    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,


    plusSquare,

    recording01,
    recording03,
    searchMd,

    sliders04,
    telegram,
    twitter,
} from "../assets";
import logo from '../assets/Logo.png'

export const navigation = [
    {
        id: "0",
        title: "Features",
        url: "#features",
    },
    {
        id: "1",
        title: "Documents",
        url: "#documents",
    },
    {
        id: "2",
        title: "How to use",
        url: "#how-to-use",
    },
    {
        id: "3",
        title: "New account",
        url: "#signup",
        onlyMobile: true,
    },
    {
        id: "4",
        title: "Sign in",
        url: "#login",
        onlyMobile: true,
    },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [logo, logo, logo, logo, logo];

export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
];

export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];


export const collabContent = [
    {
        id: "0",
        title: "Contract Agreements",
        text: "Generate comprehensive, clear agreements to formalize partnerships, services, or other business terms.",
    },
    {
        id: "1",
        title: "Partnership Deeds",
        text: "Draft custom deeds that establish robust foundations for successful business partnerships.",
    },
    {
        id: "2",
        title: "Rent Agreements",
        text: "Simplify rental processes with structured, tenant-friendly agreements for landlords and tenants",
    },
    {
        id: "3",
        title: "Company Memorandums of Understanding (MOUs)",
        text: "Effortlessly create collaboration agreements that clearly define terms for business relationships.",
    },

];



export const benefits = [
    {
        id: "0",
        title: "Ask Anything About Law",
        text: "Access a wealth of legal knowledge at your fingertips; get clear, concise answers to your legal questions and expert insights whenever you need them.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "1",
        title: "Learning & Improvement",
        text: "With advanced NLP, the system continually adapts, learning from user interactions to provide increasingly accurate and relevant responses.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "2",
        title: "Access From Anywhere",
        text: "Enjoy seamless assistance on any device, at any time, ensuring reliable legal support wherever you are, right when you need it.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
    },
    {
        id: "3",
        title: "Fast Response Times",
        text: "Experience lightning-fast replies and document drafts, making legal support more accessible and reducing waiting times significantly.",
        backgroundUrl: "./src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "4",
        title: "Smart Document Creation",
        text: "Effortlessly generate accurate, legally compliant documents tailored to meet your specific requirements, saving time and ensuring precision.",
        backgroundUrl: "./src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "5",
        title: "Customizable Templates",
        text: "Personalize document templates to fit unique legal needs, making the drafting process flexible and adaptable to various situations.",
        backgroundUrl: "./src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
    },
];

export const socials = [
    {
        id: "0",
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];