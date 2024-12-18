const questions = [
    {
        "question": "What is the purpose of the strcpy() function in C?",
        "answers": [
            {"text": "To compare two strings", "correct": false},
            {"text": "To concatenate two strings", "correct": false},
            {"text": "To copy one string into another", "correct": true},
            {"text": "To find the length of a string", "correct": false}
        ]
    },
    {
        "question": "What will the strlen() function return for the following code?<br><br>char str[10] = \"Hello\";<br>printf(\"%d\", strlen(str));",
        "answers": [
            {"text": "4", "correct": false},
            {"text": "5", "correct": true},
            {"text": "6", "correct": false},
            {"text": "10", "correct": false}
        ]
    },
    {
        "question": "What is the result of the following code?<br><br>char from[10] = \"KING\", to[10] = \"\";<br>strcpy(to, from);<br>strcat(to, \"DOM\");<br>printf(\"%s\", to);",
        "answers": [
            {"text": "KING", "correct": false},
            {"text": "DOM", "correct": false},
            {"text": "KINGDOM", "correct": true},
            {"text": "Compilation error", "correct": false}
        ]
    },
    {
        "question": "What does the strcmp() function do?",
        "answers": [
            {"text": "Compares two strings and returns their lengths", "correct": false},
            {"text": "Compares two strings and returns 0 if they are equal", "correct": true},
            {"text": "Appends one string to another", "correct": false},
            {"text": "Copies one string to another", "correct": false}
        ]
    },
    {
        "question": "How is a 2D array declared in C?",
        "answers": [
            {"text": "int arr[3];", "correct": false},
            {"text": "int arr[2][3];", "correct": true},
            {"text": "int arr[];", "correct": false},
            {"text": "int arr[][];", "correct": false}
        ]
    },
    {
        "question": "How is a 2D array accessed?",
        "answers": [
            {"text": "By using a single index arr[2]", "correct": false},
            {"text": "By using two indices arr[1][2]", "correct": true},
            {"text": "By calling its name directly", "correct": false},
            {"text": "By assigning the array to a pointer", "correct": false}
        ]
    },
    {
        "question": "What is the output of the following code?<br><br>int count[2][3] = {10, 20, 30, 40, 50, 60};<br>printf(\"%d\", count[1][2]);",
        "answers": [
            {"text": "10", "correct": false},
            {"text": "30", "correct": false},
            {"text": "50", "correct": false},
            {"text": "60", "correct": true}
        ]
    },
    {
        "question": "What does the following code print?<br><br>char str[10] = \"C Language\";<br>printf(\"%s\", str);",
        "answers": [
            {"text": "C Language", "correct": true},
            {"text": "C", "correct": false},
            {"text": "Compilation error", "correct": false},
            {"text": "Undefined behavior", "correct": false}
        ]
    },
    {
        "question": "What is the key characteristic of a 2D character array?",
        "answers": [
            {"text": "It stores integers", "correct": false},
            {"text": "It is a collection of single-dimensional character arrays", "correct": true},
            {"text": "It stores floating-point numbers", "correct": false},
            {"text": "It stores only NULL values", "correct": false}
        ]
    },
    {
        "question": "What happens when a string input exceeds the array size in gets()?",
        "answers": [
            {"text": "The input is truncated", "correct": false},
            {"text": "It causes undefined behavior (buffer overflow)", "correct": true},
            {"text": "It raises a runtime error", "correct": false},
            {"text": "It automatically resizes the array", "correct": false}
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