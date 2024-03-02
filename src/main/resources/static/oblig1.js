let billetter= [];
let billettlisteElement = document.getElementById("billettliste");
function generateErrorMessage(field) {
    return `<span class="error-message">Må skrive noe inn i ${field}</span>`;
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function kjopticket() {
    let billett = {
        film: document.getElementById("filmer").value,
        antall: document.getElementById("Antall").value,
        fornavn: document.getElementById("Fornavn").value,
        etternavn: document.getElementById("Etternavn").value,
        telefonnr: document.getElementById("TelefonNr").value,
        epost: document.getElementById("Epost").value,
    };
    //Validering
    if (!validateEmail(billett.epost)) {
        document.getElementById("EpostError").innerHTML = generateErrorMessage('epost');
        return;
    } else {
        document.getElementById("EpostError").innerHTML = "";
    }

    if(!billett.antall){
        document.getElementById("AntallError").innerHTML = generateErrorMessage('antall');
        return;
    } else {
        document.getElementById("AntallError").innerHTML = "";
    }

    if(!billett.fornavn){
        document.getElementById("FornavnError").innerHTML = generateErrorMessage('fornavnet');
        return;
    } else {
        document.getElementById("FornavnError").innerHTML = "";
    }

    if(!billett.etternavn){
        document.getElementById("EtternavnError").innerHTML = generateErrorMessage('etternavnet');
        return;
    } else {
        document.getElementById("EtternavnError").innerHTML = "";
    }

    if(!billett.telefonnr){
        document.getElementById("TelefonNrError").innerHTML = generateErrorMessage('telefonnr');
        return;
    } else {
        document.getElementById("TelefonNrError").innerHTML = "";
    }
    //Hvis alle valideringer passerer, legges til billetten i arrayet
    billetter.push(billett);
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
    billettlisteElement.innerHTML = ut;
}

function AltDelete(){
    billettlisteElement.innerHTML = "";
    billetter = [];
    nullstillFeilmeldinger();
}

function nullstillFeilmeldinger(){
    document.getElementById("AntallError").innerHTML="";
    document.getElementById("FornavnError").innerHTML="";
    document.getElementById("EtternavnError").innerHTML="";
    document.getElementById("TelefonNrError").innerHTML="";
    document.getElementById("EpostError").innerHTML="";
}