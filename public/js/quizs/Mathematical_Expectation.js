const questions = [
    {
        "question": "What is the expected value of a random variable?",
        "answers": [
            {"text": "The most frequent value in the distribution.", "correct": false},
            {"text": "A measure of the central tendency weighted by probabilities.", "correct": true},
            {"text": "The midpoint of the probability range.", "correct": false},
            {"text": "The spread of values around the mean.", "correct": false}
        ]
    },
    {
        "question": "What is the expected value of the number of good components in a sample of 3 from a lot containing 4 good and 3 defective components?",
        "answers": [
            {"text": "3", "correct": false},
            {"text": "2", "correct": true},
            {"text": "1", "correct": false},
            {"text": "4", "correct": false}
        ]
    },
    {
        "question": "How is the expected commission calculated for a salesperson with two independent appointments, given 70% and 40% chances of success with $1000 and $1500 commissions?",
        "answers": [
            {"text": "(0.7×1000)+(0.4×1500).", "correct": true},
            {"text": "0.7×0.4×(1000+1500).", "correct": false},
            {"text": "The average of the two probabilities.", "correct": false},
            {"text": "The higher probability times the sum of commissions.", "correct": false}
        ]
    },
    {
        "question": "For g(X) = 2X -1, where X represents the number of cars passing through a car wash with given probabilities, how do you find the attendant's expected earnings?",
        "answers": [
            {"text": "Multiply the expected value of X by 2 and subtract 1.", "correct": false},
            {"text": "Calculate ∑g(X)F(X).", "correct": true},
            {"text": "Use only the most likely value of X.", "correct": false},
            {"text": "Take the average of 𝑋 and g(X).", "correct": false}
        ]
    },
    {
        "question": "What is variance in the context of random variables?",
        "answers": [
            {"text": "A measure of the central tendency.", "correct": false},
            {"text": "A measure of the spread or dispersion of a distribution.", "correct": true},
            {"text": "Always equal to the mean.", "correct": false},
            {"text": "The square root of the probability.", "correct": false}
        ]
    },
    {
        "question": "Using Chebyshev's Theorem, what can be said about the probability of X deviating from the mean by 3 standard deviations?",
        "answers": [
            {"text": "It is exactly 0.1.", "correct": false},
            {"text": "It is always less than 0.05.", "correct": false},
            {"text": "It cannot be calculated without the exact distribution.", "correct": false},
            {"text": "It is at least 1-1/9.", "correct": true}
        ]
    },
    {
        "question": "If 𝑋 and Y are independent random variables, what is E(XY)?",
        "answers": [
            {"text": "E(X) + E(Y)", "correct": false},
            {"text": "E(X + Y)", "correct": false},
            {"text": "E(X) * E(Y)", "correct": true},
            {"text": "Undefined without covariance.", "correct": false}
        ]
    },
    {
        "question": "For a random variable X with mean μ=8 and variance 𝜎^2=9, what is f(∣X−8∣≥6) using Chebyshev's inequality?",
        "answers": [
            {"text": "Exactly 1/3.", "correct": false},
            {"text": "Always 0.5.", "correct": false},
            {"text": "Cannot be determined without a specific distribution.", "correct": false},
            {"text": "At most 1/4.", "correct": true}
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