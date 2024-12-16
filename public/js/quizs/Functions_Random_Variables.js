const questions = [
    {
        "question": "What does Theorem 7.1 describe in the context of random variables?",
        "answers": [
            {"text": "The relationship between independent random variables.", "correct": false},
            {"text": "How to transform random variables.", "correct": true},
            {"text": "The mean and variance of random variables.", "correct": false},
            {"text": "Continuous random variable definitions.", "correct": false}
        ]
    },
    {
        "question": "What is the outcome of transforming the random variable Y=2X-1 where X has the probability distribution f(x) = 1/3, x=1,2,3?",
        "answers": [
            {"text": "Y=1,3,5.", "correct": true},
            {"text": "Y=−1,0,1.", "correct": false},
            {"text": "Y=3,5,7.", "correct": false},
            {"text": "None of the above.", "correct": false}
        ]
    },
    {
        "question": "In a geometric random variable, what happens when Y=X^2 is calculated?",
        "answers": [
            {"text": "The distribution remains the same.", "correct": false},
            {"text": "The probabilities are squared.", "correct": false},
            {"text": "A new probability distribution is derived.", "correct": true},
            {"text": "No transformation is required.", "correct": false}
        ]
    },
    {
        "question": "What does Theorem 7.2 primarily address?",
        "answers": [
            {"text": "Transformations of dependent variables.", "correct": false},
            {"text": "Properties of multinomial distributions.", "correct": false},
            {"text": "Transformations of random variables under integration.", "correct": true},
            {"text": "Joint distributions of independent variables.", "correct": false}
        ]
    },
    {
        "question": "What is the joint probability of Y1 = X1 + X2 and Y2 = X1/(X1 + X2)?",
        "answers": [
            {"text": "By proving f(Y1,Y2)=f(Y1)f(y2)", "correct": true},
            {"text": "Using the mean of X1 and X2", "correct": false},
            {"text": "By assuming normal distribution.", "correct": false},
            {"text": "It is not possible to show independence.", "correct": false}
        ]
    },
    {
        "question": "What is the transformed variable Y = X^2 if X has f(x) = 2(x+1)/9,-1<x<2?",
        "answers": [
            {"text": "A new distribution is calculated using f(Y)", "correct": true},
            {"text": "The range of X is halves", "correct": false},
            {"text": "f(Y) = f(X)", "correct": false},
            {"text": "No changes occur.", "correct": false}
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