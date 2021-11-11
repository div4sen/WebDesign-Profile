
function buttonClicked(val){    
    console.log("button clicked "+val);
  if(val == '='){
   var displayText = document.getElementById("screen").value
    var result = eval(displayText);    
    document.getElementById("screen").value = result;
    }else
    document.getElementById("screen").value += val;
}

function screenclear() {
    document.getElementById("screen").value = null
}