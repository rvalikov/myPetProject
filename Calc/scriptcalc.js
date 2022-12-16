let input = document.querySelector("#input")
let sqrt = document.querySelector(".sqrt")
let button = document.querySelectorAll(".button")
let operation = document.querySelectorAll(".operation")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
input.focus()
input.addEventListener("keyup", NumLock)
sqrt.addEventListener("click", sqrtfunc)
clear.addEventListener("click", clearfunc)
equal.addEventListener("click", eq)
let temp=0
let res=0 //используется при вычислении квадратного корня
let op =" " // переменная знака арифмитического действия
for(let elem of button){
    elem.addEventListener("click", write)
}
for(let elem of operation){
    elem.addEventListener("click", oper)
}
function NumLock()
{
console.log(event.key);
if (event.key==="+"||event.key==="-"||event.key==="*"||event.key==="/"){Numoper()}
else if (event.key=="Enter"){eq()}
}
function write(){
    input.value+=this.textContent
}
function Numoper(){        
        op=event.key
 console.log("NUM " + op)
 tempfunc()
 input.focus()
}
    function oper()
     {       
        op=this.textContent
        tempfunc()
        input.focus()
     }
    function tempfunc(){
 temp=parseFloat (input.value)
    input.value=" "
    input.focus()
}
function sqrtfunc(){
    temp=parseFloat(input.value)
    res=Math.pow(temp,(1/2))
    input.value=res
    input.focus()
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
            input.focus()
         input.focus()
}
function clearfunc(){
    input.value=" "
    input.focus()
}
 
