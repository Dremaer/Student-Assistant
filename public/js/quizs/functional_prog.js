const questions = [
    {
        "question": "What is a companion object in Kotlin?",
        "answers": [
            {"text": "A singleton object associated with a class.", "correct": true},
            {"text": "A regular object defined inside a class.", "correct": false},
            {"text": "A static object that cannot be extended.", "correct": false},
            {"text": "An object used for dependency injection.", "correct": false}
        ]
    },
    {
        "question": "How do you define an extension function for a class in Kotlin?",
        "answers": [
            {"text": "Using the `extends` keyword.", "correct": false},
            {"text": "Using the `fun` keyword outside the class.", "correct": true},
            {"text": "Using the `extension` keyword within the class.", "correct": false},
            {"text": "By overriding an existing method in the class.", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the Elvis operator (`?:`) in Kotlin?",
        "answers": [
            {"text": "To assert that a value is not null.", "correct": false},
            {"text": "To provide a default value if the left-hand side is null.", "correct": true},
            {"text": "To cast a nullable type to a non-nullable type.", "correct": false},
            {"text": "To perform type checking at runtime.", "correct": false}
        ]
    },
    {
        "question": "Which of the following correctly defines a higher-order function in Kotlin?",
        "answers": [
            {"text": "A function that calls another function.", "correct": false},
            {"text": "A function that takes another function as a parameter or returns one.", "correct": true},
            {"text": "A function defined as part of an object.", "correct": false},
            {"text": "A function declared inside another function.", "correct": false}
        ]
    },
    {
        "question": "How can you define an extension property in Kotlin?",
        "answers": [
            {"text": "By declaring it inside the class.", "correct": false},
            {"text": "Using a getter function outside the class.", "correct": true},
            {"text": "By creating a companion object.", "correct": false},
            {"text": "Using the `extends` keyword within the class.", "correct": false}
        ]
    },
    {
        "question": "What is the result of the following code snippet?<br><br>val range = 1..5<br>println(range.leftHalf)<br><br>(Assume `leftHalf` is an extension property.)",
        "answers": [
            {"text": "1..3", "correct": false},
            {"text": "1..2", "correct": true},
            {"text": "Error: leftHalf is not defined.", "correct": false},
            {"text": "3..4", "correct": false}
        ]
    },
    {
        "question": "What is a nullable receiver in Kotlin?",
        "answers": [
            {"text": "A type that cannot hold null values.", "correct": false},
            {"text": "An extension function that can handle null receiver objects.", "correct": true},
            {"text": "A variable declared using `lateinit`.", "correct": false},
            {"text": "A function that takes nullable parameters.", "correct": false}
        ]
    },
    {
        "question": "What does the following code output?<br><br>val result = IntRange.singletonRange(7)<br>println(result)<br><br>(Assume `singletonRange` is a companion extension function.)",
        "answers": [
            {"text": "7..7", "correct": true},
            {"text": "7..8", "correct": false},
            {"text": "Error: singletonRange is not defined.", "correct": false},
            {"text": "Null", "correct": false}
        ]
    },
    {
        "question": "How do you define a lambda function in Kotlin?",
        "answers": [
            {"text": "Using `lambda` keyword.", "correct": false},
            {"text": "Using `{}` brackets with optional parameters and an arrow (`->`).", "correct": true},
            {"text": "Using `func` keyword.", "correct": false},
            {"text": "Using parentheses followed by an arrow.", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of `by lazy` in Kotlin?",
        "answers": [
            {"text": "To defer property initialization until first access.", "correct": true},
            {"text": "To declare a read-only property.", "correct": false},
            {"text": "To declare a nullable property.", "correct": false},
            {"text": "To define a companion object.", "correct": false}
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