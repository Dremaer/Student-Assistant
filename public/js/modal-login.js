// Log In 버튼 클릭 이벤트
document.getElementById("log-in").addEventListener("click", function(event) {
  event.preventDefault(); // 기본 링크 동작 막기
  document.getElementById("login-modal").style.display = "flex";
});

// Sign Up 버튼 클릭 이벤트
document.querySelector(".btn .nav-link").addEventListener("click", function(event) {
  event.preventDefault(); // 기본 링크 동작 막기
  document.getElementById("signup-modal").style.display = "flex"; // 회원가입 모달 열기
});

// 닫기 버튼 이벤트 (로그인 모달)
document.getElementById("login-close-btn").addEventListener("click", function() {
  document.getElementById("login-modal").style.display = "none";
});

// 닫기 버튼 이벤트 (회원가입 모달)
document.getElementById("signup-close-btn").addEventListener("click", function() {
  document.getElementById("signup-modal").style.display = "none";
});

// 모달 배경 클릭 시 닫기 (로그인 모달)
document.getElementById("login-modal").addEventListener("click", function(event) {
  if (event.target === this) {
    this.style.display = "none";
  }
});

// 모달 배경 클릭 시 닫기 (회원가입 모달)
document.getElementById("signup-modal").addEventListener("click", function(event) {
  if (event.target === this) {
    this.style.display = "none";
  }
});
