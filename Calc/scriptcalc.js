let input = document.querySelector("#input")
let button = document.querySelectorAll(".button")
let operation = document.querySelectorAll(".operation")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
input.focus()
input.addEventListener("keyup", NumLock)
clear.addEventListener("click", clearfunc)
equal.addEventListener("click", eq)
let temp=0
let res=0
let textOrNum =0// переменная хранит информацию откуда вводится арифметическое действие
let op =" " // переменная знака арифмитического действия
for(let elem of button){
    elem.addEventListener("click", write)
}
for(let elem of operation){
    elem.addEventListener("click", oper)
}
function write(){
    input.value+=this.textContent
}
function oper(){
   if (textOrNum==1){op=event.key
console.log("NUM " + op)}
   else
    {op=this.textContent
    
    console.log("TEXT" + op)}
 temp=parseFloat (input.value)
    input.value=" "
    

}
function eq(){
if (op=="+")
     {res=Number (temp)+Number ( (input.value))}
    else if (op=="-")
    {res=Number (temp)-Number ( (input.value))}
        else if (op=="*")
        {res=Number (temp)*Number ( (input.value))}
            else if (op=="/")
            {res=Number (temp)/Number ( (input.value))}
            input.value=" "
            input.value=res             
}
function clearfunc(){
    input.value=" "
    input.focus()
}
  function NumLock()
  {
  textOrNum=1
  console.log(event.key);
  if (event.key==="+"||event.key==="-"||event.key==="*"||event.key==="/"){oper()}
  else if (event.key=="Enter"){eq()}
}


