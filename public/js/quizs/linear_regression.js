const questions = [
    {
        "question": "What is the main purpose of linear regression?",
        "answers": [
            {"text": "Classify data into categories", "correct": false},
            {"text": "Predict the value of a target variable based on an input variable", "correct": true},
            {"text": "Cluster similar data points together", "correct": false},
            {"text": "Reduce the dimensionality of the data", "correct": false}
        ]
    },
    {
        "question": "Which of the following metrics measures the goodness of fit for a regression model?",
        "answers": [
            {"text": "Confusion Matrix", "correct": false},
            {"text": "Adjusted R-squared", "correct": true},
            {"text": "Mean Absolute Error", "correct": false},
            {"text": "F1 Score", "correct": false}
        ]
    },
    {
        "question": "What does the term 'residuals' refer to in linear regression?",
        "answers": [
            {"text": "The difference between predicted and actual values", "correct": true},
            {"text": "The slope of the regression line", "correct": false},
            {"text": "The intercept of the regression line", "correct": false},
            {"text": "The p-value of the independent variables", "correct": false}
        ]
    },
    {
        "question": "What does a p-value less than 0.05 in a regression model indicate?",
        "answers": [
            {"text": "The model is overfitting", "correct": false},
            {"text": "The null hypothesis is rejected", "correct": true},
            {"text": "The variable has no significant relationship with the target", "correct": false},
            {"text": "The residuals are normally distributed", "correct": false}
        ]
    },
    {
        "question": "What does multicollinearity in regression refer to?",
        "answers": [
            {"text": "High correlation between the target variable and independent variables", "correct": false},
            {"text": "High correlation among independent variables", "correct": true},
            {"text": "Low variance in the data", "correct": false},
            {"text": "Missing data in the dataset", "correct": false}
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