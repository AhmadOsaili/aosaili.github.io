
window.onload = function () {
    btnbigger.onclick = biggerText;
    ckbboldit.onchange = boldit;
}

function test() {

    let usrText = document.getElementById("text");
    alert(usrText.value);
    console.log("Hello");
}

function biggerText() {
    console.log(txtinput.style.fontSize);
    txtinput.style.textAlign = "right";
    txtinput.style.fontSize = parseInt(txtinput.style.fontSize) + 2 + "pt";
    boldit();


    setTimeout(biggerText, 550);
}

function boldit() {
    if (ckbboldit.checked == true) {
        txtinput.style.fontWeight = "bold";
        txtinput.style.color = "green";
        txtinput.style.textDecoration = "underline";
        txtinput.style.backgroundImage = "url(https://cdn4.iconfinder.com/data/icons/dollars-cents-glyph/48/Sed-42-512.png)";
    }
    else {
        txtinput.style.fontWeight = "inherit";
        txtinput.style.color = "inherit";
        txtinput.style.textDecoration = "inherit";
        txtinput.style.backgroundImage = "url()";
    }
}

function Malkovitch() {
    var arrayOfWords = $("#txtinput").val().split(' ');


    for (i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length >= 5) {
            arrayOfWords[i] = " Malkovitch";
        }
    }
    text.value = arrayOfWords.join(' ');
    //console.log(arrayOfWords.join(' '));
}

function Igpay(text1) {
    var arrayOfWords = $("#text").val().split(' ');
    let consonant = /^[bcdfghjklmnpqrstvwxys]/gi, match, matches = [];

    for (i = 0; i < arrayOfWords.length; i++) {
        if (match = arrayOfWords[i].match(consonant)) {
            console.log(match[1]);
            matches.push(match[1]);
        }
    }
}
