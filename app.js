function  updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let inputValue = parseInt(productInput.value);
    if (isIncreasing) {
        inputValue = inputValue + 1;
    }
    else if(inputValue > 0){

        inputValue = inputValue - 1;
    }
    productInput.value = inputValue;
    // update Total case price
   
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = inputValue * price;
    calculateSubTotal();
};
function getInputValue(procuct) {
     const procuctInput = document.getElementById(procuct + "-number");
    const procuctNumber = parseInt(procuctInput.value);
    return procuctNumber;
}
function calculateSubTotal() {
    const phoneTotal = getInputValue('phone') * 1200;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    document.getElementById("sub-total").innerText = subTotal;
    const taxAmount = subTotal / 10;
    document.getElementById('tax').innerText = taxAmount;
    document.getElementById('total-price').innerText = subTotal - taxAmount;
};

// phone
document.getElementById("phone-plus").addEventListener("click", function(){
    updateProductNumber("phone",1200, true);
});
document.getElementById("phone-minus").addEventListener("click", function(){
   updateProductNumber("phone",1200, false);
});
// handle case 
document.getElementById("case-plus").addEventListener("click", function(){
  updateProductNumber("case",59 , true);
    
});
document.getElementById("case-minus").addEventListener("click", function(){
    updateProductNumber("case", 59, false);
});