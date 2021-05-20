alert("Hi Buddy!")
alert("Click the given buttons to calculate")
confirm("Are you ready?")

function add(){
   var num1=parseInt(prompt("What is first number?" ,"0"))
   var num2=parseInt(prompt("What is second number?", "0"))
   var num3 = num1+num2;
   alert(`Your answer is ${num1+num2}`);
   document.getElementsByTagName('button');
}
function sub(){
   var num1=parseInt(prompt("What is first number?" ,"0"))
   var num2=parseInt(prompt("What is second number?", "0"))
   var num3 = num1-num2;
   alert(`Your answer is ${num1-num2}`);
   document.getElementsById('sub');
}
function multiply(){
   var num1=parseInt(prompt("What is first number?" ,"0"))
   var num2=parseInt(prompt("What is second number?", "0"))
   var num3 = num1*num2;
   alert(`Your answer is ${num1*num2}`);
   document.getElementsById('multiply');
}
function division(){
   var num1=parseInt(prompt("What is first number?" ,"0"))
   var num2=parseInt(prompt("What is second number?", "0"))
   var num3 = num1/num2;
   alert(`Your answer is ${num1/num2}`);
   document.getElementsById('division');
}