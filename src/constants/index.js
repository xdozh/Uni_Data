import {
    casIcon1,
    casIcon2,
    casIcon3,
    casIcon4,
    casImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
    cmp_coe,
    cve,
    ele, mce, ngn,
} from "../../src/assets";

export const navigation = [
    {
        id: "0",
        title: "CAS",
        url: "#cas",
    },
    {
        id: "1",
        title: "SBA",
        url: "#sba",
    },
    {
        id: "2",
        title: "CEN",
        url: "#cen",
    },
    {
        id: "3",
        title: "Roadmap",
        url: "#roadmap",
    }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

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

export const roadmap = [
    {
        id: "0",
        title: "Voice recognition",
        text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Gamification",
        text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Chatbot customization",
        text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Integration with APIs",
        text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap4,
    },
];

export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
    {
        id: "0",
        title: "Seamless Integration",
        text: collabText,
    },
    {
        id: "1",
        title: "Smart Automation",
    },
    {
        id: "2",
        title: "Top-notch Security",
    },
];

export const collabApps = [
    {
        id: "0",
        title: "Figma",
        icon: figma,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Notion",
        icon: notion,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: photoshop,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: protopie,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Framer",
        icon: framer,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: raindrop,
        width: 38,
        height: 32,
    },
];

export const CenCourses = [
    {
        id: "0",
        title: "Computer Science & Engineering",
        description: "All the materials related to COE & CMP courses",
        image: cmp_coe,
        url: 'https://drive.google.com/drive/folders/1l_jCmXJVZj_zIe13CKcqkP878zt5VSmO?usp=share_link'
    },
    {
        id: "1",
        title: "Mechanical Engineer",
        description: "All the materials related to Mechanical Engineering courses",
        image: mce,
        url: 'https://drive.google.com/drive/folders/1WSfHLWZ32Rtx9MDTyP_SeD5C9K47WABH?usp=share_link'
    },
    {
        id: "2",
        title: "Civil Engineer",
        description: "All the materials related to Civil Engineering courses",
        image: cve,
        url: 'https://drive.google.com/drive/folders/1YmujdEq8VhtDAPNbNySnxpiYLFGO7FXq?usp=share_link'
    },
    {
        id: "3",
        title: "Electrical Engineer",
        description: "All the materials related to Electrical Engineering courses",
        image: ele,
        url: 'https://drive.google.com/drive/folders/1DE5jRnhbkHeU0BeI9jqSo8d9cTfpROtH?usp=share_link'
    },
    {
        id: "4",
        title: "Introduction to Engineering (NGN)",
        description: "All the materials related to NGN courses",
        image: ngn,
        url: 'https://drive.google.com/drive/folders/1_iEeaj-BIfIzAAgXbqKPJJf6jfezB9O8?usp=share_link'
    }
];

export const cas_courses = [
    {
        id: "0",
        title: "Chemistry",
        text: "Study items related to Chemistry courses",
        backgroundUrl: "assets/cas_images/card-1.svg",
        url: "https://drive.google.com/drive/folders/1Gt9Wsc5Y-IF5hEEm4qlDP8Un8lLxwjif?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
    },
    {
        id: "1",
        title: "Physics",
        text: "Study items related to Physics courses",
        backgroundUrl: "assets/cas_images/card-2.svg",
        url: "https://drive.google.com/drive/folders/1J2SWUCo5csAlC-oK7WlUBYH1Zs-LiQkr?usp=share_link",
        iconUrl: casIcon2,
        imageUrl: casImage2,
        light: true,
    },
    {
        id: "2",
        title: "Biology",
        text: "Course items related to Biology courses",
        backgroundUrl: "assets/cas_images/card-5.svg",
        url:"https://drive.google.com/drive/folders/1KilrjoqNbbiWsb0RBALi_v8rDeEqzPGz?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
    },
    {
        id: "3",
        title: "Environmental Science",
        text: "Study items related to Environmental Science courses",
        backgroundUrl: "assets/cas_images/card-3.svg",
        url:'https://drive.google.com/drive/folders/1-l4E3l6_hfKxZPjc8BAxXQLg4edT_wqt?usp=share_link',
        iconUrl: casIcon3,
        imageUrl: casImage2,
    },
    {
        id: "4",
        title: "Psychology",
        text: "Study items related to Psychology courses",
        backgroundUrl: "assets/cas_images/card-6.svg",
        url:"https://drive.google.com/drive/folders/11TIEtROeH_k7qI-xGzfDq-kSUdF2ZITa?usp=share_link",
        iconUrl: casIcon2,
        imageUrl: casImage2,
    },
    {
        id: "5",
        title: "Philosophy",
        text: "Course items related to Philosophy course",
        backgroundUrl: "assets/cas_images/card-5.svg",
        url:"https://drive.google.com/drive/folders/1vfUt9G0AFqh7Q9fwgxaGg5AvoeKmhI7R?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
    },
    {
        id: "6",
        title: "Math & Stats",
        text: "Study items related to Math & Stats courses",
        backgroundUrl: "assets/cas_images/card-4.svg",
        url: "https://drive.google.com/drive/folders/14oeoOReuojphQsAXb60C8ook5QRc15fW?usp=share_link",
        iconUrl: casIcon4,
        imageUrl: casImage2,
        light: true,
    },
    {
        id: "7",
        title: "Quantitative Buss. Analysis",
        text: "Course items related to QBA",
        backgroundUrl: "assets/cas_images/card-5.svg",
        url:"https://drive.google.com/drive/folders/1OY2KUUMDwJ7Ng5uCSjhn6fhOQDfeLl9Y?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
    },
    {
        id: "8",
        title: "Arabic 101 & 102",
        text: "Course items related to ARA 101 & 102 courses",
        backgroundUrl: "assets/cas_images/card-5.svg",
        url:"https://drive.google.com/drive/folders/1hXi1VIi8ZPvsYypgg_lEE1ZjZ0UjR8uV?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
        light: true,
    },
    {
        id: "9",
        title: "Mass Comm.",
        text: "Course items related to Mass Comm. courses",
        backgroundUrl: "assets/cas_images/card-5.svg",
        url:"https://drive.google.com/drive/folders/1AXMcvFsDM2HmPfqSfWTeg5jzqPscmmfI?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
    },
    {
        id: "10",
        title: "Art History",
        text: "Course items related to Art History course",
        backgroundUrl: "assets/cas_images/card-5.svg",
        url:"https://drive.google.com/drive/folders/19BAy7Io8Ce-xqvzY5C0bdT1BcMKgqQdx?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
        light: true,
    },
    {
        id: "11",
        title: "Geography",
        text: "Course items related to Geography courses",
        backgroundUrl: "assets/cas_images/card-5.svg",
        url:"https://drive.google.com/drive/folders/1l1Ng8tm79nlNR-UNIC1UKnvSCZAU_HD9?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
    },
    {
        id: "12",
        title: "International Studies",
        text: "Course items related to INS courses",
        backgroundUrl: "assets/cas_images/card-5.svg",
        url:"https://drive.google.com/drive/folders/1B26FOF2Jq57vY_lK9fAdeMeDy1xEHuj8?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
    },
    {
        id: "13",
        title: "Sociology",
        text: "Course items related to Sociology course",
        backgroundUrl: "assets/cas_images/card-5.svg",
        url:"https://drive.google.com/drive/folders/1vJjP2ZeqDsCGMnnEA9meR4ssiXB4XRyG?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
    },
    {
        id: "14",
        title: "World Cultures",
        text: "Course items related to World Cultures course",
        backgroundUrl: "assets/cas_images/card-5.svg",
        url:"https://drive.google.com/drive/folders/1xaT-uIlLH7psqLOvlt0JDCRQ4lQ2ZnDo?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
        light: true,
    },
    {
        id: "15",
        title: "Writing",
        text: "Course items related to WRI courses",
        backgroundUrl: "assets/cas_images/card-5.svg",
        url:"https://drive.google.com/drive/folders/10CmWqShCx_TFM7SZGPN9GKHPzBUh7zQ9?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
    },
    {
        id: "16",
        title: "English",
        text: "Course items related to ENG courses",
        backgroundUrl: "assets/cas_images/card-5.svg",
        url:"https://drive.google.com/drive/folders/1A0Z1RqbaRtYTUQ6n4yCAw7AcVl33OVbD?usp=share_link",
        iconUrl: casIcon1,
        imageUrl: casImage2,
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