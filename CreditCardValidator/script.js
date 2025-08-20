document.getElementById("cardNumber").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, ""); // remove non-digits
  let formatted = value.replace(/(.{4})/g, "$1 ").trim(); // insert space after 4 digits
  e.target.value = formatted;
});

function luhnAlgorithm(num) {
  let arr = num.replace(/\s+/g, "").split("").reverse().map(x => parseInt(x));
  let sum = arr.reduce((acc, val, i) => {
    if (i % 2 !== 0) {
      val *= 2;
      if (val > 9) val -= 9;
    }
    return acc + val;
  }, 0);
  return sum % 10 === 0;
}

function validateCard() {
  let cardNumber = document.getElementById("cardNumber").value.replace(/\s+/g, "").trim();
  let result = document.getElementById("result");

  if (cardNumber === "" || !/^\d+$/.test(cardNumber)) {
    result.innerHTML = "⚠️ Please enter a valid numeric card number!";
    result.style.color = "orange";
    return;
  }

  if (luhnAlgorithm(cardNumber)) {
    result.innerHTML = "✅ Valid Credit Card Number";
    result.style.color = "green";
  } else {
    result.innerHTML = "❌ Invalid Credit Card Number";
    result.style.color = "red";
  }
}
