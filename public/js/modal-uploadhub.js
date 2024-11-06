// Upload Hub modal structure
const uploadHubModal = document.getElementById("uploadHub-modal");
const uploadHubBtn = document.querySelector(".btn-right");
const uploadHubCloseBtn = document.getElementById("uploadHub-close-btn");

uploadHubBtn.onclick = function() {
  uploadHubModal.style.display = "flex";
}

uploadHubCloseBtn.onclick = function(){
  uploadHubModal.style.display = "none";
}

window.onclick = function(event)  {
  if(event.target == uploadHubModal){
    uploadHubModal.style.display = "none";
  }
}

// Listen for file input change
const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', displayFileDetails);

function displayFileDetails() {
    const fileInput = document.getElementById('file-input');
    const fileNameDisplay = document.getElementById('file-name');
    const uploadIcon = document.getElementById('upload-icon');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileName = file.name;
        fileNameDisplay.textContent = fileName;

        // Center the file name text
        fileNameDisplay.style.textAlign = 'center'; // Center the file name

        // Change the icon based on file type
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (fileExtension === 'pdf') {
            uploadIcon.className = 'bi bi-file-pdf-fill'; 
            uploadIcon.style.color = '#d90a0a';
        } else if (['doc', 'docx'].includes(fileExtension)) {
            uploadIcon.className = 'bi bi-file-earmark-word-fill';
            uploadIcon.style.color = '#2B579A';
        } else if (['xls', 'xlsx'].includes(fileExtension)) {
            uploadIcon.className = 'bi bi-filetype-xls'; 
            uploadIcon.style.color = '#217346';
        } else if (['ppt', 'pptx'].includes(fileExtension)) {
            uploadIcon.className = 'bi bi-filetype-ppt'; 
            uploadIcon.style.color = '#D24726';
        } else if (fileExtension === 'txt') {
            uploadIcon.className = 'bi bi-filetype-txt'; 
            uploadIcon.style.color = '#423CFD';
        } else {
            uploadIcon.className = 'bi bi-file-earmark-arrow-up-fill'; 
            uploadIcon.style.color = '#4E4DF3';
        }
    } else {
        fileNameDisplay.textContent = ""; // Clear the file name if no file is selected
        fileNameDisplay.style.textAlign = ''; // Reset text alignment if no file is selected
        uploadIcon.className = 'bi bi-file-earmark-arrow-up-fill'; // Reset icon if no file is uploaded
        uploadIcon.style.color = '#4E4DF3';
    }
}