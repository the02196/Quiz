const QuizList = [
    {
        id: 1,
        question: "어떤 HTML 태그를 사용하여 텍스트를 굵게 표시할 수 있을까요?",
        answer: "<b>",
        view: {
           number1 : "<bold>",
           number2 : "<b>",
           number3 : "<i>",
           number4 : "<em>"
        },
        hint: "영어로 '굵다'는 의미의 단어를 축약한다면 어떤 모습일까요?",
        type: "html"
    },
    {
        id: 2,
        question: "CSS에서 박스의 여백(간격)을 조절하기 위해 사용되는 속성은 무엇일까요?",
        answer: "padding",
        view: {
           number1 : "spacing",
           number2 : "margin",
           number3 : "padding",
           number4 : "border"
        },
        hint: "보더 밖이 아닌 안쪽에서 간격을 만드는 속성을 잘 생각해 보세요.",
        type: "css"
    },
    {
        id: 3,
        question: "JavaScript에서 변수를 선언하기 위해 사용되는 키워드는 무엇일까요?",
        answer: "const",
        view: {
           number1 : "variable",
           number2 : "v",
           number3 : "for",
           number4 : "const"
        },
        hint: "var은 변수를 선언하기 위해 사용됩니다.",
        type: "js"
    },
    {
        id: 4,
        question: "어떤 HTML 태그를 사용하여 순서 없는 목록을 만들 수 있을까요?",
        answer: "<ul>",
        view: {
           number1 : "<ol>",
           number2 : "<list>",
           number3 : "<ul>",
           number4 : "<unordered>"
        },
        hint: "unordered가 숫자가 없는 것입니다.",
        type: "html"
    },
    {
        id: 5,
        question: "CSS에서 특정 요소에 클래스 이름을 지정하기 위해 사용되는 기호는 무엇일까요?",
        answer: ".",
        view: {
           number1 : "#",
           number2 : ".",
           number3 : "@",
           number4 : "&"
        },
        hint: "클래스를 css에서 선택할 때, 어떤 방식으로 선택하는지 기억해보세요.",
        type: "css"
    },
    {
        id: 6,
        question: "JavaScript에서 조건문을 표현하기 위해 사용되는 키워드는 무엇일까요?",
        answer: "if / else",
        view: {
           number1 : "condition",
           number2 : "if / else",
           number3 : "case",
           number4 : "switch"
        },
        hint: "'만약에'를 영어로 적는다면?",
        type: "js"
    },
    {
        id: 7,
        question: "하이퍼링크를 만들기 위해 사용하는 HTML 태그는 무엇일까요?",
        answer: "<a>",
        view: {
           number1 : "<link>",
           number2 : "<a>",
           number3 : "<href>",
           number4 : "<url>"
        },
        hint: "anchor는 닺이라는 뜻입니다.",
        type: "html"
    },
    {
        id: 8,
        question: "CSS에서 글자의 색상을 지정하기 위해 사용되는 속성은 무엇일까요?",
        answer: "color",
        view: {
           number1 : "text-color",
           number2 : "color",
           number3 : "font-color",
           number4 : "text-style"
        },
        hint: "생각보다 짧은 속성입니다.",
        type: "css"
    },
    {
        id: 9,
        question: "JavaScript에서 배열의 길이를 반환하는 속성은 무엇일까요?",
        answer: "length",
        view: {
           number1 : "length",
           number2 : "count",
           number3 : "size",
           number4 : "index"
        },
        hint: "길이를 영어로 번역해보세요.",
        type: "js"
    }
]

export default QuizList;