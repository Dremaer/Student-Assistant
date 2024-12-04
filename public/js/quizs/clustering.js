const questions = [
    {
        "question": "What is the primary purpose of DBSCAN clustering?",
        "answers": [
            {"text": "To classify data into predefined categories", "correct": false},
            {"text": "To cluster data based on density and detect outliers", "correct": true},
            {"text": "To optimize high-dimensional data", "correct": false},
            {"text": "To find hierarchical relationships in data", "correct": false}
        ]
    },
    {
        "question": "Which parameter is NOT required in the DBSCAN algorithm?",
        "answers": [
            {"text": "Minimum points (minPts)", "correct": false},
            {"text": "Distance measure (epsilon)", "correct": false},
            {"text": "Number of clusters (k)", "correct": true},
            {"text": "Noise threshold", "correct": false}
        ]
    },
    {
        "question": "What is the main characteristic of hierarchical clustering?",
        "answers": [
            {"text": "It divides data into fixed numbers of clusters.", "correct": false},
            {"text": "It organizes data into a tree-like structure with relationships.", "correct": true},
            {"text": "It minimizes outlier influence.", "correct": false},
            {"text": "It requires k-means initialization.", "correct": false}
        ]
    },
    {
        "question": "Which distance metric is NOT commonly used in k-means clustering?",
        "answers": [
            {"text": "Euclidean distance", "correct": false},
            {"text": "Manhattan distance", "correct": false},
            {"text": "Jaccard coefficient", "correct": false},
            {"text": "Cosine similarity", "correct": true}
        ]
    },
    {
        "question": "What does the term 'Dendrogram' refer to in hierarchical clustering?",
        "answers": [
            {"text": "A chart displaying clusters in a hierarchical tree structure", "correct": true},
            {"text": "A visualization of noise points", "correct": false},
            {"text": "A list of centroids for each cluster", "correct": false},
            {"text": "A scatter plot of cluster densities", "correct": false}
        ]
    },
    {
        "question": "What is the stopping criterion for k-means clustering?",
        "answers": [
            {"text": "All data points are in the same cluster", "correct": false},
            {"text": "Cluster centroids stop changing significantly", "correct": false},
            {"text": "A predefined number of iterations", "correct": false},
            {"text": "Both B and C", "correct": true}
        ]
    },
    {
        "question": "What is one disadvantage of k-means clustering?",
        "answers": [
            {"text": "It cannot detect noise points.", "correct": false},
            {"text": "It requires specifying the number of clusters.", "correct": true},
            {"text": "It does not scale well with data size.", "correct": false},
            {"text": "It is computationally expensive.", "correct": false}
        ]
    },
    {
        "question": "What is the main advantage of DBSCAN over k-means clustering?",
        "answers": [
            {"text": "It does not require the number of clusters as an input.", "correct": true},
            {"text": "It performs better with high-dimensional data.", "correct": false},
            {"text": "It always produces circular clusters.", "correct": false},
            {"text": "It is faster in computation.", "correct": false}
        ]
    },
    {
        "question": "What is the function of the 'epsilon' parameter in DBSCAN?",
        "answers": [
            {"text": "Determines the minimum distance for two points to be considered neighbors", "correct": true},
            {"text": "Specifies the number of clusters", "correct": false},
            {"text": "Calculates the mean distance between all points", "correct": false},
            {"text": "Sets the number of iterations", "correct": false}
        ]
    },
    {
        "question": "What type of structure does the Self-Organizing Map (SOM) use for its output layer?",
        "answers": [
            {"text": "Fully connected nodes", "correct": false},
            {"text": "A 2D lattice grid", "correct": true},
            {"text": "A tree hierarchy", "correct": false},
            {"text": "A single-layer perceptron", "correct": false}
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