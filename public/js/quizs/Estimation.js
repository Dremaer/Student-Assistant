const questions = [
  
    {
        "question": "What is point estimation?",
        "answers": [
            {"text": "A method to estimate a population parameter using a single value.", "correct": true},
            {"text": "A method to calculate an interval around a statistic.", "correct": false},
            {"text": "A hypothesis testing method.", "correct": false},
            {"text": "A method to compare variances.", "correct": false}
        ]
    },
    {
        "question": "Which of the following is an example of a point estimator?",
        "answers": [
            {"text": "Confidence interval for the mean.", "correct": false},
            {"text": "Sample mean xˉas an estimate of the population mean 𝜇", "correct": true},
            {"text": "Tolerance limit for a parameter.", "correct": false},
            {"text": "Prediction interval for future observations.", "correct": false}
        ]
    },
    {
        "question": "What is an interval estimate?",
        "answers": [
            {"text": "A single value used to estimate a parameter.", "correct": false},
            {"text": "An interval constructed to include the population parameter with a certain confidence level.", "correct": true},
            {"text": "The exact value of a population parameter.", "correct": false},
            {"text": "The mean of the population variance.", "correct": false}
        ]
    },
    {
        "question": "When is the t-distribution used instead of the normal distribution?",
        "answers": [
            {"text": "When the population variance 𝜎^2 is known.", "correct": false},
            {"text": "When the sample size is large.", "correct": false},
            {"text": "When the population variance is unknown and the sample size is small.", "correct": true},
            {"text": "When the data is not normally distributed.", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of a prediction interval?",
        "answers": [
            {"text": "To predict the future value of a single observation.", "correct": true},
            {"text": "To estimate the variance of the population.", "correct": false},
            {"text": "To calculate the confidence level of a sample mean.", "correct": false},
            {"text": "To test the equality of two variances.", "correct": false}
        ]
    },
    {
        "question": "What is the formula for the sample proportion p in a binomial experiment?",
        "answers": [
            {"text": "p = x/n", "correct": true},
            {"text": "p = n/x", "correct": false},
            {"text": "p = x/(n-1)", "correct": false},
            {"text": "p = n*x", "correct": false}
        ]
    },
    {
        "question": "What is the maximum likelihood estimator (MLE)?",
        "answers": [
            {"text": "An estimator that minimizes the variance of the sample mean.", "correct": false},
            {"text": "An estimator that provides a confidence interval for the mean.", "correct": false},
            {"text": "An estimator that guarantees unbiased estimates.", "correct": false},
            {"text": "An estimator that maximizes the probability of the observed sample data.", "correct": true}
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