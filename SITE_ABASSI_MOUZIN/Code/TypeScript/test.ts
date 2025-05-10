function applyAllTests() {
    CheckNames();
    Checkradio();

}



function CheckNames() {
    let name =  (<HTMLInputElement>document.getElementById('nom')) ;
    let firstname = (<HTMLInputElement>document.getElementById('prenom'));
    if(  name.value == " " || name.value  == "Votre nom"){
        name.value = " Votre nom svp !!!";
        name.style.color = "red";
        name.style.fontSize = "12px";

    }
    else{
        name.style.color = "black";
    }
    if (firstname.value == " " || firstname.value == "Votre prénom") {
        firstname.value = " Votre prenom svp !!!";
        firstname.style.color = "red";
        firstname.style.fontSize = "12px";
    }
    else{
        firstname.style.color = "black";

    }
}




function Checkradio() {
    let display: string = "";
    let display1: string = "";
    let display2: string = "";

    let good_answer1 = document.getElementById("choix2") as HTMLInputElement;
    let client_choice1 = document.querySelector(`input[name="books"]:checked`) as HTMLInputElement ;

    if (client_choice1.value != good_answer1.value) {
        display = " - Vous n'avez pas la bonne réponse à 'Quel auteur a écrit \"The Final Empire\" ?' " ;
    }
    else{
        display = " - Bonne réponse"
    }

    let good_answer2 = document.getElementById("choix6") as HTMLInputElement;
    let client_choice2 = document.querySelector(`input[name="books2"]:checked`) as HTMLInputElement ;
    if (client_choice2.value != good_answer2.value) {
        display1  = " - Vous n'avez pas la bonne réponse à 'Quel livre a reçu la note 9,5/10 dans ma collection ?'";
    }
    else{
        display1 =" - Bonne réponse"
    }
    let good_answer3 = document.getElementById("choix12") as HTMLInputElement;
    let client_choice3 = document.querySelector(`input[name="books3"]:checked`) as HTMLInputElement ;
    if (client_choice3.value != good_answer3.value) {
        display2 = "- Vous n'avez pas la bonne réponse à 'Combien de pages compte La Première Loi - Tome 3 ' ";
    }
    else{
        display2 = " - Bonne réponse "
    }
    alert(display + "\n" + display1 + "\n" + display2);

}


