let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four')
let five=document.getElementById('five')
let six=document.getElementById('six')
let seven=document.getElementById('seven')
let eight=document.getElementById('eight')
let nine=document.getElementById('nine')
let zero=document.getElementById('zero')
let dis=document.getElementById('dis');
let btn=document.getElementsByTagName("button")
let add=document.getElementById("add")
let minus=document.getElementById("minus")
let multiply=document.getElementById("multiply")
let divide=document.getElementById("divide")
let AC=document.getElementById("AC")
let back=document.getElementById("back")
let equal=document.getElementById("equal")
let pow=document.getElementById("pow")
let sqrt=document.getElementById("sqrt")
let deci=document.getElementById("deci")
let temp;

one.addEventListener("click",(e)=>{
    temp=one.innerText;
    dis.innerText=dis.innerText+temp;
})
two.addEventListener("click",(e)=>{
    temp=two.innerText;
    dis.innerText=dis.innerText+temp;
})
three.addEventListener("click",(e)=>{
    temp=three.innerText;
    dis.innerText=dis.innerText+temp;
})
four.addEventListener("click",(e)=>{
    temp=four.innerText;
    dis.innerText=dis.innerText+temp;
})
five.addEventListener("click",(e)=>{
    temp=five.innerText;
    dis.innerText=dis.innerText+temp;
})
six.addEventListener("click",(e)=>{
    temp=six.innerText;
    dis.innerText=dis.innerText+temp;
})
seven.addEventListener("click",(e)=>{
    temp=seven.innerText;
    dis.innerText=dis.innerText+temp;
})
eight.addEventListener("click",(e)=>{
    temp=eight.innerText;
    dis.innerText=dis.innerText+temp;
})
nine.addEventListener("click",(e)=>{
    temp=nine.innerText;
    dis.innerText=dis.innerText+temp;
})
zero.addEventListener("click",(e)=>{
    temp=zero.innerText;
    dis.innerText=dis.innerText+temp;
})

deci.addEventListener("click",(e)=>{
    temp=deci.innerText;
    dis.innerText=dis.innerText+temp;
})

add.addEventListener("click",(e)=>{
    temp=add.innerText;
    dis.innerText=dis.innerText+temp;
})
minus.addEventListener("click",(e)=>{
    temp=minus.innerText;
    dis.innerText=dis.innerText+temp;
})

multiply.addEventListener("click",(e)=>{
    temp=multiply.innerText;
    dis.innerText=dis.innerText+temp;
})
divide.addEventListener("click",(e)=>{
    temp=divide.innerText;
    dis.innerText=dis.innerText+temp;
})



back.addEventListener("click",(e)=>{
    dis.innerText=dis.innerText.slice(0,-1);
})

AC.addEventListener("click",()=>{
    dis.innerText=''
})

equal.addEventListener("click", () => {
    try {
        let expression = dis.innerText; // Get the expression from the display
        
        if (!expression) return; // If empty, do nothing
        
        // Evaluate the expression safely
        let result = eval(expression); // Alternative to eval()
        
        dis.innerText = result; 
    } catch (error) {
        dis.innerText = "Error"; 
    }
});
