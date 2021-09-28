import "./styles.css";

let userInitPrice = document.getElementById("intiPrice");
let userQuantity = document.getElementById("quantity");
let userCurrentPrice = document.getElementById("curPrice");
let submitButton = document.getElementById("submitBtn");
let outputMessage = document.getElementById("output");

function submitHandle(e) {
  let initialPriceValue = userInitPrice.value;
  let QuantityValue = userQuantity.value;
  let currentPriceValue = userCurrentPrice.value;

  let valuesArray = [initialPriceValue, QuantityValue, currentPriceValue];
  console.log(valuesArray);

  if (valuesArray.indexOf("") > -1) {
    alert("Enter the values");
  } else {
    calculateProfitAndLoss(
      Number(initialPriceValue),
      Number(QuantityValue),
      Number(currentPriceValue)
    );
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  let profit = 0;
  let profitPercentage = 0;
  let loss = 0;
  let lossPercentage = 0;

  if (current > initial) {
    profit = ((current - initial) * quantity).toFixed(2);
    profitPercentage = Math.round((profit / initial) * 100);

    outputMessage.innerText = `Yayy its a profit.The profit amount is ${profit} and the profit precentage is ${profitPercentage}%`;
  }
  if (initial > current) {
    loss = ((initial - current) * quantity).toFixed(2);
    lossPercentage = Math.round((loss / initial) * 100);

    outputMessage.innerText = `Hmm a bad investment. The loss is ${loss} and loss precentage is ${lossPercentage}%`;
  }
  if (initial === current) {
    outputMessage.innerText = "No profit or loss";
  }
}

submitButton.addEventListener("click", submitHandle);
