let paymentData = JSON.parse(localStorage.getItem("carsDetailsData"));

document.querySelector(".tripfare").innerText = "₹" + paymentData[0].rentprice;

let totalFare = parseInt(paymentData[0].rentprice) + 211;

document.querySelector(".totalfare").innerText = "₹" + "" + totalFare;

document.querySelector(".finalfare").innerText = "₹" + "" + totalFare;

document.querySelector("#pay-btn").innerText =
  "PROCEED TO PAY" + " " + "" + "₹" + " " + totalFare;

document.getElementById("carNameType").innerText =
  paymentData[0].carname + " " + 
  paymentData[0].transmission + " " +
  paymentData[0].fueltype;

localStorage.setItem("TOTALFARE", totalFare)