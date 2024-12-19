const questions = [
  
    {
        "question": "What is the key characteristic of a greedy algorithm?",
        "answers": [
            {"text": "It solves problems recursively.", "correct": false},
            {"text": "It makes the optimal choice at each step without considering future consequences.", "correct": true},
            {"text": "It always guarantees the optimal solution.", "correct": false},
            {"text": "It minimizes the problem size by splitting it into smaller subproblems.", "correct": false}
        ]
    },
    {
        "question": "In the meeting room scheduling problem, which criterion ensures the maximum number of non-overlapping meetings?",
        "answers": [
            {"text": "Sorting meetings by start time.", "correct": false},
            {"text": "Sorting meetings by end time.", "correct": true},
            {"text": "Selecting meetings with the shortest duration.", "correct": false},
            {"text": "Choosing meetings with the least overlap.", "correct": false}
        ]
    },
    {
        "question": "What is a common drawback of greedy algorithms?",
        "answers": [
            {"text": "They are computationally expensive.", "correct": false},
            {"text": "They require excessive memory.", "correct": false},
            {"text": "They do not always provide an optimal solution.", "correct": true},
            {"text": "They cannot handle large input sizes.", "correct": false}
        ]
    },
    {
        "question": "What is the solution to the Egyptian Fraction problem for 5/6 using a greedy approach?",
        "answers": [
            {"text": "1/2+1/3", "correct": true},
            {"text": "1/3+1/3+1/6", "correct": false},
            {"text": "1/2+1/4+1/12", "correct": false},
            {"text": "1/5+1/6", "correct": false}
        ]
    },
    {
        "question": "Why does the greedy approach work for the meeting room scheduling problem?",
        "answers": [
            {"text": "It avoids overlapping by focusing only on start times.", "correct": false},
            {"text": "It balances meeting durations optimally.", "correct": false},
            {"text": "It minimizes the number of meetings in each iteration.", "correct": false},
            {"text": "It ensures the earliest possible end time for the current meeting.", "correct": true}
        ]
    },
    {
        "question": "What is the first step in the greedy algorithm for the meeting room scheduling problem?",
        "answers": [
            {"text": "Sort meetings by duration.", "correct": false},
            {"text": "Choose meetings with the earliest start time.", "correct": false},
            {"text": "Sort meetings by overlap count.", "correct": false},
            {"text": "Sort meetings by end time.", "correct": true}
        ]
    },
    {
        "question": "What is the advantage of using the greedy algorithm for the Egyptian Fraction problem?",
        "answers": [
            {"text": "It finds the most efficient solution in terms of time complexity.", "correct": false},
            {"text": "It ensures the smallest denominators.", "correct": false},
            {"text": "It simplifies the problem by reducing the fraction in each step.", "correct": true},
            {"text": "It avoids calculating all possible solutions.", "correct": false}
        ]
    },
    {
        "question": "Which of the following statements is TRUE about greedy algorithms?",
        "answers": [
            {"text": "Greedy algorithms work well when the greedy choice property holds.", "correct": true},
            {"text": "Greedy algorithms are guaranteed to produce optimal solutions in all cases.", "correct": false},
            {"text": "Greedy algorithms require a sorted input.", "correct": false},
            {"text": "Greedy algorithms are a type of dynamic programming.", "correct": false}
        ]
    },
    {
        "question": "What is the time complexity of the greedy algorithm for the meeting room scheduling problem, assuming n meetings?",
        "answers": [
            {"text": "O(n)", "correct": false},
            {"text": "O(nlogn)", "correct": true},
            {"text": "O(n^2)", "correct": false},
            {"text": "O(logn)", "correct": false}
        ]
    },
    {
        "question": "How does the greedy algorithm decide which meeting to add next in the scheduling problem?",
        "answers": [
            {"text": "By finding the meeting with the shortest duration.", "correct": false},
            {"text": "By checking which meeting overlaps the least.", "correct": false},
            {"text": "By choosing the meeting with the earliest start time.", "correct": false},
            {"text": "By selecting the meeting with the earliest end time that doesn’t overlap.", "correct": true}
        ]
    },
    {
        "question": "In the Egyptian Fraction problem, what does [𝑞/𝑝] represent?",
        "answers": [
            {"text": "The smallest integer greater than or equal to 𝑞/𝑝.", "correct": true},
            {"text": "The greatest integer less than 𝑞/𝑝.", "correct": false},
            {"text": "The exact value of 𝑞/𝑝.", "correct": false},
            {"text": "The reciprocal of 𝑞/𝑝.", "correct": false}
        ]
    },
    {
        "question": "Why does the greedy algorithm for the Egyptian Fraction problem terminate?",
        "answers": [
            {"text": "Because fractions are reduced to zero eventually.", "correct": true},
            {"text": "Because it only works with integers.", "correct": false},
            {"text": "Because it keeps increasing the numerator.", "correct": false},
            {"text": "Because the algorithm cycles through a fixed set of denominators.", "correct": false}
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