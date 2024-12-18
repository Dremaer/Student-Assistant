const questions = [
    {
        "question": "What is a key advantage of object-oriented decomposition in software development?",
        "answers": [
            {"text": "Reduces the size of code", "correct": false},
            {"text": "Enhances software flexibility and reusability", "correct": true},
            {"text": "Minimizes hardware dependencies", "correct": false},
            {"text": "Increases execution speed", "correct": false}
        ]
    },
    {
        "question": "Which of the following is a fundamental data type in C++?",
        "answers": [
            {"text": "Array", "correct": false},
            {"text": "Struct", "correct": false},
            {"text": "Pointer", "correct": false},
            {"text": "Float", "correct": true}
        ]
    },
    {
        "question": "In the context of system development life cycle, what does 'verification' involve?",
        "answers": [
            {"text": "Debugging and testing the system", "correct": false},
            {"text": "Ensuring correctness through proofs and testing", "correct": true},
            {"text": "Writing error-free code", "correct": false},
            {"text": "Optimizing system performance", "correct": false}
        ]
    },
    {
        "question": "What is the main goal of encapsulation in C++?",
        "answers": [
            {"text": "Simplify syntax", "correct": false},
            {"text": "Separate data from functions", "correct": false},
            {"text": "Hide internal implementation details", "correct": true},
            {"text": "Optimize memory usage", "correct": false}
        ]
    },
    {
        "question": "Which algorithm operates by dividing the search range in half repeatedly until the target is found?",
        "answers": [
            {"text": "Quick Sort", "correct": false},
            {"text": "Binary Search", "correct": true},
            {"text": "Linear Search", "correct": false},
            {"text": "Depth-First Search", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of Selection Sort in the worst case?",
        "answers": [
            {"text": "O(n)", "correct": false},
            {"text": "O(n^2)", "correct": true},
            {"text": "O(log n)", "correct": false},
            {"text": "O(n log n)", "correct": false}
        ]
    },
    {
        "question": "Which of the following is not a feature of abstract data types (ADT)?",
        "answers": [
            {"text": "Separation of specification and implementation", "correct": false},
            {"text": "Support for encapsulation", "correct": false},
            {"text": "Dependency on hardware implementation", "correct": true},
            {"text": "Defining operations on data", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the swap function in the selection sort algorithm?",
        "answers": [
            {"text": "Adds an element to the end of an array", "correct": false},
            {"text": "Replaces the largest value with the smallest value", "correct": false},
            {"text": "Exchanges two elements in the array", "correct": true},
            {"text": "Removes duplicate elements", "correct": false}
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
    window.location.href = "/quizs/quiz_data";
});

startQuiz();