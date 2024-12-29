let apple = 0

document.getElementById("B1").onclick = function(){
    apple =apple +1
    document.getElementById("label").textContent = apple
}

document.getElementById("B2").onclick = function(){
    apple =0
    document.getElementById("label").textContent = apple
}

document.getElementById("B3").onclick = function(){
    apple =apple -1
    document.getElementById("label").textContent = apple
}