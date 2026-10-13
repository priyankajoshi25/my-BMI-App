function calculate(){
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let op = document.getElementById("operator").value;

    let result;
    
    if(op === "+"){
        result = num1 + num2;
    }else if(op === "-"){
        result = num1 - num2;
    }else if(op === "*"){
         result = num1 * num2;
    }else if(op === "/"){
        if(num2 ===0){
           document.getElementById("resultBox").innerText = "Cannot divide by zero!";
            return; 
        }
        result = num1 / num2;
    }else {
      document.getElementById("resultBox").innerText = ("Invalid operator! Use +, -, *, / only.")
        return;
    }
  document.getElementById("resultBox").innerText = ("Result: " + result);

 
}
