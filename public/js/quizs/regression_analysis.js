const questions = [
    {
        "question": "What is the primary advantage of Support Vector Machines (SVM)?",
        "answers": [
            {"text": "Handles missing data well", "correct": false},
            {"text": "Robust to overfitting", "correct": true},
            {"text": "Suitable for only linear problems", "correct": false},
            {"text": "Requires no hyperparameters", "correct": false}
        ]
    },
    {
        "question": "What does a kernel function do in SVM?",
        "answers": [
            {"text": "Converts linear data to non-linear", "correct": true},
            {"text": "Reduces the size of the dataset", "correct": false},
            {"text": "Increases the margin size", "correct": false},
            {"text": "Removes noisy data points", "correct": false}
        ]
    },
    {
        "question": "Which parameter in SVM adjusts the trade-off between margin size and classification error?",
        "answers": [
            {"text": "Gamma", "correct": false},
            {"text": "Lambda", "correct": false},
            {"text": "Slack variable", "correct": true},
            {"text": "Cost", "correct": false}
        ]
    },
    {
        "question": "What is the main purpose of backpropagation in neural networks?",
        "answers": [
            {"text": "Initialize weights", "correct": false},
            {"text": "Adjust weights to minimize error", "correct": true},
            {"text": "Split the dataset", "correct": false},
            {"text": "Determine the learning rate", "correct": false}
        ]
    },
    {
        "question": "What does the sigmoid activation function do?",
        "answers": [
            {"text": "Converts outputs to binary", "correct": false},
            {"text": "Outputs probabilities between 0 and 1", "correct": true},
            {"text": "Normalizes input data", "correct": false},
            {"text": "Increases computation speed", "correct": false}
        ]
    },
    {
        "question": "What does 'learning rate' control in a neural network?",
        "answers": [
            {"text": "Size of the training dataset", "correct": false},
            {"text": "Step size for weight updates", "correct": true},
            {"text": "Number of hidden layers", "correct": false},
            {"text": "Number of epochs", "correct": false}
        ]
    },
    {
        "question": "Which type of model is most affected by the curse of dimensionality?",
        "answers": [
            {"text": "SVM", "correct": false},
            {"text": "Decision Trees", "correct": false},
            {"text": "Naïve Bayes", "correct": false},
            {"text": "Distance-based models", "correct": true}
        ]
    },
    {
        "question": "What is the key property of an activation function?",
        "answers": [
            {"text": "Ensures positive weights", "correct": false},
            {"text": "Normalizes inputs to [0, 1]", "correct": false},
            {"text": "Introduces non-linearity", "correct": true},
            {"text": "Converts outputs to binary values", "correct": false}
        ]
    },
    {
        "question": "What is an epoch in the context of neural networks?",
        "answers": [
            {"text": "One complete pass through the training data", "correct": true},
            {"text": "One update of weights", "correct": false},
            {"text": "A unit of time in training", "correct": false},
            {"text": "A measure of error rate", "correct": false}
        ]
    },
    {
        "question": "What is the main advantage of using SVM for classification tasks?",
        "answers": [
            {"text": "Handles missing data seamlessly", "correct": false},
            {"text": "High flexibility in kernel functions", "correct": true},
            {"text": "No need for hyperparameters", "correct": false},
            {"text": "Always performs better than other methods", "correct": false}
        ]
    },
    {
        "question": "What does the perceptron algorithm output?",
        "answers": [
            {"text": "Probabilities for each class", "correct": false},
            {"text": "A binary decision based on weighted inputs", "correct": true},
            {"text": "Feature importance scores", "correct": false},
            {"text": "A confusion matrix", "correct": false}
        ]
    },
    {
        "question": "What is a key limitation of neural networks?",
        "answers": [
            {"text": "Cannot handle continuous data", "correct": false},
            {"text": "Requires high computational power", "correct": true},
            {"text": "Cannot model non-linear relationships", "correct": false},
            {"text": "Limited to small datasets", "correct": false}
        ]
    },
    {
        "question": "What is the main goal of the softmax activation function?",
        "answers": [
            {"text": "Normalize data to [0, 1]", "correct": false},
            {"text": "Map outputs to probabilities for categorical outputs", "correct": true},
            {"text": "Reduce overfitting", "correct": false},
            {"text": "Adjust learning rates", "correct": false}
        ]
    },
    {
        "question": "What does the margin in SVM represent?",
        "answers": [
            {"text": "Distance between decision boundary and nearest data points", "correct": true},
            {"text": "Error rate of the model", "correct": false},
            {"text": "Learning rate in training", "correct": false},
            {"text": "Average distance between all data points", "correct": false}
        ]
    },
    {
        "question": "What happens when the learning rate in a neural network is too large?",
        "answers": [
            {"text": "Faster convergence to optimal weights", "correct": false},
            {"text": "Oscillations or divergence during training", "correct": true},
            {"text": "Weights remain unchanged", "correct": false},
            {"text": "Overfitting increases significantly", "correct": false}
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