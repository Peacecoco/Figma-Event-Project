const question = document.querySelectorAll(".angle");

question.forEach (function (icon) {
    icon.addEventListener("click", function (e) {
        const questions = e.currentTarget.parentElement.parentElement;
 
    questions.classList.toggle("show-text");

    });
});
