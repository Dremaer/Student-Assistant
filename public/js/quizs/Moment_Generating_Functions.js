const questions = [
  
    {
        "question": "What is a moment of a random variable X?",
        "answers": [
            {"text": "A function that generates probabilities.", "correct": false},
            {"text": "The variance of X.", "correct": false},
            {"text": "The integral of the cumulative distribution.", "correct": false},
            {"text": "An expected value of X^n, where n is a positive integer", "correct": true}
        ]
    },
    {
        "question": "What is the moment-generating function (MGF) of a random variable X?",
        "answers": [
            {"text": "Mx(t) = E[X]", "correct": false},
            {"text": "Mx(t) = E[e^tX]", "correct": true},
            {"text": "Mx(t) = e^tX", "correct": false},
            {"text": "Mx(t) = E[X^2]", "correct": false}
        ]
    },
    {
        "question": "For a discrete uniform random variable X over x=1,2,…,k, what is its MGF Mx(t)?",
        "answers": [
            {"text": "Mx(t) = 1/k ∑k x=1 (e^tx). ", "correct": true},
            {"text": "Mx(t) = e^tk", "correct": false},
            {"text": "Mx(t) = t^k", "correct": false},
            {"text": "Mx(t) = k * e^t", "correct": false}
        ]
    },
    {
        "question": "What is the MGF of a binomial random variable X ~ Binomial(n,p)?",
        "answers": [
            {"text": "Mx(t) = e^nt", "correct": false},
            {"text": "Mx(t) = (1-t)^n", "correct": false},
            {"text": "Mx(t) = p^n*e^qt", "correct": false},
            {"text": "Mx(t) = (pe^t + q)^n", "correct": true}
        ]
    },
    {
        "question": "Using the MGF, what are the mean (μ) and variance (σ^2) of a binomial random variable X ~ Binomial(n,p)? ",
        "answers": [
            {"text": "μ=n,σ^2 = np.", "correct": false},
            {"text": "μ=p,σ^2 = nq.", "correct": false},
            {"text": "μ=np,σ^2 = np(1−p)", "correct": true},
            {"text": " 𝜇=𝑛^2𝑝, σ^2=p(1−p).", "correct": false}
        ]
    },
    {
        "question": "What is the significance of the moment-generating function (MGF)?",
        "answers": [
            {"text": "It generates the cumulative distribution function (CDF).", "correct": false},
            {"text": "It can be used to derive all moments of a random variable.", "correct": true},
            {"text": "It determines the variance only.", "correct": false},
            {"text": "It generates the mode of the random variable.", "correct": false}
        ]
    },
    {
        "question": "The MGF of a chi-squared distribution with v degrees of freedom is:",
        "answers": [
            {"text": "Mx(t) = v*e^-t", "correct": false},
            {"text": "Mx(t) = e^vt", "correct": false},
            {"text": "Mx(t) = 1-vt", "correct": false},
            {"text": "Mx(t) = (1-2t)^(-v/2)", "correct": true}
        ]
    },
    {
        "question": "Which of the following is true about moment-generating functions?",
        "answers": [
            {"text": "The MGF always exists for all random variables.", "correct": false},
            {"text": "The MGF is only used for continuous random variables.", "correct": false},
            {"text": "The MGF uniquely determines the probability distribution.", "correct": true},
            {"text": "The MGF generates the variance directly.", "correct": false}
        ]
    },
    {
        "question": "What condition must hold for the moment-generating function to exist?",
        "answers": [
            {"text": "The random variable must be discrete.", "correct": false},
            {"text": "The random variable must be normally distributed.", "correct": false},
            {"text": "The mean of the random variable must be zero.", "correct": false},
            {"text": "The sum or integral of E[e^tX] must converge.", "correct": true}
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