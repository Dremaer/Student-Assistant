const questions = [
    {
        "question": "What is the main purpose of the `is` operator in Kotlin?",
        "answers": [
            {"text": "To check if a variable is null.", "correct": false},
            {"text": "To check if a variable is of a specific type.", "correct": true},
            {"text": "To cast a variable to a specific type.", "correct": false},
            {"text": "To declare a type explicitly.", "correct": false}
        ]
    },
    {
        "question": "How do you declare a subclass in Kotlin?",
        "answers": [
            {"text": "class Subclass : Superclass()", "correct": true},
            {"text": "class Subclass extends Superclass()", "correct": false},
            {"text": "class Subclass inherits Superclass()", "correct": false},
            {"text": "class Subclass implements Superclass()", "correct": false}
        ]
    },
    {
        "question": "Which keyword makes a Kotlin class inheritable?",
        "answers": [
            {"text": "abstract", "correct": false},
            {"text": "open", "correct": true},
            {"text": "final", "correct": false},
            {"text": "public", "correct": false}
        ]
    },
    {
        "question": "What is the result of the following code?<br><br>open class Vehicle {<br>&nbsp;&nbsp;&nbsp;  init { println(\"Initializing Vehicle\") }<br>}<br><br>class Car : Vehicle() {<br>&nbsp;&nbsp;&nbsp;    init { println(\"Initializing Car\") }<br>}<br><br>fun main() {<br>&nbsp;&nbsp;&nbsp;  Car()<br>}<br>",
        "answers": [
            {"text": "Initializing Car\nInitializing Vehicle", "correct": false},
            {"text": "Initializing Vehicle\nInitializing Car", "correct": true},
            {"text": "Error: Vehicle class must not have a body.", "correct": false},
            {"text": "Nothing is printed.", "correct": false}
        ]
    },
    {
        "question": "What is the difference between `as` and `as?` in Kotlin?",
        "answers": [
            {"text": "`as` performs a safe cast, and `as?` throws an exception on failure.", "correct": false},
            {"text": "`as` casts and throws an exception on failure, while `as?` returns null on failure.", "correct": true},
            {"text": "`as` and `as?` are interchangeable.", "correct": false},
            {"text": "`as` is used for primitive types, and `as?` is used for objects.", "correct": false}
        ]
    },
    {
        "question": "Which function can be used to convert a Kotlin class to a human-readable string?",
        "answers": [
            {"text": "toHumanString()", "correct": false},
            {"text": "toString()", "correct": true},
            {"text": "stringify()", "correct": false},
            {"text": "serialize()", "correct": false}
        ]
    },
    {
        "question": "What does the `open` keyword in Kotlin do?",
        "answers": [
            {"text": "Declares a class or member as accessible only within its file.", "correct": false},
            {"text": "Allows a class or member to be overridden.", "correct": true},
            {"text": "Makes a class abstract.", "correct": false},
            {"text": "Seals the class, preventing further inheritance.", "correct": false}
        ]
    },
    {
        "question": "How can you safely cast a variable to a specific type in Kotlin?",
        "answers": [
            {"text": "Using the `is` operator.", "correct": false},
            {"text": "Using the `as?` operator.", "correct": true},
            {"text": "Using the `cast` function.", "correct": false},
            {"text": "Using the `toType` function.", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of overriding the `equals` method in Kotlin?",
        "answers": [
            {"text": "To customize the hash code of an object.", "correct": false},
            {"text": "To define structural equality for an object.", "correct": true},
            {"text": "To prevent comparison between objects.", "correct": false},
            {"text": "To define referential equality for an object.", "correct": false}
        ]
    },
    {
        "question": "What does the `protected` keyword do in Kotlin?",
        "answers": [
            {"text": "Restricts access to the same file only.", "correct": false},
            {"text": "Allows access within the class and its subclasses.", "correct": true},
            {"text": "Allows access from anywhere in the project.", "correct": false},
            {"text": "Prevents access to the member completely.", "correct": false}
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