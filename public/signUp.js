
document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("user-color");
    const button = document.getElementById("submit-btn");

    if (select && button) {
        select.addEventListener("change", function() {
            button.style.backgroundColor = this.value || "#808080";
        });
    }
});
