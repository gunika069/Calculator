let Btns = document.getElementsByClassName("btn")
let AnswerData = document.getElementById("AnswerData")
let HistoryData = document.getElementById("HistoryData")


for(let i of Btns){

    i.addEventListener("click",(e)=>{
      let BtnText = i.innerText;
      if(BtnText == "C"){
        AnswerData.innerText = "";
      }
      else if(BtnText == "="){
        HistoryData.innerText = AnswerData.innerText;
        let Result = eval(AnswerData.innerText);
        AnswerData.innerText = Result;
      }
      else if(BtnText == "x"){
        AnswerData.innerText += "*";
      }
      else{
        AnswerData.innerText += BtnText;
      }
    })
}