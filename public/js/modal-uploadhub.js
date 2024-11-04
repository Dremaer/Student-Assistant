//Upload Hub modal structure
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