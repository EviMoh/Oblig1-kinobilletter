let billetter= [];
/***let ut="<table><tr>" +
 "<th>Film</th>" +
 "<th>Antall</th>" +
 "<th>Fornavn</th>" +
 "<th>Etternavn</th>" +
 "<th>Telefonnummer</th>" +
 "<th>Epost</th>" + "</tr>";***/

function kjopticket() {
    let billett = {
        film: document.getElementById("filmer").value,
        antall: document.getElementById("Antall").value,
        fornavn: document.getElementById("Fornavn").value,
        etternavn: document.getElementById("Etternavn").value,
        telefonnr: document.getElementById("TelefonNr").value,
        epost: document.getElementById("Epost").value
    };

    //Input
    if (!billett.antall || !billett.fornavn || !billett.etternavn || !billett.telefonnr || !billett.epost) {
        document.getElementById("AntallError").innerHTML = "Fyll inn verdi";
        document.getElementById("FornavnError").innerHTML = "Fyll inn verdi";
        document.getElementById("EtternavnError").innerHTML = "Fyll inn verdi";
        document.getElementById("TelefonNrError").innerHTML = "Fyll inn verdi";
        document.getElementById("EpostError").innerHTML = "Fyll inn verdi";
    } else {
        billetter.push(billett);
        // Tøm inputfeltene
        document.getElementById("Antall").value = "";
        document.getElementById("Fornavn").value = "";
        document.getElementById("Etternavn").value = "";
        document.getElementById("TelefonNr").value = "";
        document.getElementById("Epost").value = "";
        //Nullstill feilmeldinger
        nullstillFeilmeldinger();
    }
}

function visBilletter(){
    let ut = "<tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th></tr>";
    for(let billett of billetter){
        ut+="<tr>";
        ut+="<td>" + billett.film + "</td>" +
            "<td>" + billett.antall + "</td>" +
            "<td>" + billett.fornavn + "</td>" +
            "<td>" + billett.etternavn + "</td>" +
            "<td>" + billett.telefonnr + "</td>" +
            "<td>" + billett.epost + "</td>";
        ut+="</tr>";
    }
    document.getElementById("billettliste").innerHTML= ut;
}

function AltDelete(){
    document.getElementById("billettliste").innerHTML="";
    billetter=[];
    nullstillFeilmeldinger();
}

function nullstillFeilmeldinger(){
    document.getElementById("AntallError").innerHTML="";
    document.getElementById("FornavnError").innerHTML="";
    document.getElementById("EtternavnError").innerHTML="";
    document.getElementById("TelefonNrError").innerHTML="";
    document.getElementById("EpostError").innerHTML="";
}