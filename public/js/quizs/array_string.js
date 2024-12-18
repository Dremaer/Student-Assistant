const questions = [
    {
        "question": "What is an array in C?",
        "answers": [
            {"text": "A collection of different data types stored in memory", "correct": false},
            {"text": "A group of similar data types stored under one name in continuous memory", "correct": true},
            {"text": "A single variable used for storing data", "correct": false},
            {"text": "A method for reading user input", "correct": false}
        ]
    },
    {
        "question": "How is an array initialized in C?",
        "answers": [
            {"text": "By declaring its size without values", "correct": false},
            {"text": "By assigning values during declaration", "correct": false},
            {"text": "By setting values after its declaration", "correct": false},
            {"text": "All of the above", "correct": true}
        ]
    },
    {
        "question": "What is the output of the following program?<br><br>#include <stdio.h><br>int main() {<br>&nbsp;&nbsp;&nbsp;    int arr[5] = {10, 20, 30, 40, 50};<br>&nbsp;&nbsp;&nbsp; printf(\"%d\", arr[2]);<br>&nbsp;&nbsp;&nbsp;  return 0;<br>}",
        "answers": [
            {"text": "10", "correct": false},
            {"text": "20", "correct": false},
            {"text": "30", "correct": true},
            {"text": "50", "correct": false}
        ]
    },
    {
        "question": "What happens if you access an array index out of bounds?",
        "answers": [
            {"text": "Compilation error", "correct": false},
            {"text": "Segmentation fault or unpredictable behavior", "correct": true},
            {"text": "Prints a default value", "correct": false},
            {"text": "Memory automatically adjusts", "correct": false}
        ]
    },
    {
        "question": "What is a string in C?",
        "answers": [
            {"text": "A data type for storing integers", "correct": false},
            {"text": "A collection of characters ending with \\0 (NULL)", "correct": true},
            {"text": "A type of array used for storing numbers", "correct": false},
            {"text": "A function for performing input/output", "correct": false}
        ]
    },
    {
        "question": "What function can input a string in C?",
        "answers": [
            {"text": "scanf()", "correct": false},
            {"text": "printf()", "correct": false},
            {"text": "gets()", "correct": true},
            {"text": "strlen()", "correct": false}
        ]
    },
    {
        "question": "What happens if the input string exceeds the size of the array in gets()?",
        "answers": [
            {"text": "It truncates the string", "correct": false},
            {"text": "It causes undefined behavior (buffer overflow)", "correct": true},
            {"text": "It clears the string", "correct": false},
            {"text": "It raises a compile-time error", "correct": false}
        ]
    },
    {
        "question": "What is the starting index of an array in C?",
        "answers": [
            {"text": "1", "correct": false},
            {"text": "0", "correct": true},
            {"text": "Depends on the compiler", "correct": false},
            {"text": "Randomly assigned", "correct": false}
        ]
    },
    {
        "question": "How are strings stored in C?",
        "answers": [
            {"text": "As a character array ending with '\\0'", "correct": true},
            {"text": "As an integer array", "correct": false},
            {"text": "As a linked list", "correct": false},
            {"text": "As a separate data type", "correct": false}
        ]
    },
    {
        "question": "What does the following code print?<br><br>#include <stdio.h><br>int main() {<br>&nbsp;&nbsp;&nbsp;  char str[10] = \"hello\";<br>&nbsp;&nbsp;&nbsp;  printf(\"%s\", str);<br>&nbsp;&nbsp;&nbsp;  return 0;<br>}",
        "answers": [
            {"text": "hello", "correct": true},
            {"text": "h", "correct": false},
            {"text": "garbage value", "correct": false},
            {"text": "Compilation error", "correct": false}
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