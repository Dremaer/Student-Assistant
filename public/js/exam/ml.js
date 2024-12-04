/*let acc = document.getElementsByClassName("accordion");
let i;

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("passive");
        this.parentElement.classList.toggle("passive");

        let panel = this.nextElementSibling;

        if(panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block";
        }
    });
}*/

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