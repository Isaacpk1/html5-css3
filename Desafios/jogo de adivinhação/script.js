let randomNumber = Math.floor(Math.random() * 100) + 1;
let chances = 10;
function jogo(){
    chances--;
    const input= document.getElementById("input")
    const valueinput= input.value
    const paragrafo= document.getElementById("retorno");
    while (chances > 0) {
        if (valueinput > randomNumber) {
            paragrafo.innerHTML = chances + " chances,esse número é maior.";
            paragrafo.style.color = "red";
            break
        }
        else if (valueinput < randomNumber){
            paragrafo.innerHTML = chances + " chances, esse número é menor.";
            paragrafo.style.color = "red";
            break
        }
        else{
            paragrafo.innerHTML = "Você acertou";
            paragrafo.style.color = "green"
            break
        }
    }
    if (valueinput !== randomNumber && chances === 0){
        paragrafo.innerHTML = "Suas chances acabaram, o número era " + randomNumber;
        paragrafo.style.color ="red"
    }
}