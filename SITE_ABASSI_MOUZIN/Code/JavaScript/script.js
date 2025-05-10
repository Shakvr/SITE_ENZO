"use strict";
function mysubmit() {
    alert("merci pour votre participation " + document.getElementById('nom').value
        + " "
        + document.getElementById('prenom').value);
}
function initReadOnlyTextInput() {
    window.date_begin = new Date();
    let dateInput = document.getElementById('Date');
    dateInput.value = window.date_begin.toString();
}
function colorblind_switch() {
    let altSheet = document.getElementById("alt-sheet");
    if (altSheet.disabled) {
        altSheet.disabled = false; // Désactive
    }
    else {
        altSheet.disabled = true; // Active
    }
}
