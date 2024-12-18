const questions = [
  
    {
        "question": "What is the primary idea behind dynamic programming?",
        "answers": [
            {"text": "Solve each problem recursively without storing results.", "correct": false},
            {"text": "Break problems into overlapping subproblems and store results to avoid redundant computation.", "correct": true},
            {"text": "Use brute force to try all combinations.", "correct": false},
            {"text": "Solve smaller problems only if they appear multiple times.", "correct": false}
        ]
    },
    {
        "question": "In the Fibonacci sequence example, what is the time complexity of the naive recursive implementation?",
        "answers": [
            {"text": "O(n)", "correct": false},
            {"text": "O(logn)", "correct": false},
            {"text": "O(2^n)", "correct": true},
            {"text": "O(1)", "correct": false}
        ]
    },
    {
        "question": "How does memoization improve the performance of recursive algorithms?",
        "answers": [
            {"text": "By reducing the size of the input data.", "correct": false},
            {"text": "By parallelizing the computation.", "correct": false},
            {"text": "By limiting the depth of recursion.", "correct": false},
            {"text": "By storing the results of previously solved subproblems to reuse them.", "correct": true}
        ]
    },
    {
        "question": "What is the recurrence relation for the staircase problem where you can climb 1 or 2 steps at a time?",
        "answers": [
            {"text": "F(n)=F(n−1)+F(n−2)", "correct": true},
            {"text": "F(n)=2F(n−1)", "correct": false},
            {"text": "F(n)=F(n−1)×F(n−2)", "correct": false},
            {"text": "𝐹F(n)=F(n−1)−F(n−2)", "correct": false}
        ]
    },
    {
        "question": "In the production line optimization problem, what is the key approach?",
        "answers": [
            {"text": "Consider all possible combinations of assembly paths.", "correct": false},
            {"text": "Use greedy choices at each step.", "correct": false},
            {"text": "Compare costs of transitioning between lines and choose the minimum cost.", "correct": true},
            {"text": "Assume equal processing times for all stages.", "correct": false}
        ]
    },
    {
        "question": "What is the goal of the matrix chain multiplication problem?",
        "answers": [
            {"text": "Multiply matrices to produce the smallest matrix.", "correct": false},
            {"text": "Reduce the dimensions of matrices during multiplication.", "correct": false},
            {"text": "Maximize the determinant of the final matrix.", "correct": false},
            {"text": "Determine the order of multiplications to minimize the number of scalar multiplications.", "correct": true}
        ]
    },
    {
        "question": "What is the time complexity of solving the matrix chain multiplication problem using dynamic programming?",
        "answers": [
            {"text": "O(n^3)", "correct": true},
            {"text": "O(n^2)", "correct": false},
            {"text": "O(n!)", "correct": false},
            {"text": "O(nlogn)", "correct": false}
        ]
    },
    {
        "question": "Which statement is TRUE about the space complexity of dynamic programming?",
        "answers": [
            {"text": "Dynamic programming requires at least 𝑂(n^2) space for table storage in problems like matrix chain multiplication.", "correct": true},
            {"text": "Dynamic programming always uses 𝑂(1) space.", "correct": false},
            {"text": "Dynamic programming space complexity is always greater than time complexity.", "correct": false},
            {"text": "It uses no additional space beyond the input data.", "correct": false}
        ]
    },
    {
        "question": "Why does dynamic programming outperform naive recursive solutions?",
        "answers": [
            {"text": "It uses divide-and-conquer strategies to break the problem.", "correct": false},
            {"text": "It applies greedy heuristics for optimal solutions.", "correct": false},
            {"text": "It parallelizes the computation to achieve faster results.", "correct": false},
            {"text": "It avoids redundant computations by solving each subproblem only once.", "correct": true}
        ]
    },
    {
        "question": "In matrix chain multiplication, how do you determine the optimal order of multiplication?",
        "answers": [
            {"text": "Compute the determinant of each pair of matrices.", "correct": false},
            {"text": "Divide the matrices into equal halves and multiply.", "correct": false},
            {"text": "Use a dynamic programming table to compare all possible orders.", "correct": true},
            {"text": "Sort the matrices by size before multiplication.", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of the Fibonacci sequence using a memoization approach?",
        "answers": [
            {"text": "𝑂(n)", "correct": true},
            {"text": "O(2^n)", "correct": false},
            {"text": "O(logn)", "correct": false},
            {"text": "𝑂(1)", "correct": false}
        ]
    },
    {
        "question": "In dynamic programming, what is the typical first step in solving a problem?",
        "answers": [
            {"text": "Find the largest subproblem and solve it first.", "correct": false},
            {"text": "Write a recursive solution to understand the subproblem dependencies.", "correct": true},
            {"text": "Use a brute-force approach to identify the solution space.", "correct": false},
            {"text": "Initialize the solution table with random values.", "correct": false}
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