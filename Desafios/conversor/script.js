function converter(){
    let numero = document.getElementById("numero");
    let userInput = document.getElementById("input").value;
    let options = document.getElementById("opçoes1").value;
    let x = 0
    if (options === "1"){
       x = userInput / 1000;
    }
    else if (options === "2"){
        x = userInput * 1000;
    }
    else if (options === "3"){
        x = userInput / 1000;
    }
    else if (options === "4"){
        x = userInput / 10000000;
    }
    else if (options === "5"){
        x = userInput * 1000;
    }
    else {
        x = userInput * 1000000;
    }
    numero.innerHTML = x;
}