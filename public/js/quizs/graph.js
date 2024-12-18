const questions = [
    {
        "question": "What is a graph in data structures?",
        "answers": [
            {"text": "A collection of nodes connected by edges.", "correct": true},
            {"text": "A linear data structure.", "correct": false},
            {"text": "A tree with no cycles.", "correct": false},
            {"text": "A set of disjoint subsets.", "correct": false}
        ]
    },
    {
        "question": "What is the main difference between directed and undirected graphs?",
        "answers": [
            {"text": "Directed graphs have ordered pairs of vertices for edges.", "correct": true},
            {"text": "Undirected graphs have edges pointing in a single direction.", "correct": false},
            {"text": "Directed graphs cannot have cycles.", "correct": false},
            {"text": "Undirected graphs have no edges.", "correct": false}
        ]
    },
    {
        "question": "What is the degree of a vertex in a graph?",
        "answers": [
            {"text": "The number of edges connected to it.", "correct": true},
            {"text": "The length of the shortest path to the root.", "correct": false},
            {"text": "The total weight of the edges connected to it.", "correct": false},
            {"text": "The number of vertices in its neighborhood.", "correct": false}
        ]
    },
    {
        "question": "What defines a complete graph?",
        "answers": [
            {"text": "A graph where every vertex is connected to every other vertex.", "correct": true},
            {"text": "A graph with no edges.", "correct": false},
            {"text": "A graph with equal in-degrees and out-degrees.", "correct": false},
            {"text": "A graph with exactly one connected component.", "correct": false}
        ]
    },
    {
        "question": "What is an Eulerian path?",
        "answers": [
            {"text": "A path that visits every edge exactly once.", "correct": true},
            {"text": "A path that visits every vertex exactly once.", "correct": false},
            {"text": "A cycle that includes all vertices.", "correct": false},
            {"text": "A path that visits all connected components.", "correct": false}
        ]
    },
    {
        "question": "Which data structure is commonly used to represent sparse graphs?",
        "answers": [
            {"text": "Adjacency List", "correct": true},
            {"text": "Adjacency Matrix", "correct": false},
            {"text": "Hash Table", "correct": false},
            {"text": "Priority Queue", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of Depth First Search (DFS) in a graph with 'V' vertices and 'E' edges?",
        "answers": [
            {"text": "O(V + E)", "correct": true},
            {"text": "O(V^2)", "correct": false},
            {"text": "O(E^2)", "correct": false},
            {"text": "O(VE)", "correct": false}
        ]
    },
    {
        "question": "What is the key feature of a connected graph?",
        "answers": [
            {"text": "There exists a path between any two vertices.", "correct": true},
            {"text": "Every vertex has the same degree.", "correct": false},
            {"text": "The graph has no cycles.", "correct": false},
            {"text": "All vertices have an edge with the root.", "correct": false}
        ]
    },
    {
        "question": "What does an adjacency matrix represent in graph theory?",
        "answers": [
            {"text": "A 2D array indicating the presence or absence of edges between vertices.", "correct": true},
            {"text": "A list of nodes and their degrees.", "correct": false},
            {"text": "A sequence of edges with weights.", "correct": false},
            {"text": "A hierarchical representation of vertices.", "correct": false}
        ]
    },
    {
        "question": "What is a spanning tree in graph theory?",
        "answers": [
            {"text": "A subgraph that includes all vertices and is a tree.", "correct": true},
            {"text": "A graph with weighted edges.", "correct": false},
            {"text": "A cycle that visits every edge.", "correct": false},
            {"text": "A graph that contains only leaf nodes.", "correct": false}
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
    window.location.href = "/quizs/quiz_data";
});

startQuiz();