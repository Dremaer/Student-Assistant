const questions = [
    {
        "question": "What is the purpose of the `init` block in Kotlin?",
        "answers": [
            {"text": "To define the main logic of a class.", "correct": false},
            {"text": "To initialize complex properties that cannot be initialized directly.", "correct": true},
            {"text": "To declare private methods in a class.", "correct": false},
            {"text": "To create companion objects.", "correct": false}
        ]
    },
    {
        "question": "Which keyword is used to declare a read-only property in Kotlin?",
        "answers": [
            {"text": "const", "correct": false},
            {"text": "val", "correct": true},
            {"text": "var", "correct": false},
            {"text": "readonly", "correct": false}
        ]
    },
    {
        "question": "How do you handle nullable types in Kotlin?",
        "answers": [
            {"text": "By using the `?` operator for nullable types.", "correct": true},
            {"text": "By declaring variables with the `null` keyword.", "correct": false},
            {"text": "By using the `?` operator only for primitive types.", "correct": false},
            {"text": "By adding the `nullable` keyword before the type.", "correct": false}
        ]
    },
    {
        "question": "What happens when you access a property marked with `lateinit` before initializing it?",
        "answers": [
            {"text": "It throws a KotlinNullPointerException.", "correct": false},
            {"text": "It throws an UninitializedPropertyAccessException.", "correct": true},
            {"text": "It returns a default value of null.", "correct": false},
            {"text": "The property is automatically initialized.", "correct": false}
        ]
    },
    {
        "question": "What is the correct way to define a primary constructor in Kotlin?",
        "answers": [
            {"text": "constructor Person(val firstName: String, val lastName: String)", "correct": false},
            {"text": "class Person(val firstName: String, val lastName: String)", "correct": true},
            {"text": "init Person(val firstName: String, val lastName: String)", "correct": false},
            {"text": "new Person(val firstName: String, val lastName: String)", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the `companion object` in Kotlin?",
        "answers": [
            {"text": "To create multiple instances of a class.", "correct": false},
            {"text": "To declare a shared object for a class, accessible without creating an instance.", "correct": true},
            {"text": "To declare private methods in a class.", "correct": false},
            {"text": "To replace inheritance in Kotlin classes.", "correct": false}
        ]
    },
    {
        "question": "What does the Elvis operator (`?:`) do in Kotlin?",
        "answers": [
            {"text": "Throws an exception if the left-hand value is null.", "correct": false},
            {"text": "Returns the left-hand value if it's not null; otherwise, returns the right-hand value.", "correct": true},
            {"text": "Assigns null to a variable if no value is provided.", "correct": false},
            {"text": "Forces the left-hand value to be non-null.", "correct": false}
        ]
    },
    {
        "question": "How do you define a class with a secondary constructor in Kotlin?",
        "answers": [
            {"text": "By using `constructor` as a keyword.", "correct": true},
            {"text": "By defining the constructor inside the `init` block.", "correct": false},
            {"text": "By creating a method with the name of the class.", "correct": false},
            {"text": "By using the `override` keyword.", "correct": false}
        ]
    },
    {
        "question": "What is a singleton object in Kotlin?",
        "answers": [
            {"text": "An object with a single property.", "correct": false},
            {"text": "An object with a single instance that is created using the `object` keyword.", "correct": true},
            {"text": "A class that cannot be instantiated.", "correct": false},
            {"text": "A function that returns a single value.", "correct": false}
        ]
    },
    {
        "question": "What does the `by lazy` keyword do in Kotlin?",
        "answers": [
            {"text": "Declares a property that is initialized when accessed for the first time.", "correct": true},
            {"text": "Declares a property that can be null.", "correct": false},
            {"text": "Declares a read-only variable.", "correct": false},
            {"text": "Declares a private property.", "correct": false}
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