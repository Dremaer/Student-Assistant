
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("passive");
        this.nextElementSibling.style.display =
            this.nextElementSibling.style.display === "block"
                ? "none"
                : "block";
    });
}