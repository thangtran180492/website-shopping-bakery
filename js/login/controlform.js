// control form
function setFormLog() {
    document.getElementById("button-log").classList.add("button-appear");
    document.getElementById("button-sign").classList.remove("button-appear");
    document.getElementById("form-log").classList.remove("form-hidden");
    document.getElementById("form-sign").classList.add("form-hidden");
}
function setFormSign() {
    document.getElementById("button-log").classList.remove("button-appear");
    document.getElementById("button-sign").classList.add("button-appear");
    document.getElementById("form-log").classList.add("form-hidden");
    document.getElementById("form-sign").classList.remove("form-hidden");
}