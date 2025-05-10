interface Window {
    date_begin : Date ;
    date_end : Date ;
}



function mysubmit( ) : void {
    alert("merci pour votre participation " + (<HTMLInputElement>document.getElementById('nom')).value
        + " "
        + (<HTMLInputElement>document.getElementById('prenom')).value);
}


function initReadOnlyTextInput(): void {
    window.date_begin = new Date();

    let dateInput = document.getElementById('Date') as HTMLInputElement;
    dateInput.value = window.date_begin.toString();
}




function colorblind_switch(): void {
    let altSheet = document.getElementById("alt-sheet") as HTMLLinkElement;
    if (altSheet.disabled ) {
        altSheet.disabled = false; // Désactive
    } else {
        altSheet.disabled = true; // Active
    }
}