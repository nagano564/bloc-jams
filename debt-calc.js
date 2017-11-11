function debtRatio(x, y){
    
    var ratio = ((x/y) * 100);
    return ratio.toFixed(2)
}

function postDebt(percent){
    var answer = document.getElementById("outDebt");
    
    answer.innerText = "%" + percent;
    
}

var debtButton = document.getElementById("btnDebt");
debtButton.onclick = function(){
    console.log("debt")
};