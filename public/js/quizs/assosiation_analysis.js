const questions = [
    {
        "question": "What is the primary goal of association analysis?",
        "answers": [
            {"text": "To cluster similar data points", "correct": false},
            {"text": "To discover patterns of co-occurrence among items", "correct": true},
            {"text": "To classify items into categories", "correct": false},
            {"text": "To reduce dimensionality of data", "correct": false}
        ]
    },
    {
        "question": "What does the term 'support' refer to in association rules?",
        "answers": [
            {"text": "The confidence of a rule", "correct": false},
            {"text": "The proportion of transactions containing the itemset", "correct": true},
            {"text": "The relationship strength between items", "correct": false},
            {"text": "The probability of a rule being true", "correct": false}
        ]
    },
    {
        "question": "Which of the following algorithms is commonly used for association rule mining?",
        "answers": [
            {"text": "K-means", "correct": false},
            {"text": "Apriori", "correct": true},
            {"text": "Random Forest", "correct": false},
            {"text": "Decision Trees", "correct": false}
        ]
    },
    {
        "question": "What does the confidence of an association rule measure?",
        "answers": [
            {"text": "The probability that the consequent occurs given the antecedent", "correct": true},
            {"text": "The overall accuracy of the rule", "correct": false},
            {"text": "The strength of the relationship between variables", "correct": false},
            {"text": "The proportion of transactions containing both antecedent and consequent", "correct": false}
        ]
    },
    {
        "question": "What is the main advantage of the Apriori algorithm?",
        "answers": [
            {"text": "It requires no input parameters", "correct": false},
            {"text": "It generates all possible rules efficiently", "correct": false},
            {"text": "It reduces computation by pruning infrequent itemsets", "correct": true},
            {"text": "It is highly scalable for large datasets", "correct": false}
        ]
    },
    {
        "question": "What does the 'lift' metric indicate in association rule mining?",
        "answers": [
            {"text": "The degree to which the occurrence of one item predicts the occurrence of another", "correct": true},
            {"text": "The proportion of transactions containing the rule's antecedent", "correct": false},
            {"text": "The overall support of the rule", "correct": false},
            {"text": "The difference between expected and observed confidence", "correct": false}
        ]
    },
    {
        "question": "Which of the following best describes hierarchical clustering?",
        "answers": [
            {"text": "Dividing data into a fixed number of clusters", "correct": false},
            {"text": "Organizing data into a tree-like structure", "correct": true},
            {"text": "Clustering based on density", "correct": false},
            {"text": "Predicting category labels", "correct": false}
        ]
    },
    {
        "question": "What type of data is typically used in market basket analysis?",
        "answers": [
            {"text": "Continuous data", "correct": false},
            {"text": "Transactional data", "correct": true},
            {"text": "Categorical data", "correct": false},
            {"text": "Text data", "correct": false}
        ]
    },
    {
        "question": "What is the primary output of the Apriori algorithm?",
        "answers": [
            {"text": "Clusters of data", "correct": false},
            {"text": "Decision trees", "correct": false},
            {"text": "Frequent itemsets and association rules", "correct": true},
            {"text": "Reduced dimensionality datasets", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of binning in data preprocessing for association analysis?",
        "answers": [
            {"text": "To reduce noise in the data", "correct": false},
            {"text": "To convert numerical data into categorical data", "correct": true},
            {"text": "To normalize data", "correct": false},
            {"text": "To eliminate missing values", "correct": false}
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