function  updateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + "-number");
    let inputValue = parseInt(caseInput.value);
    if (isIncreasing) {
        inputValue = inputValue + 1;
    }
    else if(inputValue > 0){

        inputValue = inputValue - 1;
    }
    caseInput.value = inputValue;
    // update Total case price
   
    const casePrice = document.getElementById(product + '-price');
    casePrice.innerText = inputValue * price;
    // return inputValue;
}
// phone
document.getElementById("phone-plus").addEventListener("click", function(){
    updateCaseNumber("phone",1200, true);
});
document.getElementById("phone-minus").addEventListener("click", function(){
   updateCaseNumber("phone",1200, false);
});
// handle case 
document.getElementById("case-plus").addEventListener("click", function(){
  updateCaseNumber("case",59 , true);
    
});
document.getElementById("case-minus").addEventListener("click", function(){
    updateCaseNumber("case", 59, false);
});