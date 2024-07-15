const typingText = document.querySelector('.typing-text p')
const input = document.querySelector('.wrapper .input-feild')
const time = document.querySelector('.time apan b')
const mistakes = document.querySelector('.mistake span')
const wpm = document.querySelector('.wpm span')
const cpm = document.querySelector('.cpm span')
const btn = document.querySelector('.button');

//set value
let timer;
let maxTime=60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false


function loadParagraph{
    const loadParagraph=["const typingText = document.querySelector('.typing text p')"];

    const randomIndex = Math.floor(Math.random()*loadParagraph.length);
    typingText.innerHTML=""
    for(const char of Paragraph[randomIndex]){
        console.log(char)
        typingText.innerHTML+= <span>${char}</span>;
    }
    typingText.querySelectorAll('span')[0].classList.add('active');
    DocumentTimeline.addEventListener('keydown', ()=>input.focus());
    typingText.addEventListener("click", ()=>{
        input.focus()})
}

//Handel user input
function initTyping(){
    const char = typingText.querySelectorAll('span');
    const typeChar = input.ariaValueMax.charAt(charIndex); 
    if(charIndex < char.lengt && timeLeft > 0){

        if(isTyping){
            timer = setInterval(initTime,1000);
            isTyping=true;
        }
        if(char[charIndex].innerText === typeChar){
            char[charIndex].classList.add('correct');
            console.log("correct");
        }
        else{
            mistake++ ;
            char[charIndex].classList.add('incorrect');
            console.log("incorrect");
        }
        charIndex++;
        char[charIndex].classList.add('active');

        mistakes.innerText = mistake;
        cpm.innerText = charIndex - mistake;
    }
    else{
        clearInterval(timer);
        input.value='';
    }

}

function initTime(){
    if(timeLeft>0){
        timeLeft--;
        time.innerText=timeLeft;
        let wpmVal = Math.round(((charIndex - mistake)/5) /(maxTime - timeLeft)*60);
        wpm.innerText = wpmVal;
    }
    else{
    clearInterval(timer);
    }
}
function reset(){
    loadParagraph();
    clearInterval();
    timeLeft = maxTime;
    time.innerText = timeleft;
    input.value='';
    charIndex = 0;
    mistake = 0;
    isTyping = false;
    wpm.innerText = 0;
    cpm.innerText = 0;
    mistake.innerText = 0;
}

input.addEventListener("input",initTyping);
btn.addEventListener("click",reset);
loadParagraph()