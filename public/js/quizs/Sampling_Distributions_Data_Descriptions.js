const questions = [
  
    {
        "question": "What is a random sample?",
        "answers": [
            {"text": "A sample where every observation is biased.", "correct": false},
            {"text": "A sample where observations are made independently and at random.", "correct": true},
            {"text": "A sample chosen to match the population mean.", "correct": false},
            {"text": "A sample always larger than the population size.", "correct": false}
        ]
    },
    {
        "question": "Which statistic is used to measure the central tendency of a sample?",
        "answers": [
            {"text": "Sample mean", "correct": true},
            {"text": "Sample variance", "correct": false},
            {"text": "Sample range", "correct": false},
            {"text": "Sample standard deviation", "correct": false}
        ]
    },
    {
        "question": "What does the Central Limit Theorem (CLT) state?",
        "answers": [
            {"text": "The sum of a large number of random variables becomes constant.", "correct": false},
            {"text": "The standard deviation decreases for small sample sizes.", "correct": false},
            {"text": "The mean and variance of a population are always equal.", "correct": false},
            {"text": "The sampling distribution of the mean approaches a normal distribution as the sample size increases.", "correct": true},
        ]
    },
    {
        "question": "Which of the following describes the sampling distribution of the sample mean 𝑋ˉ?",
        "answers": [
            {"text": "It has the same mean as the population mean.", "correct": true},
            {"text": "It has a larger variance than the population variance.", "correct": false},
            {"text": "It is always skewed regardless of sample size.", "correct": false},
            {"text": "It follows a Poisson distribution.", "correct": false}
        ]
    },
    {
        "question": "In the Student's t-distribution, what happens as the sample size n approaches infinity?",
        "answers": [
            {"text": "The t-distribution becomes the standard normal distribution.", "correct": true},
            {"text": "The t-distribution remains unchanged.", "correct": false},
            {"text": "The variance of the t-distribution increases.", "correct": false},
            {"text": "The t-distribution becomes skewed.", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of a chi-squared distribution?",
        "answers": [
            {"text": "To test the equality of two means.", "correct": false},
            {"text": "To approximate probabilities for large samples.", "correct": false},
            {"text": "To test variance or standard deviation of a population.", "correct": true},
            {"text": "To determine the population median.", "correct": false}
        ]
    },
    {
        "question": "What is the sampling distribution of the difference between two means used for?",
        "answers": [
            {"text": "To estimate the variance of a single population.", "correct": false},
            {"text": "To calculate the chi-squared value.", "correct": false},
            {"text": "To measure standard deviation within a single sample.", "correct": false},
            {"text": "To compare means from two independent populations.", "correct": true}
        ]
    },
    {
        "question": "What does a quantile plot tell us about the data?",
        "answers": [
            {"text": "Whether the data follows a Poisson distribution.", "correct": false},
            {"text": "The range of the sample data.", "correct": false},
            {"text": "Whether the data is normally distributed.", "correct": true},
            {"text": "The mode of the sample data.", "correct": false}
        ]
    },
    {
        "question": "In the Central Limit Theorem, a sample size of n≥30 is considered sufficient because:",
        "answers": [
            {"text": "It reduces the sample variance to zero.", "correct": false},
            {"text": "It ensures that the sampling distribution is approximately normal.", "correct": true},
            {"text": "It eliminates all outliers.", "correct": false},
            {"text": "It minimizes the population mean.", "correct": false}
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