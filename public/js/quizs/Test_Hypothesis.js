const questions = [
  
    {
        "question": "What is the null hypothesis 𝐻0?",
        "answers": [
            {"text": "A hypothesis we reject if the data is insufficient.", "correct": false},
            {"text": "The probability of a Type II error.", "correct": false},
            {"text": "The conclusion we always accept.", "correct": false},
            {"text": "A hypothesis that opposes the alternative hypothesis 𝐻1.", "correct": true}
        ]
    },
    {
        "question": "What is a Type I error in hypothesis testing?",
        "answers": [
            {"text": "Rejecting 𝐻0 when 𝐻0 is true.", "correct": true},
            {"text": "Failing to reject H0 when H0 is false.", "correct": false},
            {"text": "Accepting H1 when it is false.", "correct": false},
            {"text": "Rejecting H1 when H1 is true.", "correct": false}
        ]
    },
    {
        "question": "How do we define a P-value?",
        "answers": [
            {"text": "The probability of making a Type II error.", "correct": false},
            {"text": "The confidence level of the test.", "correct": false},
            {"text": "The smallest level of significance at which 𝐻0 can be rejected.", "correct": true},
            {"text": "The observed sample mean.", "correct": false}
        ]
    },
    {
        "question": "Which test is used for a single mean when the variance is known?",
        "answers": [
            {"text": "Z-test", "correct": true},
            {"text": "T-test", "correct": false},
            {"text": "Chi-squared test", "correct": false},
            {"text": "F-test", "correct": false}
        ]
    },
    {
        "question": "What is the critical region in hypothesis testing?",
        "answers": [
            {"text": "The area where H1 is accepted.", "correct": false},
            {"text": "The set of values that leads to the rejection of H0", "correct": true},
            {"text": "The region where H0 is always accepted.", "correct": false},
            {"text": "The P-value calculated for H1.", "correct": false}
        ]
    },
    {
        "question": "In a two-tailed test, what does the alternative hypothesis H1 state?",
        "answers": [
            {"text": "𝜇>𝜇0", "correct": false},
            {"text": "𝜇<𝜇0", "correct": false},
            {"text": "𝜇≠𝜇0", "correct": true},
            {"text": "𝜇>𝜇0", "correct": false}
        ]
    },
    {
        "question": "A manufacturer claims the mean lifetime of batteries is 8 years. A sample of 50 batteries has a mean of 7.8 years with a standard deviation of 0.5 years. Which hypothesis test applies at 𝛼=0.01?",
        "answers": [
            {"text": "Single mean test with variance unknown.", "correct": false},
            {"text": "Chi-squared test for variances.", "correct": false},
            {"text": "Two-sample proportion test.", "correct": false},
            {"text": "Single mean test with variance known (Z-test)", "correct": true}
        ]
    },
    {
        "question": "Which test compares two population means when variances are equal and unknown?",
        "answers": [
            {"text": "Z-test for two means", "correct": false},
            {"text": "Pooled two-sample T-test", "correct": true},
            {"text": "Chi-squared test", "correct": false},
            {"text": "F-test", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of a goodness-of-fit test?",
        "answers": [
            {"text": "To compare two proportions.", "correct": false},
            {"text": "To estimate the mean of a single sample.", "correct": false},
            {"text": "To test if a sample matches a theoretical distribution.", "correct": true},
            {"text": "To test for equality of two variances.", "correct": false}
        ]
    },
    {
        "question": "If a sample of 200 town voters has 120 favoring a proposal and a sample of 500 county voters has 240 favoring it, which test is appropriate to compare the proportions?",
        "answers": [
            {"text": "Single proportion test.", "correct": false},
            {"text": "Two-sample Z-test for proportions.", "correct": true},
            {"text": "Pooled T-test for means.", "correct": false},
            {"text": "Chi-squared test for goodness of fit.", "correct": false}
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
    window.location.href = "/quizs/quizs_probability";
});

startQuiz();