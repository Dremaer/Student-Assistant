const questions = [
    {
        "question": "What is a function in C programming?",
        "answers": [
            {"text": "A keyword used to store data", "correct": false},
            {"text": "A block of code that performs a specific task", "correct": true},
            {"text": "A variable declaration", "correct": false},
            {"text": "A loop structure", "correct": false}
        ]
    },
    {
        "question": "What is the role of the main() function in a C program?",
        "answers": [
            {"text": "To serve as the program's entry point", "correct": true},
            {"text": "To declare global variables", "correct": false},
            {"text": "To call library files", "correct": false},
            {"text": "To display messages to the user", "correct": false}
        ]
    },
    {
        "question": "What is a local variable?",
        "answers": [
            {"text": "A variable declared outside of all functions", "correct": false},
            {"text": "A variable shared between functions", "correct": false},
            {"text": "A variable declared inside a function and only accessible there", "correct": true},
            {"text": "A variable declared with the const keyword", "correct": false}
        ]
    },
    {
        "question": "Which keyword is used to return a value from a function?",
        "answers": [
            {"text": "break", "correct": false},
            {"text": "return", "correct": true},
            {"text": "void", "correct": false},
            {"text": "exit", "correct": false}
        ]
    },
    {
        "question": "What does the following code print? <br><br> #include <stdio.h> <br> void func1(void); <br>int func2(int salary); <br><br> int main() {<br> &nbsp;&nbsp;&nbsp; int salary = 5700000, result;<br> &nbsp;&nbsp;&nbsp; func1();<br>&nbsp;&nbsp;&nbsp; result = func2(salary);<br>&nbsp;&nbsp;&nbsp; printf(\"이번달 수령액: %d \\n\", result);<br>&nbsp;&nbsp;&nbsp; return 0;<br>}<br><br>void func1(void) {<br>&nbsp;&nbsp;&nbsp; printf(\"성명 : 지드래곤 \\n\");<br>}<br><br>int func2(int salary) {<br>&nbsp;&nbsp;&nbsp;  return salary + 250000;<br>}",
        "answers": [
            {
                "text": "\"성명: 지드래곤\" followed by \"이번달 수령액: 5700000\"",
                "correct": false
            },
            {
                "text": "\"성명: 지드래곤\" followed by \"이번달 수령액: 5950000\"",
                "correct": true
            },
            {
                "text": "Compilation error",
                "correct": false
            },
            {
                "text": "Runtime error",
                "correct": false
            }
        ]
    },    
    {
        "question": "What is a recursive function?",
        "answers": [
            {"text": "A function that calls itself", "correct": true},
            {"text": "A function that loops indefinitely", "correct": false},
            {"text": "A function that declares global variables", "correct": false},
            {"text": "A function with no parameters", "correct": false}
        ]
    },
    {
        "question": "What will the following recursive function output?<br><br> #include <stdio.h> <br>void recurse(int i); <br><br>int main() {<br>&nbsp;&nbsp;&nbsp; recurse(1);<br>&nbsp;&nbsp;&nbsp;  printf(\"main() Terminating.. \\n\");<br>&nbsp;&nbsp;&nbsp;  return 0;<br>}<br><br>void recurse(int i) {<br>&nbsp;&nbsp;&nbsp; if(i <= 3){<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   recurse(i + 1);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   printf(\"i : %d \\n\", i);<br>&nbsp;&nbsp;&nbsp;  } else {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  printf(\"함수탈출시작. \\n\");<br>&nbsp;&nbsp;&nbsp; }<br>}",
        "answers": [
            {"text": "\"함수탈출시작\" followed by \"i: 3\" \"i: 2\" \"i: 1\"", "correct": true},
            {"text": "\"i: 1\" \"i: 2\" \"i: 3\" followed by \"함수탈출시작\"", "correct": false},
            {"text": "Compilation error", "correct": false},
            {"text": "Infinite recursion", "correct": false}
        ]
    },
    {
        "question": "What does the return statement do in C?",
        "answers": [
            {"text": "It terminates a program", "correct": false},
            {"text": "It passes a value back to the calling function", "correct": true},
            {"text": "It defines a new variable", "correct": false},
            {"text": "It skips to the next iteration of a loop", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of a function prototype in C?",
        "answers": [
            {"text": "To define the function logic", "correct": false},
            {"text": "To declare the function before it is called", "correct": true},
            {"text": "To call a recursive function", "correct": false},
            {"text": "To terminate the program execution", "correct": false}
        ]
    },
    {
        "question": "How can you ensure a function returns a float value?",
        "answers": [
            {"text": "Use int before the function name", "correct": false},
            {"text": "Use void to prevent returns", "correct": false},
            {"text": "Declare the function with float return type", "correct": true},
            {"text": "Use the double keyword", "correct": false}
        ]
    },
];


const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const backBtn = document.getElementById("back-btn"); // Back button

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    // Reset question index and score
    currentQuestionIndex = 0;
    score = 0;

    // Reset all user answers only when restarting the quiz
    questions.forEach(question => {
        question.userAnswer = null; 
    });

    // Reset UI elements
    nextBtn.innerHTML = "Next";
    backBtn.style.display = "none";
    prevBtn.style.display = "none";

    // Start the quiz from the first question
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        // Persist user's previous answer during normal navigation
        if (currentQuestion.userAnswer === answer.text) {
            button.classList.add(answer.correct ? "correct" : "incorrect");
        }

        answerBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", (e) => {
            selectAnswer(e, answer.text); 
        });
    });
}

function selectAnswer(e, selectedText) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Save the user's selected answer
    questions[currentQuestionIndex].userAnswer = selectedText;

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Highlight correct answer and disable all buttons
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

function resetState() {
    nextBtn.style.display = "block";
    prevBtn.style.display = currentQuestionIndex > 0 ? "block" : "none";
    backBtn.style.display = "none";

    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function showScore() {
    resetState();

    questionElement.innerHTML = `
        <h2 style="font-size: 36px; font-weight: bold; color: #001e4d; margin-bottom: 15px; text-align: center; margin-top: 100px;">
            Fantastic! You've completed the quiz session! 🎓
        </h2>
        <p style="font-size: 26px; font-weight: bold; color: #333; text-align: center; margin-bottom: 180px;">
            You answered ${score} out of ${questions.length} questions correctly.
        </p>
    `;
    nextBtn.innerHTML = "Take Quiz"; 
    nextBtn.style.display = "block";
    prevBtn.style.display = "none";
    backBtn.style.display = "block";
}

// Handle navigation to the next question
function handleNextButton() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
}

// Handle navigation to the previous question
function handlePrevButton() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

prevBtn.addEventListener("click", handlePrevButton);

nextBtn.addEventListener("click", () => {
    if (nextBtn.innerHTML === "Take Quiz") {
        startQuiz();
    } else {
        handleNextButton(); 
    }
});

backBtn.addEventListener("click", () => {
    window.location.href = "/quizs/quiz_c";
});

startQuiz();