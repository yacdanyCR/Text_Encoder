let $inputText = document.querySelector('[data-text]');
const $encryptButton = document.querySelector('[data-encrypt]');
const $desencryptButton = document.querySelector('[data-desencrypt]');
const $showMessage = document.querySelector('[data-show]');
const span = document.createElement("span");


$encryptButton.addEventListener("click", (e) => {
    showResult(e, $inputText);
});

$desencryptButton.addEventListener("click", (e) => {
    showResult(e, $inputText);
});

const encryptWord = ($inputText) => {
    let encryptWord = $inputText.value;
    encryptWord = encryptWord.replaceAll(/e/g, "enter");
    encryptWord = encryptWord.replaceAll(/i/g, "imes");
    encryptWord = encryptWord.replaceAll(/a/g, "ai");
    encryptWord = encryptWord.replaceAll(/o/g, "ober");
    encryptWord = encryptWord.replaceAll(/u/g, "ufat");

    return encryptWord;
}

const desencryptWord = ($inputText) => {
    let encryptWord = $inputText.value;
    encryptWord = encryptWord.replaceAll(/enter/g, "e");
    encryptWord = encryptWord.replaceAll(/imes/g, "i");
    encryptWord = encryptWord.replaceAll(/ai/g, "a");
    encryptWord = encryptWord.replaceAll(/ober/g, "o");
    encryptWord = encryptWord.replaceAll(/ufat/g, "u");

    return encryptWord;
}

const showResult = (e, input) => {
    const buttonSelected = e.target.dataset.button;
    let word = "";

    switch (buttonSelected) {
        case "encrypt":
            word = encryptWord(input);
            break;

        default:
            word = desencryptWord(input);
            break;
    }
    $showMessage.innerHTML=""
    span.innerText = word;
    $showMessage.appendChild(span);
}