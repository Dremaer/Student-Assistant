const questions = [
    {
        "question": "What is the correct way to define a function in Kotlin?",
        "answers": [
            {"text": "function circleArea(radius: Double): Double", "correct": false},
            {"text": "fun circleArea(radius: Double): Double", "correct": true},
            {"text": "def circleArea(radius: Double): Double", "correct": false},
            {"text": "func circleArea(radius: Double): Double", "correct": false}
        ]
    },
    {
        "question": "How do you declare a read-only variable in Kotlin?",
        "answers": [
            {"text": "const radius = 10", "correct": false},
            {"text": "val radius = 10", "correct": true},
            {"text": "let radius = 10", "correct": false},
            {"text": "var radius = 10", "correct": false}
        ]
    },
    {
        "question": "Which keyword is used for conditional expressions in Kotlin?",
        "answers": [
            {"text": "if", "correct": true},
            {"text": "when", "correct": false},
            {"text": "switch", "correct": false},
            {"text": "case", "correct": false}
        ]
    },
    {
        "question": "What is the result of the following range expression?<br><br>val range = 1..5<br>println(3 in range)<br>",
        "answers": [
            {"text": "false", "correct": false},
            {"text": "true", "correct": true},
            {"text": "null", "correct": false},
            {"text": "Error", "correct": false}
        ]
    },
    {
        "question": "What is the correct way to use `when` in Kotlin for multiple conditions?",
        "answers": [
            {"text": "if (n == 1) {...} else if (n == 2) {...}", "correct": false},
            {"text": "when (n) { 1 -> ..., 2 -> ... }", "correct": true},
            {"text": "switch (n) { case 1: ..., case 2: ... }", "correct": false},
            {"text": "select (n) { 1 -> ..., 2 -> ... }", "correct": false}
        ]
    },
    {
        "question": "What does the following code snippet demonstrate?<br><br>try {<br>&nbsp;&nbsp;&nbsp;  val number = readLine()!!.toInt()<br>} catch (e: NumberFormatException) {<br>&nbsp;&nbsp;&nbsp;  println(\"Invalid input\")<br>}<br>",
        "answers": [
            {"text": "Function overloading", "correct": false},
            {"text": "Error handling using try-catch", "correct": true},
            {"text": "Range checks using exceptions", "correct": false},
            {"text": "Loop breaking with exceptions", "correct": false}
        ]
    },
    {
        "question": "How do you import all functions from the `kotlin.math` package?",
        "answers": [
            {"text": "import kotlin.math", "correct": false},
            {"text": "import kotlin.math.*", "correct": true},
            {"text": "include kotlin.math.*", "correct": false},
            {"text": "use kotlin.math", "correct": false}
        ]
    },
    {
        "question": "Which loop ensures the body is executed at least once in Kotlin?",
        "answers": [
            {"text": "for", "correct": false},
            {"text": "while", "correct": false},
            {"text": "do-while", "correct": true},
            {"text": "repeat", "correct": false}
        ]
    },
    {
        "question": "How do you define a function with a default parameter value in Kotlin?",
        "answers": [
            {"text": "fun readInt(radix) = radix ?: 10", "correct": false},
            {"text": "fun readInt(radix: Int = 10)", "correct": true},
            {"text": "fun readInt(Int radix = 10)", "correct": false},
            {"text": "fun readInt(radix = 10: Int)", "correct": false}
        ]
    },
    {
        "question": "What does the `step` keyword do in a Kotlin range?",
        "answers": [
            {"text": "Defines the maximum value in the range", "correct": false},
            {"text": "Sets the increment value for the range", "correct": true},
            {"text": "Defines the starting value of the range", "correct": false},
            {"text": "Specifies the type of the range", "correct": false}
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