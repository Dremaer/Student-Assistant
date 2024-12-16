const questions = [
    {
        "question": "What is the density function of a discrete uniform random variable X over the range x1,x2,x3....xn?",
        "answers": [
            {"text": "P(X=x)=1, for all x", "correct": false},
            {"text": "p(X=x)=1/n,for x =x1,x2,x3....xn", "correct": true},
            {"text": "p(X=x)=n", "correct": false},
            {"text": "p(X=x)=0,for all x", "correct": false}
        ]
    },
    {
        "question": "Which of the following is not a condition for a Bernoulli process?",
        "answers": [
            {"text": "Each trial results in a success or failure.", "correct": false},
            {"text": "The probability of success changes from trial to trial.", "correct": true},
            {"text": "The trials are independent.", "correct": false},
            {"text": "The experiment consists of repeated trials.", "correct": false}
        ]
    },
    {
        "question": "What is the expected value and variance of a binomial random variable 𝑋 with n trials and success probability p?",
        "answers": [
            {"text": "E(X)=np,Var(X)=np(1-p)", "correct": true},
            {"text": "E(X)=p,Var(X)=np", "correct": false},
            {"text": "E(X)=n(1-p),Var(X)=p(1-p)", "correct": false},
            {"text": "E(X)=1-p,Var(X)=n", "correct": false}
        ]
    },
    {
        "question": "In a hypergeometric distribution, what distinguishes it from a binomial distribution?",
        "answers": [
            {"text": "Trials are independent.", "correct": false},
            {"text": "Sampling is done with replacement.", "correct": false},
            {"text": "Sampling is done without replacement.", "correct": true},
            {"text": "The probability of success is constant.", "correct": false}
        ]
    },
    {
        "question": "What is the probability of exactly 3 defectives in a hypergeometric experiment where a sample of 10 is drawn from a population of 5000, of which 1000 are defective?",
        "answers": [
            {"text": "Use P(X=3) from the binomial distribution.", "correct": true},
            {"text": "Use P(X=3) from the hypergeometric formula.", "correct": false},
            {"text": "Use P(X=3) from the Poisson distribution.", "correct": false},
            {"text": "Cannot be calculated without replacement.", "correct": false}
        ]
    },
    {
        "question": "What is a defining property of the Poisson process?",
        "answers": [
            {"text": "The events depend on each other.", "correct": false},
            {"text": "The total probability sums to more than 1.", "correct": false},
            {"text": "The process cannot handle continuous distributions.", "correct": false},
            {"text": "The probability of one event occurring in a short interval is independent of others.", "correct": true}
        ]
    },
    {
        "question": "In a manufacturing process, 1 out of 1000 items is defective. What is the probability that fewer than 7 defectives are found in a sample of 8000 items?",
        "answers": [
            {"text": "Approximate using the binomial distribution.", "correct": false},
            {"text": "Use a hypergeometric approach.", "correct": false},
            {"text": "Calculate using the uniform distribution.", "correct": false},
            {"text": "Approximate using the Poisson distribution.", "correct": true}
        ]
    },
    {
        "question": "What is the relationship between a geometric and a negative binomial distribution?",
        "answers": [
            {"text": "", "correct": true},
            {"text": "", "correct": false},
            {"text": "", "correct": false},
            {"text": "", "correct": false}
        ]
    },
    {
        "question": "What is the expected number of successes in a negative binomial distribution where p=0.5 and k=4?",
        "answers": [
            {"text": "4", "correct": false},
            {"text": "6", "correct": false},
            {"text": "8", "correct": true},
            {"text": "Cannot be calculated without variance.", "correct": false}
        ]
    },
    {
        "question": "How is the Poisson distribution used to approximate the binomial distribution?",
        "answers": [
            {"text": "", "correct": true},
            {"text": "", "correct": false},
            {"text": "", "correct": false},
            {"text": "", "correct": false}
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