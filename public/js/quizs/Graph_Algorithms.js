const questions = [
  
    {
        "question": "What is a directed graph?",
        "answers": [
            {"text": "A graph with no edges.", "correct": false},
            {"text": "A graph where edges have directions.", "correct": true},
            {"text": "A graph where all edges are bidirectional.", "correct": false},
            {"text": "A graph without any weights on edges.", "correct": false}
        ]
    },
    {
        "question": "Which of the following is TRUE for an adjacency matrix representation of a graph?",
        "answers": [
            {"text": "It uses less space for sparse graphs.", "correct": false},
            {"text": "It allows 𝑂(1) time complexity to check for edge existence.", "correct": true},
            {"text": "It is more memory-efficient than adjacency lists.", "correct": false},
            {"text": "It does not support weighted graphs.", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of Depth First Search (DFS) in a graph with ∣V∣ vertices and ∣E∣ edges?",
        "answers": [
            {"text": "O(∣V∣+∣E∣)", "correct": true},
            {"text": "O(∣V∣^2)", "correct": false},
            {"text": "O(∣E∣^2)", "correct": false},
            {"text": "O(∣V∣⋅∣E∣)", "correct": false}
        ]
    },
    {
        "question": "Which graph traversal method guarantees finding the shortest path in an unweighted graph?",
        "answers": [
            {"text": "Kruskal’s Algorithm", "correct": false},
            {"text": "Prim’s Algorithm", "correct": false},
            {"text": "Breadth First Search (BFS)", "correct": true},
            {"text": "Depth First Search", "correct": true}
        ]
    },
    {
        "question": "What is the purpose of Prim’s algorithm?",
        "answers": [
            {"text": "To find the shortest path between two nodes.", "correct": false},
            {"text": "To find the minimum spanning tree of a weighted graph.", "correct": true},
            {"text": "To check if a graph is connected.", "correct": false},
            {"text": "To detect cycles in a graph.", "correct": false}
        ]
    },
    {
        "question": "Which of the following is FALSE about Kruskal’s algorithm?",
        "answers": [
            {"text": "It uses a greedy approach.", "correct": false},
            {"text": "It always selects the smallest weight edge that does not form a cycle.", "correct": false},
            {"text": "It can work on disconnected graphs.", "correct": true},
            {"text": "It uses a Union-Find data structure to detect cycles.", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of Dijkstra’s algorithm using a Min-Heap for a graph with ∣V∣ vertices and ∣E∣ edges?",
        "answers": [
            {"text": "O(∣V∣^2)", "correct": false},
            {"text": "O(∣E∣^2)", "correct": false},
            {"text": "O(∣V∣+∣E∣)", "correct": false},
            {"text": "O((∣V∣+∣E∣)log∣V∣)", "correct": true}
        ]
    },
    {
        "question": "Why does the Bellman-Ford algorithm work for graphs with negative weight edges?",
        "answers": [
            {"text": "It uses a different weight scaling method.", "correct": false},
            {"text": "It uses a Min-Heap to optimize distance calculations.", "correct": false},
            {"text": "It relaxes all edges ∣V∣−1 times to ensure all paths are checked.", "correct": true},
            {"text": "It works only if there are no cycles in the graph.", "correct": false}
        ]
    },
    {
        "question": "What is the main difference between Dijkstra’s algorithm and Bellman-Ford algorithm?",
        "answers": [
            {"text": "Dijkstra’s algorithm allows negative weight edges.", "correct": false},
            {"text": "Bellman-Ford uses a greedy approach.", "correct": false},
            {"text": "Bellman-Ford works with negative weights but is slower.", "correct": true},
            {"text": "Dijkstra’s algorithm checks all edges ∣V∣−1 times.", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of the Floyd-Warshall algorithm?",
        "answers": [
            {"text": "O(∣V∣^3)", "correct": true},
            {"text": "O(∣V∣^2)", "correct": false},
            {"text": "O(∣V∣∣E∣)", "correct": false},
            {"text": "O(∣E∣^2)", "correct": false}
        ]
    },
    {
        "question": "Which algorithm is used to find the shortest paths from a single source to all other nodes in a graph with non-negative weights?",
        "answers": [
            {"text": "Kruskal’s Algorithm", "correct": false},
            {"text": "Prim’s Algorithm", "correct": false},
            {"text": "Bellman-Ford Algorithm", "correct": false},
            {"text": "Dijkstra’s Algorithm", "correct": true}
        ]
    },
    {
        "question": "In the context of graph traversal, what does connectivity mean?",
        "answers": [
            {"text": "Every node has an edge to itself.", "correct": false},
            {"text": "All nodes have equal degrees.", "correct": true},
            {"text": "There is a path between any two nodes in the graph.", "correct": false},
            {"text": "The graph has no isolated nodes.", "correct": false}
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
    window.location.href = "/quizs/quizs_ALgorithm_Analysis_Design";
});

startQuiz();