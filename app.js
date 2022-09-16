const input_txt=document.querySelector("#txt-input");
const btn_translate=document.querySelector("#output-btn");
const output_place=document.querySelector("#output-here");

var serverURL="https://api.funtranslations.com/translate/pirate.json";
function getURL(text){
    return serverURL + "?" + "text=" + text;
}
function onClickButton(){
    var inputValue=input_txt.value;
    fetch(getURL(inputValue))
        .then(response => response.json())
        .then(json => output_place.innerText = json.contents.translated
        );
    
    // output_place.innerText=json.contents.translated;
}

btn_translate.addEventListener('click',onClickButton);