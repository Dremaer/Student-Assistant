const questions = [
    {
        "question": "What is the main feature of an `enum` class in Kotlin?",
        "answers": [
            {"text": "It represents a collection of related constants.", "correct": true},
            {"text": "It allows for runtime modifications to constants.", "correct": false},
            {"text": "It can be extended to other classes.", "correct": false},
            {"text": "It cannot have custom methods or properties.", "correct": false}
        ]
    },
    {
        "question": "How do you define a method in an `enum` class?",
        "answers": [
            {"text": "Directly within the class body.", "correct": true},
            {"text": "Using a companion object.", "correct": false},
            {"text": "As a static method.", "correct": false},
            {"text": "Enum classes cannot have methods.", "correct": false}
        ]
    },
    {
        "question": "Which method is automatically provided by all `enum` classes?",
        "answers": [
            {"text": "`values()` and `valueOf()`", "correct": true},
            {"text": "`getAll()` and `findValue()`", "correct": false},
            {"text": "`toString()` only", "correct": false},
            {"text": "`clone()` and `equals()`", "correct": false}
        ]
    },
    {
        "question": "What does the following code output?<br><br>kotlin<br>enum class Direction { NORTH, SOUTH, WEST, EAST }<br>println(Direction.NORTH.ordinal)<br>",
        "answers": [
            {"text": "1", "correct": false},
            {"text": "0", "correct": true},
            {"text": "NORTH", "correct": false},
            {"text": "Error", "correct": false}
        ]
    },
    {
        "question": "What is a `data` class in Kotlin?",
        "answers": [
            {"text": "A class that automatically generates equals, hashCode, and toString methods.", "correct": true},
            {"text": "A class that cannot be inherited.", "correct": false},
            {"text": "A class used only for serialization.", "correct": false},
            {"text": "A class with immutable properties only.", "correct": false}
        ]
    },
    {
        "question": "Which function in a `data` class allows copying an object with some properties modified?",
        "answers": [
            {"text": "`toMap()`", "correct": false},
            {"text": "`clone()`", "correct": false},
            {"text": "`copy()`", "correct": true},
            {"text": "`duplicate()`", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of `UByte` in Kotlin?",
        "answers": [
            {"text": "To represent an unsigned 8-bit integer.", "correct": true},
            {"text": "To store large positive integers.", "correct": false},
            {"text": "To ensure values are always positive and floating-point.", "correct": false},
            {"text": "To support signed integers only.", "correct": false}
        ]
    },
    {
        "question": "How can you define a `Pair` in Kotlin?",
        "answers": [
            {"text": "`val pair = Pair(1, \"two\")`", "correct": true},
            {"text": "`val pair = 1 : \"two\"`", "correct": false},
            {"text": "`val pair = 1 -> \"two\"`", "correct": false},
            {"text": "`val pair = [1, \"two\"]`", "correct": false}
        ]
    },
    {
        "question": "What is the output of the following?<br><br>data class Person(val name: String, val age: Int)<br>val (name, _) = Person(\"Alice\", 30)<br>println(name)<br>",
        "answers": [
            {"text": "Alice", "correct": true},
            {"text": "30", "correct": false},
            {"text": "Error", "correct": false},
            {"text": "null", "correct": false}
        ]
    },
    {
        "question": "What does the `toUByte()` function in Kotlin do?",
        "answers": [
            {"text": "Converts a signed integer to an unsigned byte.", "correct": true},
            {"text": "Converts a floating-point number to a byte.", "correct": false},
            {"text": "Converts a string to a byte array.", "correct": false},
            {"text": "Converts an unsigned byte to a signed byte.", "correct": false}
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