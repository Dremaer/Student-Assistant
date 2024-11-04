// Log In 버튼 클릭 이벤트
document.getElementById("log-in").addEventListener("click", function(event) {
  event.preventDefault(); // 기본 링크 동작 막기
  document.getElementById("login-modal").style.display = "flex";
});

// 닫기 버튼 이벤트
document.getElementById("close-btn").addEventListener("click", function() {
  document.getElementById("login-modal").style.display = "none";
});

// 모달 배경 클릭 시 닫기
document.getElementById("login-modal").addEventListener("click", function(event) {
  if (event.target === this) {
    this.style.display = "none";
  }
});
