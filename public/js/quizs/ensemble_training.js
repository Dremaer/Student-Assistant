const questions = [
    {
        "question": "What is the main advantage of ensemble learning?",
        "answers": [
            {"text": "It requires less computational power.", "correct": false},
            {"text": "It combines multiple models to improve accuracy.", "correct": true},
            {"text": "It eliminates the need for data preprocessing.", "correct": false},
            {"text": "It performs well only with small datasets.", "correct": false}
        ]
    },
    {
        "question": "Which of the following is a characteristic of bagging in ensemble methods?",
        "answers": [
            {"text": "Uses different subsets of features for each model.", "correct": false},
            {"text": "Combines predictions from multiple models using voting or averaging.", "correct": true},
            {"text": "Uses sequential model building to correct errors.", "correct": false},
            {"text": "Reduces bias without affecting variance.", "correct": false}
        ]
    },
    {
        "question": "What is a key feature of boosting in ensemble learning?",
        "answers": [
            {"text": "Models are trained independently on random subsets of data.", "correct": false},
            {"text": "Models are built sequentially to correct previous errors.", "correct": true},
            {"text": "It requires a single strong learner.", "correct": false},
            {"text": "Predictions are based solely on majority voting.", "correct": false}
        ]
    },
    {
        "question": "Which algorithm is most commonly used in boosting?",
        "answers": [
            {"text": "Random Forest", "correct": false},
            {"text": "Adaboost", "correct": true},
            {"text": "Naïve Bayes", "correct": false},
            {"text": "k-Nearest Neighbors", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the 'learning rate' in boosting algorithms?",
        "answers": [
            {"text": "To determine the number of base models.", "correct": false},
            {"text": "To control the contribution of each base model.", "correct": true},
            {"text": "To reduce computational complexity.", "correct": false},
            {"text": "To ensure all base models are equally weighted.", "correct": false}
        ]
    },
    {
        "question": "What does overfitting in an ensemble model typically result in?",
        "answers": [
            {"text": "Better performance on unseen data.", "correct": false},
            {"text": "Increased complexity without improving accuracy.", "correct": true},
            {"text": "Faster training time.", "correct": false},
            {"text": "Reduced training data requirements.", "correct": false}
        ]
    },
    {
        "question": "In random forests, how are individual trees trained?",
        "answers": [
            {"text": "Sequentially, correcting errors from previous trees.", "correct": false},
            {"text": "On random subsets of data and features.", "correct": true},
            {"text": "Using the entire dataset with all features.", "correct": false},
            {"text": "Only with categorical variables.", "correct": false}
        ]
    },
    {
        "question": "What is the key difference between bagging and boosting?",
        "answers": [
            {"text": "Bagging focuses on variance reduction, while boosting focuses on bias reduction.", "correct": true},
            {"text": "Bagging uses sequential training, while boosting uses parallel training.", "correct": false},
            {"text": "Boosting reduces variance, while bagging reduces bias.", "correct": false},
            {"text": "Bagging and boosting are identical methods.", "correct": false}
        ]
    },
    {
        "question": "Which metric is commonly used to evaluate ensemble models?",
        "answers": [
            {"text": "Mean Squared Error", "correct": false},
            {"text": "F1 Score", "correct": false},
            {"text": "AUC-ROC", "correct": false},
            {"text": "All of the above", "correct": true}
        ]
    },
    {
        "question": "Why is random sampling used in bagging?",
        "answers": [
            {"text": "To reduce the dataset size.", "correct": false},
            {"text": "To improve the generalization of the model.", "correct": true},
            {"text": "To increase the training time.", "correct": false},
            {"text": "To ensure identical training datasets.", "correct": false}
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