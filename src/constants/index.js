
export const navLinks = [
    {
        id: "about",
        title: "소개",
    },
    {
        id: "work",
        title: "경력",
    },
    {
        id: "books",
        title: "저서/강의",
    },
    {
        id: "contact",
        title: "연락처",
    },
];

const services = [
    {
        title: "Frontend Architect",
        icon: "web",
    },
    {
        title: "Platform Engineer",
        icon: "mobile",
    },
    {
        title: "Technical Author",
        icon: "creator",
    },
    {
        title: "Team Leader",
        icon: "backend",
    },
];

const technologies = [
    {
        name: "Vue JS",
        icon: import.meta.env.BASE_URL + "tech/vue.png",
    },
    {
        name: "Nuxt JS",
        icon: import.meta.env.BASE_URL + "tech/nuxt.png",
    },
    {
        name: "TypeScript",
        icon: import.meta.env.BASE_URL + "tech/typescript.png",
    },
    {
        name: "JavaScript",
        icon: import.meta.env.BASE_URL + "tech/javascript.png",
    },
    {
        name: "Python",
        icon: import.meta.env.BASE_URL + "tech/python.png",
    },
    {
        name: "C/C++",
        icon: import.meta.env.BASE_URL + "tech/cpp.png",
    },
    {
        name: "Three JS",
        icon: import.meta.env.BASE_URL + "tech/threejs.png",
    },
    {
        name: "Tailwind CSS",
        icon: import.meta.env.BASE_URL + "tech/tailwind.png",
    },
    {
        name: "Git",
        icon: import.meta.env.BASE_URL + "tech/git.png",
    },
];

const experiences = [
    {
        title: "Software Engineer (Frontend)",
        company_name: "SK Telecom",
        icon: import.meta.env.BASE_URL + "tech/vue.png", // Using Vue icon as placeholder or add dedicated company logo
        iconBg: "#E6DEDD",
        date: "Feb 2019 - Present",
        points: [
            "Leading frontend development for Adot.ai search project using Vue 3, Nuxt 3, TypeScript, and Vite.",
            "Architected and implemented multi-LLM interaction structures.",
            "Developed Adot Note web service and various hybrid app webviews (Mobility, Search, Events).",
            "Maintained and optimized Nugu Auto webviews for Volvo XC series.",
        ],
    },
    {
        title: "Software Engineer Team Lead",
        company_name: "SK Planet",
        icon: import.meta.env.BASE_URL + "tech/python.png", // Placeholder
        iconBg: "#383E56",
        date: "Nov 2011 - Feb 2019",
        points: [
            "Led the Bot Platform Dev Team, overseeing ChatBot platform development and operation.",
            "Developed Dialog Task Specification (DTS) editor and DM Debugger.",
            "Created planet.js web framework and web authoring tools.",
            "Managed Syrup Store frontend development.",
        ],
    },
    {
        title: "Senior Engineer (TL)",
        company_name: "Samsung Electronics",
        icon: import.meta.env.BASE_URL + "tech/cpp.png", // Placeholder
        iconBg: "#E6DEDD",
        date: "Mar 2001 - Oct 2011",
        points: [
            "Developed mobile platforms and middleware (Tizen/SLP, LiMO, WIPI).",
            "Implemented Smart Web Search for TVs.",
            "Developed embedded database (AceDB) and debugging tools.",
            "Worked on voice solutions and smart home infrastructure.",
        ],
    },
];

// Education data (Added for completeness)
const education = [
    {
        school: "KAIST (Korea Advanced Institute of Science and Technology)",
        degree: "석사, Computer Science (SEP 전공)",
        date: "2005 - 2007"
    },
    {
        school: "광운대학교",
        degree: "학사, 전자공학",
        date: "1994 - 2001"
    }
]

// Re-purposing 'projects' to showcase Books & Lectures as requested
const projects = [
    {
        name: "Adot.ai Search",
        description:
            "A comprehensive search platform interacting with multiple LLMs (Claude, GPT, Perplexity, etc.) to provide comparative answers. Features streaming responses via SSE.",
        tags: [
            {
                name: "vue/nuxt3",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "vite",
                color: "pink-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_bot.jpg",
        source_code_link: "https://adot.ai",
    },
    {
        name: "Adot Note & App WebViews",
        description:
            "Real-time voice dictation and summarization service, plus various webview-based features (mobility, search, events) integrated into the Adot native app.",
        tags: [
            {
                name: "vue",
                color: "green-text-gradient",
            },
            {
                name: "hybrid-app",
                color: "orange-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_web.jpg",
        source_code_link: "https://adot.ai",
    },
    {
        name: "ChatBot Platform & Tools",
        description:
            "Led the development of a chatbot platform, including a flow editor (DTS) and a debugger. Designed architecture for high traffic and stability.",
        tags: [
            {
                name: "angular",
                color: "blue-text-gradient",
            },
            {
                name: "flask-socketio",
                color: "green-text-gradient",
            },
            {
                name: "platform-eng",
                color: "pink-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_python.jpg",
        source_code_link: "https://github.com/",
    },
    {
        name: "Legacy Mobile Platforms",
        description:
            "Extensive experience with early mobile platforms (Tizen/SLP, LiMO, WIPI) at Samsung Electronics. Developed middleware, apps, and embedded databases.",
        tags: [
            {
                name: "c/c++",
                color: "blue-text-gradient",
            },
            {
                name: "embedded",
                color: "green-text-gradient",
            },
            {
                name: "linux",
                color: "pink-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_cpp.jpg",
        source_code_link: "https://github.com/",
    },
    {
        name: "Technical Books",
        description:
            "Authored multiple programming books including 'Mobile Game with Web', 'Python 3.6 Programming', 'Mobile Web Development', and 'Lua Programming'.",
        tags: [
            {
                name: "author",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "lua",
                color: "pink-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_lua.jpg",
        source_code_link: "https://www.yes24.com/Product/Search?domain=ALL&query=%EC%8B%A0%ED%98%B8%EC%B2%A0",
    },
    {
        name: "Nugu Auto & Smart Home",
        description:
            "Developed webview interfaces for Volvo XC series (Nugu Auto) and smart home context-based infrastructure. Focused on UX optimization for devices.",
        tags: [
            {
                name: "vue",
                color: "green-text-gradient",
            },
            {
                name: "automotive",
                color: "orange-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_sqlite.jpg",
        source_code_link: "https://www.sktelecom.com",
    },
];

const testimonials = [];

export { services, technologies, experiences, testimonials, projects, education };
