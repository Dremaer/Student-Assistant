const questions = [
    {
        "question": "What is the primary assumption of the Naïve Bayes algorithm?",
        "answers": [
            {"text": "Features are dependent", "correct": false},
            {"text": "Features are independent within each class", "correct": true},
            {"text": "Classes are evenly distributed", "correct": false},
            {"text": "Probabilities are not required", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of Bayes' theorem in classification?",
        "answers": [
            {"text": "To calculate posterior probabilities", "correct": true},
            {"text": "To create decision trees", "correct": false},
            {"text": "To define distance metrics", "correct": false},
            {"text": "To split datasets into folds", "correct": false}
        ]
    },
    {
        "question": "Which method can address the issue of zero probabilities in Naïve Bayes?",
        "answers": [
            {"text": "Binning", "correct": false},
            {"text": "Laplace smoothing", "correct": true},
            {"text": "Feature scaling", "correct": false},
            {"text": "Normalization", "correct": false}
        ]
    },
    {
        "question": "What does stratified sampling ensure in a dataset?",
        "answers": [
            {"text": "Equal size partitions", "correct": false},
            {"text": "Random sampling", "correct": false},
            {"text": "Proportional representation of each group", "correct": true},
            {"text": "Reduction in data size", "correct": false}
        ]
    },
    {
        "question": "Which metric is used to measure a classifier’s ability to predict positive outcomes?",
        "answers": [
            {"text": "Specificity", "correct": false},
            {"text": "Sensitivity", "correct": true},
            {"text": "Accuracy", "correct": false},
            {"text": "Precision", "correct": false}
        ]
    },
    {
        "question": "What is the key issue with overfitting in a decision tree?",
        "answers": [
            {"text": "The tree is too simple and fails to generalize", "correct": false},
            {"text": "The tree is too complex and fits noise in the training data", "correct": true},
            {"text": "The tree does not account for missing values", "correct": false},
            {"text": "The tree uses too few training examples", "correct": false}
        ]
    },
    {
        "question": "What is a 'cost matrix' used for in classification?",
        "answers": [
            {"text": "To measure accuracy", "correct": false},
            {"text": "To assign costs to different misclassifications", "correct": true},
            {"text": "To compare classifiers", "correct": false},
            {"text": "To generate new training data", "correct": false}
        ]
    },
    {
        "question": "Which property makes k-NN a lazy learner?",
        "answers": [
            {"text": "It trains models very quickly", "correct": false},
            {"text": "It stores all training data and defers computation until prediction", "correct": true},
            {"text": "It uses only numeric data", "correct": false},
            {"text": "It requires feature scaling", "correct": false}
        ]
    },
    {
        "question": "In cross-validation, what is the main purpose of splitting the data into training and test sets?",
        "answers": [
            {"text": "To improve accuracy", "correct": false},
            {"text": "To evaluate generalization ability", "correct": true},
            {"text": "To make the model faster", "correct": false},
            {"text": "To reduce data size", "correct": false}
        ]
    },
    {
        "question": "What does Occam’s Razor imply in model selection?",
        "answers": [
            {"text": "Always select the most complex model", "correct": false},
            {"text": "Always select the simplest model", "correct": false},
            {"text": "Prefer simpler models if they have similar accuracy", "correct": true},
            {"text": "Choose models that perform better on the training data", "correct": false}
        ]
    },
    {
        "question": "What is the main disadvantage of k-NN when the dataset size increases?",
        "answers": [
            {"text": "It requires normalization", "correct": false},
            {"text": "Distance computation becomes slow", "correct": true},
            {"text": "It only works with binary classification", "correct": false},
            {"text": "It cannot handle categorical data", "correct": false}
        ]
    },
    {
        "question": "What is sensitivity in classification metrics?",
        "answers": [
            {"text": "True positives / All actual positives", "correct": true},
            {"text": "True negatives / All negatives", "correct": false},
            {"text": "False positives / All actual positives", "correct": false},
            {"text": "True positives / All predictions", "correct": false}
        ]
    },
    {
        "question": "Which method reduces variance in a model during validation?",
        "answers": [
            {"text": "Stratified sampling", "correct": false},
            {"text": "Cross-validation", "correct": true},
            {"text": "Bootstrapping", "correct": false},
            {"text": "Holdout sampling", "correct": false}
        ]
    },
    {
        "question": "What is the role of conditional independence in Naïve Bayes?",
        "answers": [
            {"text": "It simplifies computation of posterior probabilities", "correct": true},
            {"text": "It ensures all features are independent globally", "correct": false},
            {"text": "It reduces the size of the training dataset", "correct": false},
            {"text": "It avoids the need for feature scaling", "correct": false}
        ]
    },
    {
        "question": "Why is Laplace smoothing applied in Naïve Bayes?",
        "answers": [
            {"text": "To improve the training speed", "correct": false},
            {"text": "To handle zero probabilities in the data", "correct": true},
            {"text": "To reduce the feature size", "correct": false},
            {"text": "To make the algorithm robust to outliers", "correct": false}
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