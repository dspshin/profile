
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
        name: "웹으로 시작하는 모바일 게임",
        description:
            "지앤선 · 2017년 8월 31일. 웹 기술을 활용한 모바일 게임 개발 입문서.",
        tags: [
            {
                name: "book",
                color: "blue-text-gradient",
            },
            {
                name: "game-dev",
                color: "green-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_game.jpg",
        source_code_link: "https://www.yes24.com/product/goods/44384394",
    },
    {
        name: "빠르게 활용하는 파이썬 3.6",
        description:
            "위키북스 · 2017년 7월 18일. 실무에 바로 쓰는 파이썬 프로그래밍 가이드.",
        tags: [
            {
                name: "book",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_python.jpg",
        source_code_link: "https://www.yes24.com/product/goods/43751272",
    },
    {
        name: "쉽게 따라 하는 모바일 웹 개발",
        description:
            "위키북스 · 2015년 11월 17일. jQuery Mobile부터 Node.js까지 아우르는 풀스택 가이드.",
        tags: [
            {
                name: "book",
                color: "blue-text-gradient",
            },
            {
                name: "mobile-web",
                color: "green-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_web.jpg",
        source_code_link: "https://www.yes24.com/product/goods/23125262",
    },
    {
        name: "SQLite3",
        description:
            "wikibooks · 2011년 5월 12일. 임베디드 데이터베이스 SQLite3 활용서.",
        tags: [
            {
                name: "book",
                color: "blue-text-gradient",
            },
            {
                name: "database",
                color: "pink-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_sqlite.jpg",
        source_code_link: "https://www.yes24.com/product/goods/5058647",
    },
    {
        name: "예제로 배우는 프로그래밍 루아",
        description:
            "한빛미디어 · 2008년 10월 5일. 루아 스크립트 언어 입문서.",
        tags: [
            {
                name: "book",
                color: "blue-text-gradient",
            },
            {
                name: "lua",
                color: "pink-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_lua.jpg",
        source_code_link: "https://www.yes24.com/product/goods/3081202",
    },
    {
        name: "IT CookBook C++ 기초",
        description:
            "한빛미디어 · 2008년 1월 20일. C++ 기초 학습을 위한 대학 교재.",
        tags: [
            {
                name: "book",
                color: "blue-text-gradient",
            },
            {
                name: "cpp",
                color: "pink-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_cpp.jpg",
        source_code_link: "http://www.yes24.com/24/goods/2817935",
    },
    {
        name: "게임봇 만들기",
        description:
            "정보문화사 · 2007년 5월 16일. Visual C++를 이용한 게임봇 제작 가이드.",
        tags: [
            {
                name: "book",
                color: "blue-text-gradient",
            },
            {
                name: "cpp",
                color: "pink-text-gradient",
            },
        ],
        image: import.meta.env.BASE_URL + "images/book_bot.jpg",
        source_code_link: "https://www.yes24.com/product/goods/2549646",
    },
];

const testimonials = [];

export { services, technologies, experiences, testimonials, projects, education };
