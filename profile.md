# 경력기술서 (간략 버전)

### 1. 기본 정보

- 신호철
- 이메일: [cybrshin@gmail.com](mailto:cybrshin@gmail.com)
- LinkedIn: [www.linkedin.com/in/dspshin](http://www.linkedin.com/in/dspshin)

---

### 2. 간단 프로필

SK 그룹 내에서 약 15년, 삼성전자에서 10년동안 다양한 서비스와 플랫폼을 개발해 온 소프트웨어 엔지니어입니다.

웹 프론트엔드(Vue, Nuxt)를 중심으로, 챗봇 플랫폼, 웹 저작 도구, 임베디드 미들웨어 등 폭넓은 영역을 경험했습니다.

사용자 경험과 서비스 품질을 고려한 **프론트엔드 아키텍처 설계**, **웹뷰 기반 서비스 개발**, **플랫폼 개발 및 운영**에 강점을 가지고 있습니다.

---

### 3. 보유 기술

- **프론트엔드**
    - Vue.js, Nuxt.js
    - WebView 기반 하이브리드 앱 화면 개발 & 웹 개발
    - JavaScript, TypeScript, HTML/CSS
- **백엔드·플랫폼 / 기타**
    - Python
- **일반 프로그래밍**
    - C/C++, Lua
- **도구 및 업무 방식**
    - Git 기반 협업, 빌드/테스트 자동화 시스템 설계 및 운영
    - AI assistant 적용도 매우 적극적으로 업무에 활용 (claude code, cursor 등)
    - 업무 과정 중 code review 단계에 ai 적용
    

---

### 4. 경력 사항

### SK Telecom – Software Engineer (frontend)

2019.02 ~ 2025.11 (6년 10개월), 서울 중구

1. [adot.ai](http://adot.ai) ([https://adot.ai/search)](https://adot.ai/search) 검색 프로젝트
    - 여러개의 ai 모델들(claude, liner, perplexity, gpt, a.x, gemini 등)에게 질문을 하고 비교할 수 있는 서비스.
    - multi-LLM 연동 뼈대 구조를 설계 및 개발
    - 2024.10.22 첫버전 상용배포.
    - 응답을 streaming하는 부분은 SSE(Server Sent Events)를 활용해서 구현.
    - vue/nuxt3, typescript, vite 사용
2. [adot.ai](http://adot.ai) note 기능 개발 프로젝트
    - 사용자의 음성을 실시간 녹음하며 dictation 및 요약해주는 서비스.
    - 2025.06.30 첫버전 상용배포
    - vue/nuxt3, typescript, vite 사용
    - 음성 dictation에는 외부 서비스와 연계하였으며, 요점정리, 요약, 특정 형식으로의 리포트 등의 기능에는 ai model 들과 연동.
3. Adot 앱([https://play.google.com/store/apps/details?id=com.skt.nugu.apollo)](https://play.google.com/store/apps/details?id=com.skt.nugu.apollo) 개발
    - vue/nuxt3, typescript, vite 사용
    - 내부적으로는 다음과 같이 여러 프로젝트로 나누어서 진행함.
        - mobility 프로젝트(혼잡도, 인기장소 웹뷰 화면 개발)
            - 위치기반 지하철혼잡도 서비스 및 인기장소에 대한 서비스 개발
        - adot 검색 웹뷰(adot.ai 검색과 유사하지만 앱에서 접근 가능한 웹뷰 화면 개발)
            - [adot.ai](http://adot.ai) 웹과 동일하다고도 볼 수 있으나, 앱에서 접근하는 웹뷰 화면이기 때문에 ui/ux가 다르며,
            - 여러 native앱의 기능과 조화를 이루어야 하는 부분이 다수 존재함(헤더영역관리, history 관리 등)
            - 특히 로그인 부분이 웹과 다름. 웹뷰에서는 로그인 관리를 native앱에서 하므로 앱과의 auth 정보 전달을 재정의해야함.
        - 공지사항, FAQ, 1:1문의, 이벤트 등 앱 공통기능 개발
            - 한 소스로 ios, android에서 모두 쓸 수 있는 웹뷰의 장점으로인해, 간단한 공통적인 앱화면은 웹뷰로 구현.
4. Nugu 앱([https://play.google.com/store/apps/details?id=com.skt.aladdin)](https://play.google.com/store/apps/details?id=com.skt.aladdin)의 웹뷰 영역 프론트엔드 개발 및 유지보수
    - AI 스피커 NUGU를 콘트롤하는 nugu app 개발
    - jQuery, javascript(es6), grunt, handlebars 사용
5. Nugu nemo 웹뷰 화면 개발
    - display를 표현하는 json 규격을 서버단과 협의하여 정의하고, 해당 규격을 전달 받아 화면을 구성하는 template viewer를 구현.
    - vue.js로 구현
    - 2022.9.20 출시
6. Nugu Auto의 **웹뷰 화면 개발** 
    - vue.js로 구현 - software 구조는 nugu nemo와 동일
    - Volvo XC 시리즈에 적용됨.
    - 첫 상용 출시는 2021.9.16이며, 그 이후 지속적으로 버전업 및 media, home 화면 등의 기능 추가 작업 수행 및 운영.
7. SK브로드밴드 셋톱박스의 half window 웹뷰 ****화면 개발
    - vue.js로 구현 - software 구조는 nugu nemo와 동일
    - 2018.1.25 첫 상용배포(skp 재직 시). 그 이후에는 SKT로 이동 후 검색 기능 추가 등 지속적으로 개발/운영.

---

### SK planet – Software Engineer Team Lead

2018.09 ~ 2019.02 (6개월)

- Bot Platform Dev Team 리더로, 챗봇 플랫폼 기능 개선 및 운영 총괄
- 팀 개발 일정/품질 관리 및 대내외 커뮤니케이션 수행

---

### SK Techx – Software Engineer / Team Leader

2017.10 ~ 2018.08 (11개월), 서울 강남구

- Bot Platform Dev Team 리더
- 챗봇 플랫폼의 기능 확장, 안정화, 서비스 운영을 위한 기술/구조 설계
- 대규모 트래픽을 고려한 플랫폼 구조 설계 및 개선

---

### SK Planet – Software Engineer / Team Lead

2011.11 ~ 2017.09 (5년 11개월), 성남시 분당구 판교동

**Bot Platform Dev Team (2017.01 ~ 2017.09)**

- ChatBot 플랫폼 개발 및 운영 총괄
- DTS(Dialog Task Specification) 에디터 개발
    - Angular, d3 기반 대화 플로우 편집 도구 구현
- DM(Dialog Manager) Debugger 개발
    - Flask-SocketIO와 [socket.io](http://socket.io) JS를 활용한 브라우저 기반 디버깅 도구 개발
- 전체 챗봇 플랫폼 아키텍처 유지보수 및 신규 기능 설계

**Web Tech Dev Team**

- Syrup Store 프론트엔드 개발자 (2015.01 ~ 2016.12)
- Syrup Store 프론트엔드 PM (2014.01 ~ 2014.12)
- planet.js 프레임워크 개발
    - jQuery & jQuery Mobile 기반 JavaScript 웹 프레임워크 설계 및 구현
- Web Authoring Tool(planet.make) 개발
    - 웹 기반 저작 도구 설계 및 구현
- Python 기반 빌드/테스트 자동화 시스템 구축
- 프레임워크 다운로드용 앱 템플릿 생성기 개발

---

### Samsung Electronics – Senior Engineer (TL)

2001.03 ~ 2011.10 (10년 8개월)

- **2010.12 ~ 2011.10**
    - 피처폰용 SPACE 플랫폼 내 PIMS, DNET 모듈 개발
- **2009.11 ~ 2010.12**
    - SLP(Samsung Linux Platform, 현 Tizen) 기반 멀티미디어 앱/미들웨어 개발
- **2008.07 ~ 2009.10**
    - LiMO 기반 미들웨어 및 범용 애플리케이션 개발
- **2007.07 ~ 2008.06**
    - TV용 Smart Web Search 개발
    - 웹 크롤러/어그리게이터 및 데이터 분석 기능 구현
- **2006.02 ~ 2007.06**
    - AceDB(경량 임베디드 데이터베이스) 개발
    - 테이블 레벨 락을 위한 동시성 제어 모듈 개발
    - Eclipse RCP 기반 디버깅 도구 개발
- **2004.01 ~ 2004.12**
    - 스마트 홈용 Context-based Infrastructure 개발
- **2003.01 ~ 2003.12**
    - 스마트폰용 잉크 검색(ink-search) 애플리케이션 개발
- **2002.08 ~ 2003.06**
    - 스마트폰용 음성 인터페이스(Voicero) 개발
    - EASR, TTS 포팅
- **2001.08 ~ 2002.12**
    - Embedded Voice Solution 개발
    - 잡음 제거 및 음성 향상, 강건한 end-point detection 개발

---

### 5. 저서 및 강의

- **웹으로 시작하는 모바일 게임**
    - 지앤선(志&嬋) · 2017년 8월 31일
    - https://www.yes24.com/product/goods/44384394
- **빠르게 활용하는 파이썬 3.6 프로그래밍**
    - 위키북스 · 2017년 7월 18일
    - [https://www.yes24.com/product/goods/43751272](https://www.yes24.com/product/goods/43751272)
    - 관련 강의
        - T아카데미 python 강의
            - [https://www.youtube.com/playlist?list=PL9mhQYIlKEhdP2Ci5GUcBuvo4z93Qpv5V](https://www.youtube.com/playlist?list=PL9mhQYIlKEhdP2Ci5GUcBuvo4z93Qpv5V)
- **쉽게 따라 하는 모바일 웹 개발 : jQuery Mobile부터 Node.js까지**
    - 위키북스 · 2015년 11월 17일
    - [https://www.yes24.com/product/goods/23125262](https://www.yes24.com/product/goods/23125262)
- **SQLite3**
    - wikibooks · 2011년 5월 12일
    - https://www.yes24.com/product/goods/5058647
- **예제로 배우는 프로그래밍 루아**
    - 한빛미디어 · 2008년 10월 5일
    - https://www.yes24.com/product/goods/3081202
- **IT CookBook for Beginner-77 C++ 기초**
    - 한빛미디어 · 2008년 1월 20일
    - [http://www.yes24.com/24/goods/2817935](http://www.yes24.com/24/goods/2817935)
- **Visual C++를 이용한 게임봇 만들기**
    - 정보문화사 · 2007년 5월 16일
    - [https://www.yes24.com/product/goods/2549646](https://www.yes24.com/product/goods/2549646)

---

### 6. 학력

- Korea Advanced Institute of Science and Technology (KAIST)
    - 석사, Computer Science (SEP 전공)
    - 2005 ~ 2007
- 광운대학교
    - 학사, 전자공학
    - 1994 ~ 2001