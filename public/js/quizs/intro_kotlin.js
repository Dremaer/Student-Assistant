const questions = [
    {
        "question": "What is the correct way to define a read-only variable in Kotlin?",
        "answers": [
            {"text": "var timeInSeconds = 15", "correct": false},
            {"text": "val timeInSeconds = 15", "correct": true},
            {"text": "const timeInSeconds = 15", "correct": false},
            {"text": "readonly timeInSeconds = 15", "correct": false}
        ]
    },
    {
        "question": "Which function is used to read input from the standard input in Kotlin?",
        "answers": [
            {"text": "input()", "correct": false},
            {"text": "readInput()", "correct": false},
            {"text": "readLine()", "correct": true},
            {"text": "getInput()", "correct": false}
        ]
    },
    {
        "question": "How can you create an array in Kotlin initialized with specific elements?",
        "answers": [
            {"text": "val arr = array(1, 2, 3)", "correct": false},
            {"text": "val arr = arrayOf(1, 2, 3)", "correct": true},
            {"text": "val arr = newArray(1, 2, 3)", "correct": false},
            {"text": "val arr = arrayCreate(1, 2, 3)", "correct": false}
        ]
    },
    {
        "question": "What will be the result of the following Kotlin code?<br><br>val numbers = arrayOf(1, 2, 3)<br>val copy = numbers.copyOf()<br>copy[0] = 100<br>println(numbers[0])<br>",
        "answers": [
            {"text": "100", "correct": false},
            {"text": "1", "correct": true},
            {"text": "null", "correct": false},
            {"text": "Error", "correct": false}
        ]
    },
    {
        "question": "Which Kotlin operator checks if two objects are the same instance?",
        "answers": [
            {"text": "==", "correct": false},
            {"text": "===", "correct": true},
            {"text": "!=", "correct": false},
            {"text": "!==", "correct": false}
        ]
    },
    {
        "question": "How do you represent a multi-line string in Kotlin?",
        "answers": [
            {"text": "Using triple single quotes (`'''`)", "correct": false},
            {"text": "Using triple double quotes (`\"\"\"`)", "correct": true},
            {"text": "Using backticks (`\``)", "correct": false},
            {"text": "Using angle brackets (`<>`)", "correct": false}
        ]
    },
    {
        "question": "What is the type of the following Kotlin variable?<br><br>val x = 10L<br>",
        "answers": [
            {"text": "Int", "correct": false},
            {"text": "Long", "correct": true},
            {"text": "Double", "correct": false},
            {"text": "Float", "correct": false}
        ]
    },
    {
        "question": "What does the `toInt()` function in Kotlin do?",
        "answers": [
            {"text": "Converts an integer to a string.", "correct": false},
            {"text": "Converts a string or other types to an integer.", "correct": true},
            {"text": "Rounds a float or double to the nearest integer.", "correct": false},
            {"text": "Extracts the integer part from a decimal.", "correct": false}
        ]
    },
    {
        "question": "Which function checks if two arrays contain the same content in Kotlin?",
        "answers": [
            {"text": "equals()", "correct": false},
            {"text": "==", "correct": false},
            {"text": "contentEquals()", "correct": true},
            {"text": "arrayEquals()", "correct": false}
        ]
    },
    {
        "question": "Which escape sequence is used to insert a new line in a Kotlin string?",
        "answers": [
            {"text": "\\n", "correct": true},
            {"text": "\\newline", "correct": false},
            {"text": "\\nl", "correct": false},
            {"text": "\\new", "correct": false}
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
    window.location.href = "/quizs/quiz_oop";
});

startQuiz();