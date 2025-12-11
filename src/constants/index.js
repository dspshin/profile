
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
        icon: "/tech/vue.png",
    },
    {
        name: "Nuxt JS",
        icon: "/tech/nuxt.png",
    },
    {
        name: "TypeScript",
        icon: "/tech/typescript.png",
    },
    {
        name: "JavaScript",
        icon: "/tech/javascript.png",
    },
    {
        name: "Python",
        icon: "/tech/python.png",
    },
    {
        name: "C/C++",
        icon: "/tech/cpp.png",
    },
    {
        name: "Three JS",
        icon: "/tech/threejs.png",
    },
    {
        name: "Tailwind CSS",
        icon: "/tech/tailwind.png",
    },
    {
        name: "Git",
        icon: "/tech/git.png",
    },
];

const experiences = [
    {
        title: "Software Engineer (Frontend)",
        company_name: "SK Telecom",
        icon: "skt",
        iconBg: "#383E56",
        date: "2019.02 - 2025.11",
        points: [
            "[adot.ai 검색 프로젝트] Multi-LLM (Claude, GPT, Gemini 등) 연동 구조 설계 및 개발. SSE(Server Sent Events) 기반 스트리밍 응답 구현. (Vue3, Nuxt3, Vite, TypeScript)",
            "[adot.ai Note] 음성 실시간 Dictation 및 요약/리포트 서비스 개발.",
            "[Adot 앱] Mobility(혼잡도, 인기장소) 및 검색 웹뷰 기능 개발. Native 앱과의 인증/헤더/History 연동 처리.",
            "[Nugu Auto] Volvo XC 시리즈 적용 차량용 웹뷰 화면 개발 및 운영 (Media, Home 등).",
            "[Nugu 앱/Nemo] AI 스피커 컨트롤 앱 및 디스플레이 템플릿 뷰어(Vue.js) 구현.",
            "[SK Broadband] 셋톱박스용 Half Window 웹뷰 화면 개발/운영."
        ],
    },
    {
        title: "Software Engineer Team Lead",
        company_name: "SK Planet",
        icon: "skp",
        iconBg: "#E6DEDD",
        date: "2018.09 - 2019.02",
        points: [
            "Bot Platform Dev Team 리더",
            "챗봇 플랫폼 기능 개선 및 운영 총괄",
            "팀 개발 일정/품질 관리 및 대내외 커뮤니케이션"
        ],
    },
    {
        title: "Software Engineer / Team Leader",
        company_name: "SK Techx",
        icon: "sktechx",
        iconBg: "#383E56",
        date: "2017.10 - 2018.08",
        points: [
            "Bot Platform Dev Team 리더",
            "챗봇 플랫폼 기능 확장 및 안정화",
            "대규모 트래픽 고려 플랫폼 구조 설계 및 개선"
        ],
    },
    {
        title: "Software Engineer / Team Lead",
        company_name: "SK Planet",
        icon: "skp",
        iconBg: "#E6DEDD",
        date: "2011.11 - 2017.09",
        points: [
            "[Bot Platform] ChatBot 플랫폼 개발/운영 총괄. Dialog Task Specification 에디터 (Angular, D3) 및 DM Debugger (SocketIO) 구현.",
            "[Web Tech] Syrup Store 프론트엔드 개발 및 PM.",
            "[Framework] Planet.js (jQuery 기반 웹 프레임워크) 및 Web Authoring Tool (Planet.make) 설계/구현.",
            "Python 기반 빌드/테스트 자동화 시스템 구축."
        ],
    },
    {
        title: "Senior Engineer (TL)",
        company_name: "Samsung Electronics",
        icon: "samsung",
        iconBg: "#383E56",
        date: "2001.03 - 2011.10",
        points: [
            "(2010-2011) 피처폰용 SPACE 플랫폼 PIMS, DNET 모듈 개발",
            "(2009-2010) SLP(Tizen) 기반 멀티미디어 앱/미들웨어 개발",
            "(2008-2009) LiMO 기반 미들웨어 및 범용 앱 개발",
            "(2007-2008) TV용 Smart Web Search(크롤러/어그리게이터) 개발",
            "(2006-2007) AceDB(임베디드 DB) 및 동시성 제어 모듈, Eclipse RCP 디버깅 도구 개발",
            "(2001-2004) 스마트 홈 Context-based Infra, 스마트폰 잉크 검색/음성 인터페이스(Voicero) 개발"
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
        image: "/images/book_game.jpg",
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
                color: "pink-text-gradient",
            },
        ],
        image: "/images/book_python.jpg",
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
        image: "/images/book_web.jpg",
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
        image: "/images/book_sqlite.jpg",
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
        image: "/images/book_lua.jpg",
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
        image: "/images/book_cpp.jpg",
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
        image: "/images/book_bot.jpg",
        source_code_link: "https://www.yes24.com/product/goods/2549646",
    },
];

const testimonials = [];

export { services, technologies, experiences, testimonials, projects, education };
