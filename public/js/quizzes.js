const quizLink = document.querySelector('.nav-link[onclick="quizList(event)"]');
const quizDropdown = document.getElementById('quiz-dropdown');

function toggleDropdown(event) {
    event.preventDefault();

    // Toggle the dropdown menu visibility
    quizDropdown.style.display = quizDropdown.style.display === 'flex' ? 'none' : 'flex';
}

// Event listener to handle clicking the "Quizzes" link
quizLink.addEventListener('click', toggleDropdown);

document.addEventListener('DOMContentLoaded', () => {
    // Get the subject parameter from the URL query string (if available)
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');  // Get the 'subject' parameter from the URL

    // Get the span element where the subject will be displayed
    const subjectTitle = document.querySelector('#subject-title');

    // If the subject parameter is found in the URL, update the title
    if (subject) {
        subjectTitle.textContent = `${subject}`;  // Update the title based on URL parameter
    } else {
        subjectTitle.textContent = 'Subject';  // Default title if no subject is passed
    }

    // Handle the click event on subject links inside quizzes page (if links exist)
    const subjectLinks = document.querySelectorAll('.subject-link');
    const subjectListContainer = document.querySelector('.subjects');  // Assuming this is the container of the subject list

    subjectLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            const chosenSubject = link.getAttribute('data-subject');
            subjectTitle.textContent = `${chosenSubject}`;  // Update title with clicked subject

            // Update the URL with the selected subject (without reloading the page)
            window.history.pushState({}, '', `?subject=${chosenSubject}`);
            
        });
    });
});


// Close the dropdown when clicking outside of it
document.addEventListener('click', function (event) {
    // Check if the click is outside the dropdown and the link
    if (!quizDropdown.contains(event.target) && event.target !== quizLink) {
        quizDropdown.style.display = 'none';
    }
});