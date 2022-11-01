let $inputText = document.querySelector('[data-text]');
const $encryptButton = document.querySelector('[data-encrypt]');

$encryptButton.addEventListener("click", (e) => {

    console.log(encryptWord($inputText))
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