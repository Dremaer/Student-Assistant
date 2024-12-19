const questions = [
  
    {
        "question": "What is a graph G?",
        "answers": [
            {"text": "A set of points only.", "correct": false},
            {"text": "A set of vertices V and edges E.", "correct": true},
            {"text": "A tree with cycles.", "correct": false},
            {"text": "A set of ordered pairs with no connections.", "correct": false}
        ]
    },
    {
        "question": "What is a directed graph (digraph)?",
        "answers": [
            {"text": "A graph with no edges.", "correct": false},
            {"text": "A graph where edges have direction.", "correct": true},
            {"text": "A graph with weighted edges only.", "correct": false},
            {"text": "A graph where every vertex has the same degree.", "correct": false}
        ]
    },
    {
        "question": "What is the degree of a vertex v in an undirected graph?",
        "answers": [
            {"text": "The number of edges connected to v.", "correct": true},
            {"text": "The number of paths starting at v.", "correct": false},
            {"text": "The total weight of all edges incident to v.", "correct": false},
            {"text": "The number of self-loops at v.", "correct": false}
        ]
    },
    {
        "question": "Which of the following is true for a complete graph?",
        "answers": [
            {"text": "All vertices are connected to exactly one other vertex.", "correct": false},
            {"text": "The graph contains cycles but no paths.", "correct": false},
            {"text": "Every pair of distinct vertices is connected by a unique edge.", "correct": true},
            {"text": "The graph is disconnected.", "correct": false}
        ]
    },
    {
        "question": "What is a bipartite graph?",
        "answers": [
            {"text": "A graph where edges have weights.", "correct": false},
            {"text": "A graph with exactly two vertices.", "correct": false},
            {"text": "A graph with self-loops only.", "correct": false},
            {"text": "A graph that can be divided into two disjoint sets such that no two vertices in the same set are adjacent.", "correct": true}
        ]
    },
    {
        "question": "What does the Handshaking Lemma state?",
        "answers": [
            {"text": "The sum of all vertex degrees is equal to twice the number of edges.", "correct": true},
            {"text": "The degree of every vertex in a graph is even.", "correct": false},
            {"text": "All vertices in a graph have the same degree.", "correct": false},
            {"text": "A graph with n vertices has n−1 edges.", "correct": false}
        ]
    },
    {
        "question": "What is a path in a graph?",
        "answers": [
            {"text": "A sequence of vertices connected by edges where vertices can repeat.", "correct": false},
            {"text": "A circuit that starts and ends at the same vertex.", "correct": false},
            {"text": "A set of vertices with no edges.", "correct": false},
            {"text": "A sequence of vertices connected by edges without vertex repetition.", "correct": true}
        ]
    },
    {
        "question": "Which condition must hold for a graph to have an Euler circuit?",
        "answers": [
            {"text": "The graph must be acyclic.", "correct": false},
            {"text": "The graph must be bipartite.", "correct": false},
            {"text": "The graph must have exactly two vertices of odd degree.", "correct": false},
            {"text": "The graph must be connected, and every vertex must have an even degree.", "correct": true}
        ]
    },
    {
        "question": "What is the difference between a circuit and a cycle in a graph?",
        "answers": [
            {"text": "A cycle must be directed, while a circuit is undirected.", "correct": false},
            {"text": "A circuit repeats edges, but a cycle does not.", "correct": false},
            {"text": "A circuit allows repeated vertices, but a cycle does not repeat vertices except the start and end.", "correct": true},
            {"text": "A circuit must have an even number of edges.", "correct": false}
        ]
    },
    {
        "question": "Which algorithm is used to find a Minimum Spanning Tree?",
        "answers": [
            {"text": "Dijkstra's algorithm.", "correct": false},
            {"text": "Prim's algorithm.", "correct": true},
            {"text": "Bellman-Ford algorithm.", "correct": false},
            {"text": "Depth First Search.", "correct": false}
        ]
    },
    {
        "question": "What is a Hamiltonian cycle?",
        "answers": [
            {"text": "A cycle that visits every vertex exactly once and returns to the starting point.", "correct": true},
            {"text": "A path that includes all edges exactly once.", "correct": false},
            {"text": "A path that visits all vertices exactly once.", "correct": false},
            {"text": "A tree traversal order.", "correct": false}
        ]
    },
    {
        "question": "What is a rooted tree?",
        "answers": [
            {"text": "A graph with no edges.", "correct": false},
            {"text": "A graph that forms a single cycle.", "correct": false},
            {"text": "A tree where one node is designated as the root.", "correct": true},
            {"text": "A tree with weighted edges only.", "correct": false}
        ]
    },
    {
        "question": "What is the property of an Euler path?",
        "answers": [
            {"text": "It passes through every edge exactly once and has exactly two vertices of odd degree.", "correct": true},
            {"text": "It visits every vertex exactly once.", "correct": false},
            {"text": "It is a circuit with no repeated vertices.", "correct": false},
            {"text": "It passes through all vertices and edges exactly once.", "correct": false}
        ]
    },
    {
        "question": "Which graph traversal algorithm explores all neighboring nodes before moving to the next level?",
        "answers": [
            {"text": "Depth First Search (DFS).", "correct": false},
            {"text": "Kruskal’s algorithm.", "correct": false},
            {"text": "Breadth First Search (BFS)", "correct": true},
            {"text": "Topological sort.", "correct": false}
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
    window.location.href = "/quizs/quizs_Discrete_Math";
});

startQuiz();