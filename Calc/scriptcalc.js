let input = document.querySelector("#input")
let button = document.querySelectorAll(".button")
let operation = document.querySelectorAll(".operation")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
clear.addEventListener("click", clearfunc)
equal.addEventListener("click", eq)
let temp=0
let op
for(let elem of button){
    console.log(elem.textContent)
    elem.addEventListener("click", write)
}
for(let elem of operation){
    elem.addEventListener("click", oper)
}
function write(){
    input.value+=this.textContent
}
function oper(){
    op=this.textContent
    console.log(op)
     temp=parseFloat (input.value)
    input.value=" "

}
function eq(){
if (op=="+")
     {res=Number (temp)+Number ( (input.value))
    input.value=res}
    else if (op=="-")
    {res=Number (temp)-Number ( (input.value))
        input.value=res}
        else if (op=="*")
        {res=Number (temp)*Number ( (input.value))
            input.value=res}
            else if (op=="/")
            {res=Number (temp)/Number ( (input.value))
                input.value=res}
               
}
function clearfunc(){
    input.value=" "
}


