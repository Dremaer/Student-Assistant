const questions = [
    {
        "question": "What is the scope of a variable in C?",
        "answers": [
            {"text": "The time during which a variable exists in memory", "correct": false},
            {"text": "The area of the program where a variable can be accessed", "correct": true},
            {"text": "The total number of variables in a program", "correct": false},
            {"text": "The amount of memory allocated to a variable", "correct": false}
        ]
    },
    {
        "question": "What is a local variable?",
        "answers": [
            {"text": "A variable declared outside any function", "correct": false},
            {"text": "A variable declared inside a function and accessible only within that function", "correct": true},
            {"text": "A variable that persists throughout the program execution", "correct": false},
            {"text": "A variable that is globally accessible to all functions", "correct": false}
        ]
    },
    {
        "question": "Where is a global variable stored in memory?",
        "answers": [
            {"text": "Stack", "correct": false},
            {"text": "Heap", "correct": false},
            {"text": "Data Segment", "correct": true},
            {"text": "Code Segment", "correct": false}
        ]
    },
    {
        "question": "What happens if a local variable has the same name as a global variable?",
        "answers": [
            {"text": "Compilation error", "correct": false},
            {"text": "The global variable is ignored within the local scope", "correct": true},
            {"text": "The local variable is ignored", "correct": false},
            {"text": "Both variables are merged into one", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the static keyword in C?",
        "answers": [
            {"text": "It makes the variable global", "correct": false},
            {"text": "It preserves the variable value between function calls", "correct": true},
            {"text": "It initializes the variable with zero", "correct": false},
            {"text": "It allows variables to be shared between files", "correct": false}
        ]
    },
    {
        "question": "What does the following code output?<br><br>#include <stdio.h> <br>void hap(int n);<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;   for(int i = 1; i <= 3; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     hap(i);<br>&nbsp;&nbsp;&nbsp;    }<br>&nbsp;&nbsp;&nbsp;    return 0;<br>}<br><br>void hap(int n) {<br>&nbsp;&nbsp;&nbsp;    int sum1 = 0;<br>&nbsp;&nbsp;&nbsp;    static int sum2 = 0;<br>&nbsp;&nbsp;&nbsp;    sum1 = sum1 + n;<br>&nbsp;&nbsp;&nbsp;    sum2 = sum2 + n;<br>&nbsp;&nbsp;&nbsp;    printf(\"sum1: %d, sum2: %d \n\", sum1, sum2);<br>}",
        "answers": [
            {"text": "sum1 and sum2 both accumulate values", "correct": false},
            {"text": "sum1 resets while sum2 accumulates values", "correct": true},
            {"text": "Both sum1 and sum2 reset each time", "correct": false},
            {"text": "sum1 and sum2 give errors", "correct": false}
        ]
    },
    {
        "question": "What is the extern keyword used for?",
        "answers": [
            {"text": "To declare a static variable", "correct": false},
            {"text": "To initialize a variable with zero", "correct": false},
            {"text": "To reference a global variable declared in another file", "correct": true},
            {"text": "To restrict variable access to a specific block", "correct": false}
        ]
    },
    {
        "question": "In C, where are variables declared with static stored?",
        "answers": [
            {"text": "Stack", "correct": false},
            {"text": "Heap", "correct": false},
            {"text": "Code Segment", "correct": false},
            {"text": "Data Segment", "correct": true}
        ]
    },
    {
        "question": "What is the output of the following code?<br><br>#include <stdio.h><br>int salary = 2700000;<br><br>void func1() {<br>&nbsp;&nbsp;&nbsp;    salary += 50000;<br>&nbsp;&nbsp;&nbsp;    printf(\"func1() salary: %d \n\", salary);<br>}<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;    printf(\"main() salary: %d \n\", salary);<br>&nbsp;&nbsp;&nbsp;    func1();<br>&nbsp;&nbsp;&nbsp;    printf(\"main() salary: %d \n\", salary);<br>&nbsp;&nbsp;&nbsp;    return 0;<br>}",
        "answers": [
            {"text": "main() salary: 2700000\nfunc1() salary: 2750000\nmain() salary: 2750000", "correct": true},
            {"text": "main() salary: 2750000\nfunc1() salary: 2750000\nmain() salary: 2700000", "correct": false},
            {"text": "func1() salary: 2700000\nmain() salary: 2750000", "correct": false},
            {"text": "Compilation error", "correct": false}
        ]
    },
    {
        "question": "Which variable’s value is retained between multiple calls to a function?",
        "answers": [
            {"text": "A global variable", "correct": false},
            {"text": "A local variable", "correct": false},
            {"text": "A static variable", "correct": true},
            {"text": "An extern variable", "correct": false}
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