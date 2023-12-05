const questionItems = document.querySelectorAll('.question-item');
const answerBoxs = document.querySelectorAll('.answer-box');

questionItems.forEach((item)=>{
    item.addEventListener('click',()=>{
        const answerBox = item.querySelector(".answer-box");
        const asnwerText = item.querySelector(".answer-text");
        //GET EACH HEIGHT ANSER
        const answerHeight = asnwerText.getBoundingClientRect().height;

        if(item.classList.contains("showAnswer")){
            resetAnswer();
        }else{
            resetAnswer();
            answerBox.style.height = `${answerHeight}px` ;
            item.classList.add('showAnswer')
        }
    })
})
// RESET ANSWER WHEN CLICK TO ANOTHER QUESTION
const resetAnswer = () =>{
    answerBoxs.forEach(answer =>{
        const questionItem = answer.parentElement;
        questionItem.classList.remove('showAnswer');
        answer.style.height = 0 ;
    })
}