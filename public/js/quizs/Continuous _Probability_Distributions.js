const questions = [
  
    {
        "question": "What is the probability density function (PDF) of a continuous uniform distribution over [a,b]?",
        "answers": [
            {"text": "f(x)= 1/(b-a),a≤x≤b", "correct": true},
            {"text": "f(x)= (b-a)/x", "correct": false},
            {"text": "f(x)= e^-x", "correct": false},
            {"text": "f(x) = x^2", "correct": false}
        ]
    },
    {
        "question": "Which of the following is not a property of the normal distribution?",
        "answers": [
            {"text": "It is symmetric about the mean.", "correct": false},
            {"text": "The total area under the curve is 1.", "correct": false},
            {"text": "The mode occurs at x=μ.", "correct": false},
            {"text": "It is always skewed to the right.", "correct": true}
        ]
    },
    {
        "question": "What is the standard normal random variable Z defined as?",
        "answers": [
            {"text": "Z = (X−μ)/σ", "correct": true},
            {"text": "Z = X + μ", "correct": false},
            {"text": "Z = σ − X", "correct": false},
            {"text": "Z = X/μ", "correct": false}
        ]
    },
    {
        "question": "What is the probability that a normal random variable X with 𝜇=50 and σ=10 assumes a value between 45 and 62?",
        "answers": [
            {"text": "Use the cumulative standard normal table with Z = (X−μ)/σ", "correct": true},
            {"text": "Directly calculate using X=σZ+μ.", "correct": false},
            {"text": "Approximate using the Poisson distribution.", "correct": false},
            {"text": "The probability cannot be determined.", "correct": false}
        ]
    },
    {
        "question": "When is the normal distribution used to approximate the binomial distribution?",
        "answers": [
            {"text": "When n is small and p is close to 1.", "correct": false},
            {"text": "When n is large and p is small or close to 0.5.", "correct": true},
            {"text": "When the number of trials is infinite.", "correct": false},
            {"text": "When p equals 0.", "correct": false}
        ]
    },
    {
        "question": "The time T until the first event occurs in a Poisson process follows which distribution?",
        "answers": [
            {"text": "Gamma distribution", "correct": false},
            {"text": "Uniform distribution", "correct": false},
            {"text": "Exponential distribution", "correct": true},
            {"text": "Chi-squared distribution", "correct": false}
        ]
    },
    {
        "question": "For an exponential distribution with a mean of 4 years, what is the probability P(T>6)?",
        "answers": [
            {"text": "P(T>6) = e^-3/2", "correct": true},
            {"text": "P(T>6) = e^-2/3", "correct": false},
            {"text": "P(T>6) =1 - e^-2/3", "correct": false},
            {"text": "P(T>6) = 1/6", "correct": false}
        ]
    },
    {
        "question": "Which distribution is a special case of the gamma distribution when k= n/2 and θ=2?",
        "answers": [
            {"text": "Uniform distribution", "correct": false},
            {"text": "Chi-squared distribution", "correct": true},
            {"text": "Poisson distribution", "correct": false},
            {"text": "Normal distribution", "correct": false}
        ]
    },
    {
        "question": "What is the relationship between the Poisson and exponential distributions?",
        "answers": [
            {"text": "Poisson distribution models the number of events, and exponential distribution models the time between events.", "correct": true},
            {"text": "Both are identical distributions.", "correct": false},
            {"text": "Exponential distribution approximates the Poisson distribution for large events.", "correct": false},
            {"text": "They are unrelated.", "correct": false}
        ]
    },
    {
        "question": "What is the probability that a random variable X, following a normal distribution with μ=300 and σ=50, takes a value greater than 362?",
        "answers": [
            {"text": "Approximate using the Poisson process.", "correct": false},
            {"text": "Calculate directly using e^-x", "correct": false},
            {"text": "Use P(X > 362)=(362-300)/500.", "correct": false},
            {"text": "Convert to standard normal Z and use the cumulative table.", "correct": true}
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