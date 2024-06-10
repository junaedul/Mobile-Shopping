// my code 

// let firstPlus= document.getElementById("firstPlus"); //increment iphone 11
// let firstMinus= document.getElementById("firstMinus"); // decrement iphone 11
// let secondPlus= document.getElementById("secondPlus"); //increment iphone 11 case
// let secondMinus= document.getElementById("secondMinus"); // decrement iphone 11 case

// let firstInput = document.getElementById("firstInput");
// let firstInputInt=parseInt(firstInput.value);
// let unitprice=1219;

// firstPlus.addEventListener("click",function(){
//     firstInputInt++;
//     document.getElementById("firstInput").value = firstInputInt;
//     let firstPrice=unitprice*firstInputInt;
//     document.getElementById("firstPayment").innerText=firstPrice;
// })


// firstMinus.addEventListener("click",function(){
//     firstInputInt--;
//     document.getElementById("firstInput").value = firstInputInt;
//     let firstPrice=unitprice*firstInputInt;
//     document.getElementById("firstPayment").innerText=firstPrice;
// })

// let secondInput = document.getElementById("secondInput");
// let secondInputInt=parseInt(secondInput.value);
// let unitprice2=59;

// secondPlus.addEventListener("click",function(){
//     secondInputInt++;
//     document.getElementById("secondInput").value = secondInputInt;
//     let secondPrice=unitprice2*secondInputInt;
//     document.getElementById("secondPayment").innerText=secondPrice;
// })


// secondMinus.addEventListener("click",function(){
//     secondInputInt--;
//     document.getElementById("secondInput").value = secondInputInt;
//     let secondPrice=unitprice2*secondInputInt;
//     document.getElementById("secondPayment").innerText=secondPrice;
// })

// firstPlus.addEventListener("click",function(){
//     let subTotal = document.getElementById("subTotal");
//     let subTotalInt=parseInt(subTotal.value);
//     subTotalInt++;
//     document.getElementById("subTotal").value = subTotalInt;
//     let perPrice=1219;
//     let firstSubPrice=perPrice*subTotalInt;
//     document.getElementById("firstPayment").innerText=firstSubPrice;
// })


// jhankar's 1st code

// document.getElementById("secondPlus").addEventListener("click", function () {
//     let secondInput = document.getElementById("secondInput");
//     let secondInputInt = parseInt(secondInput.value);
//     secondInputInt++;
//     secondInput.value = secondInputInt;
//     let caseTotal = secondInputInt * 59;
//     document.getElementById("secondPayment").innerText = caseTotal;
// })

// document.getElementById("secondMinus").addEventListener("click", function () {
//     let secondInput = document.getElementById("secondInput");
//     let secondInputInt = parseInt(secondInput.value);
//     secondInputInt--;
//     secondInput.value = secondInputInt;
//     let caseTotal = secondInputInt * 59;
//     document.getElementById("secondPayment").innerText = caseTotal;
// })

//jhankar's 2nd code
//for case


// function productChange(isIncrease) {
//     let secondInput = document.getElementById("secondInput");
//     let secondInputInt = parseInt(secondInput.value);
//     if (isIncrease == true) {
//         secondInputInt++;
//     }
//     else if (isIncrease == false && secondInputInt > 0) {
//         secondInputInt--;
//     }
//     secondInput.value = secondInputInt;
//     let caseTotal = secondInputInt * 59;
//     document.getElementById("secondPayment").innerText = caseTotal;
// }

// //for phone
// document.getElementById("firstPlus").addEventListener("click", function () {
//     phoneChange(true);
// })
// document.getElementById("firstMinus").addEventListener("click", function () {
//     phoneChange(false);
// })

// function phoneChange(isIncrease) {
//     let firstInput = document.getElementById("firstInput");
//     let firstInputInt = parseInt(firstInput.value);
//     if (isIncrease == true) {
//         firstInputInt++;
//     }
//     else if (isIncrease == false && firstInputInt > 0) {
//         firstInputInt--;
//     }
//     firstInput.value = firstInputInt;
//     let phoneTotal = firstInputInt * 1219;
//     document.getElementById("firstPayment").innerText = phoneTotal;
// }


document.getElementById("secondPlus").addEventListener("click", function () {
    productChange("second", true);
})
document.getElementById("secondMinus").addEventListener("click", function () {
    productChange("second", false);
})
document.getElementById("firstPlus").addEventListener("click", function () {
    productChange("first", true);
})
document.getElementById("firstMinus").addEventListener("click", function () {
    productChange("first", false);
})

function productChange(product, isIncrease) {
    let productInput = document.getElementById(product + "Input");
    let productInputInt = parseInt(productInput.value);
    if (isIncrease == true) {
        productInputInt++;
    }
    else if (isIncrease == false && productInputInt > 0) {
        productInputInt--;
    }
    productInput.value = productInputInt;
    let productTotal = 0;
    if (product == "first") {
        productTotal = productInputInt * 1219;
    }
    else if (product == "second") {
        productTotal = productInputInt * 59;
    }
    document.getElementById(product + "Payment").innerText = productTotal;
    totalRate();
}

function totalRate() {
    let phoneRate = document.getElementById("firstInput");
    let phoneRateInt = parseInt(phoneRate.value);
    let caseRate = document.getElementById("secondInput");
    let caseRateInt = parseInt(caseRate.value);
    let totalPrice = phoneRateInt * 1219 + caseRateInt * 59;
    document.getElementById("subTotal").innerText = totalPrice;
    let tax= Math.round(totalPrice*0.1);
    document.getElementById("tax").innerText = tax;
    let grandTotal= totalPrice+tax;
    document.getElementById("total").innerText = grandTotal;
}