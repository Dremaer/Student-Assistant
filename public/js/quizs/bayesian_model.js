const questions = [
    {
        "question": "What is the primary purpose of stratified sampling?",
        "answers": [
            {"text": "To randomly select data points without any structure", "correct": false},
            {"text": "To ensure each group in the data set is proportionally represented", "correct": true},
            {"text": "To divide the dataset into equal parts", "correct": false},
            {"text": "To reduce the size of the dataset", "correct": false}
        ]
    },
    {
        "question": "Which of the following is an advantage of rule induction?",
        "answers": [
            {"text": "Requires advanced programming knowledge to understand", "correct": false},
            {"text": "Provides an easy-to-understand framework for explaining classifications", "correct": true},
            {"text": "Can only be applied to numeric datasets", "correct": false},
            {"text": "Is the most computationally efficient algorithm", "correct": false}
        ]
    },
    {
        "question": "In the k-nearest neighbors (k-NN) algorithm, what happens if the value of k is too small?",
        "answers": [
            {"text": "The algorithm becomes insensitive to noise", "correct": false},
            {"text": "The algorithm overfits to the data", "correct": true},
            {"text": "The classification becomes less accurate", "correct": false},
            {"text": "The algorithm creates a complex model", "correct": false}
        ]
    },
    {
        "question": "What is the key difference between eager learners and lazy learners in machine learning?",
        "answers": [
            {"text": "Eager learners use less memory than lazy learners", "correct": false},
            {"text": "Lazy learners store all training data and wait until prediction time to make calculations", "correct": true},
            {"text": "Lazy learners build a model immediately", "correct": false},
            {"text": "Eager learners cannot handle missing data", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of cross-validation?",
        "answers": [
            {"text": "To train multiple models simultaneously", "correct": false},
            {"text": "To measure the model’s performance on unseen data", "correct": true},
            {"text": "To split the dataset into equal halves", "correct": false},
            {"text": "To identify and remove outliers", "correct": false}
        ]
    },
    {
        "question": "What does underfitting in a model indicate?",
        "answers": [
            {"text": "The model is too simple and fails to capture patterns in the data", "correct": true},
            {"text": "The model overgeneralizes and performs well on all datasets", "correct": false},
            {"text": "The model is too complex and overfits the training data", "correct": false},
            {"text": "The model uses too many training examples", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of a cost matrix in classification tasks?",
        "answers": [
            {"text": "To evaluate the accuracy of the model", "correct": false},
            {"text": "To represent the cost of different types of misclassifications", "correct": true},
            {"text": "To compare two models", "correct": false},
            {"text": "To generate new training data", "correct": false}
        ]
    },
    {
        "question": "Which metric is used to evaluate how well a model predicts positive outcomes?",
        "answers": [
            {"text": "Specificity", "correct": false},
            {"text": "Sensitivity", "correct": true},
            {"text": "Accuracy", "correct": false},
            {"text": "Precision", "correct": false}
        ]
    },
    {
        "question": "Why is feature scaling important for algorithms like k-NN?",
        "answers": [
            {"text": "To reduce the number of features", "correct": false},
            {"text": "To make sure all features contribute equally to the distance calculation", "correct": true},
            {"text": "To remove irrelevant features", "correct": false},
            {"text": "To improve computational speed", "correct": false}
        ]
    },
    {
        "question": "Which principle suggests choosing a simpler model when two models have similar accuracy?",
        "answers": [
            {"text": "Cross-validation", "correct": false},
            {"text": "Stratified Sampling", "correct": false},
            {"text": "Occam’s Razor", "correct": true},
            {"text": "Ensemble Learning", "correct": false}
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
    window.location.href = "/quizs/quizs_ml";
});

startQuiz();