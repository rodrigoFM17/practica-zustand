export const questions = [
    {
        "id": "1",
        "question": "¿Cuál será la salida del siguiente código?",
        "code": "console.log(2 + 2);",
        "answers": [
            "4",
            "22",
            "NaN",
            "Error"
        ],
        "correctAnswer": 0
    },
    {
        "id": "2",
        "question": "¿Qué imprimirá este código?",
        "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(function() {\n    console.log(i);\n  }, 1000);\n}",
        "answers": [
            "0, 1, 2",
            "1, 2, 3",
            "3, 3, 3",
            "Ninguna de las anteriores"
        ],
        "correctAnswer": 2
    },
    {
        "id": "3",
        "question": "¿Cuál será la salida de este código?",
        "code": "console.log('5' - 3);",
        "answers": [
            "2",
            "8",
            "53",
            "NaN"
        ],
        "correctAnswer": 0
    },
    {
        "id": "4",
        "question": "¿Qué mostrará este código?",
        "code": "console.log(1 === '1');",
        "answers": [
            "true",
            "false",
            "Error",
            "NaN"
        ],
        "correctAnswer": 1
    },
    {
        "id": "5",
        "question": "¿Cuál es la salida de este código?",
        "code": "console.log(typeof(undefined));",
        "answers": [
            "undefined",
            "null",
            "object",
            "Error"
        ],
        "correctAnswer": 2
    },
    {
        "id": "6",
        "question": "¿Qué se imprimirá?",
        "code": "var a = 1;\nfunction foo() {\n  console.log(a);\n}\nfunction bar() {\n  var a = 2;\n  foo();\n}\nbar();",
        "answers": [
            "1",
            "2",
            "undefined",
            "Error"
        ],
        "correctAnswer": 0
    },
    {
        "id": "7",
        "question": "¿Qué imprimirá este código?",
        "code": "console.log(0.1 + 0.2 === 0.3);",
        "answers": [
            "true",
            "false",
            "Error",
            "NaN"
        ],
        "correctAnswer": 1
    },
    {
        "id": "8",
        "question": "¿Cuál es la salida de este código?",
        "code": "console.log(5 * 'abc');",
        "answers": [
            "NaN",
            "Error",
            "0",
            "NaNabc"
        ],
        "correctAnswer": 0
    },
    {
        "id": "9",
        "question": "¿Qué mostrará este código?",
        "code": "var x = 0;\nfunction foo() {\n  console.log(x);\n  var x = 1;\n  console.log(x);\n}\nfoo();",
        "answers": [
            "undefined, 1",
            "0, 1",
            "0, undefined",
            "Error"
        ],
        "correctAnswer": 0
    },
    {
        "id": "10",
        "question": "¿Cuál será la salida de este código?",
        "code": "console.log([1, 2, 3] + [4, 5, 6]);",
        "answers": [
            "123456",
            "10,11,12",
            "[1,2,3][4,5,6]",
            "Error"
        ],
        "correctAnswer": 0
    },
    {
        "id": "11",
        "question": "¿Qué imprimirá este código?",
        "code": "console.log(+'abc');",
        "answers": [
            "NaN",
            "0",
            "Error",
            "undefined"
        ],
        "correctAnswer": 0
    },
    {
        "id": "12",
        "question": "¿Cuál será la salida de este código?",
        "code": "console.log(3 + 4 + '5');",
        "answers": [
            "75",
            "345",
            "12",
            "Error"
        ],
        "correctAnswer": 1
    },
    {
        "id": "13",
        "question": "¿Qué mostrará este código?",
        "code": "console.log(typeof(null));",
        "answers": [
            "object",
            "null",
            "undefined",
            "Error"
        ],
        "correctAnswer": 0
    },
    {
        "id": "14",
        "question": "¿Qué imprimirá este código?",
        "code": "console.log(1 < 2 < 3);",
        "answers": [
            "true",
            "false",
            "Error",
            "undefined"
        ],
        "correctAnswer": 0
    },
    {
        "id": "15",
        "question": "¿Cuál será la salida de este código?",
        "code": "console.log('Hello' - 'World');",
        "answers": [
            "NaN",
            "Error",
            "HelloWorld",
            "0"
        ],
        "correctAnswer": 0
    }
]
