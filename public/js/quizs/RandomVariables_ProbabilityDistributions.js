const questions = [
    {
        "question":"What is a random variable?",
        "answers": [
            {"text": "A single outcome of an experiment", "correct": false},
            {"text": "A variable that assigns numerical values to outcomes of an experiment", "correct": true},
            {"text": "A continuous measurement", "correct": false},
            {"text": "A fixed numerical value", "correct": false}
        ]
    },
    {
        "question":"What is the difference between discrete and continuous random variables?",
        "answers": [
            {"text": "Discrete variables take specific values; continuous variables take any value within an interval", "correct": true},
            {"text": "Discrete variables are always integers; continuous variables are not", "correct": false},
            {"text": "Discrete variables are dependent; continuous variables are independent", "correct": false},
            {"text": "There is no difference", "correct": false}
        ]
    },
    {
        "question":"What does a probability mass function (PMF) represent?",
        "answers": [
            {"text": "The probability of a random variable taking a specific value", "correct": true},
            {"text": "The sum of probabilities over all outcomes", "correct": false},
            {"text": "The integral of probabilities over a range", "correct": false},
            {"text": "A distribution of continuous variables", "correct": false}
        ]
    },
    {
        "question":"Which of the following is an example of a continuous random variable?",
        "answers": [
            {"text": "Number of defective items in a batch", "correct": false},
            {"text": "The time taken for a task to complete", "correct": true},
            {"text": "Number of heads in coin tosses", "correct": false},
            {"text": "Sum of dice rolls", "correct": false}
        ]
    },
    {
        "question": "What is the cumulative distribution function (CDF)?",
        "answers": [
            {"text": " A function that gives the cumulative probability of X≤x", "correct": true},
            {"text": " A function showing the probability of each outcome", "correct": false},
            {"text": "A histogram of probabilities", "correct": false},
            {"text": "The mean of a random variable", "correct": false}
        ]
    },
    {
        "question":  "What is the property of a probability density function (PDF)?",
        "answers": [
            {"text": " It sums to 1 over all values", "correct": false},
            {"text": "It integrates to 1 over all values (Correct)", "correct": true},
            {"text": "It is always constant", "correct": false},
            {"text": "It applies only to discrete variables", "correct": false}
        ]
    },
    {
        "question": "What is the expectation of a random variable?",
        "answers": [
            {"text": "The most likely value", "correct": false},
            {"text": "The average value weighted by probabilities", "correct": true},
            {"text": "The median value", "correct": false},
            {"text": "The mode of the variable", "correct": false}
        ]
    },
    {
        "question": "Which random variable describes a success/failure experiment?",
        "answers": [
            {"text": "Binomial random variable", "correct": false},
            {"text": "Bernoulli random variable (Correct)", "correct": true},
            {"text": "Poisson random variable", "correct": false},
            {"text": " Normal random variable", "correct": false}
        ]
    },

    {
        "question": "What is the key feature of the Bernoulli distribution?",
        "answers": [
            {"text": "Multiple outcomes with varying probabilities", "correct": false},
            {"text": "Two possible outcomes", "correct": true},
            {"text": "Continuous probability values", "correct": false},
            {"text": "A fixed range of outcomes", "correct": false}
        ]
    },

    {
        "question": "How do you calculate variance for a random variable?",
        "answers": [
            {"text": "E[X^2]−E[X]^2", "correct": true},
            {"text": "E[X]⋅E[X]", "correct": false},
            {"text": "∑P(X)⋅X", "correct": false},
            {"text": "∫∫f(x)dx", "correct": false}
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