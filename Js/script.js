// from header section buy ticket btn to main ticket details section

document.addEventListener("DOMContentLoaded", function () {
  const buyTicketsButton = document.getElementById("buy-ticket-btn");
  buyTicketsButton.addEventListener("click", function () {
    const ticketDetailsSection = document.getElementById(
      "ticket-details-section"
    );
    ticketDetailsSection.scrollIntoView({ behavior: "smooth" });
  });
});

// phone input field validation
function validatePhone() {
  const phoneInputField = document.getElementById("phone");
  phoneInputField.addEventListener("input", function () {
    const phoneNumValid = /^\d+$/.test(phoneInputField.value.trim());
    const nextButton = document.getElementById("next-btn");
    if (count > 0 && phoneNumValid) {
      nextButton.removeAttribute("disabled");
    } else {
      nextButton.setAttribute("disabled", true);
    }
  });
}

// get seat
let count = 0;
const seatsContainer = document.getElementsByClassName("seat");
const seats = document.querySelectorAll(".seat");
for (const seat of seats) {
  seat.addEventListener("click", function(e) {
    if(count < 4){
    count++;
    e.target.style.backgroundColor = "#1DD100";
    e.target.style.color = "white";

    document.getElementById("seat-counter").innerText = count;

    validatePhone();

    const seatLeft = document.getElementById("seat-left").innerText;
    const convertedSeatLeft = parseInt(seatLeft);
    const remainingSeat = convertedSeatLeft - 1;
    document.getElementById("seat-left").innerText = parseInt(remainingSeat);

    //append seat num
    const elementText = e.target.innerText;
    const appendSeat = document.getElementById("append-seat");
    const div = document.createElement("div");
    div.classList.add("flex", "justify-between", "items-center");
    const p1 = document.createElement("p");
    p1.innerText = elementText;
    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    const p3 = document.createElement("p");
    p3.innerText = 550;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    appendSeat.appendChild(div);

    // total Price
    const price = p3.innerText;
    const convertedPrice = parseInt(price);

    totalPrice("total-price", parseInt(convertedPrice));

    setGrandTotalCost();
    }
  });
}

function totalPrice(elementId, value) {
  const totalPrice = document.getElementById(elementId).innerText;
  const convertedTotalPrice = parseInt(totalPrice);
  const sum = convertedTotalPrice + parseInt(value);
  setInnerText("total-price", sum);
}

function setGrandTotalCost() {
  const totalPrice = document.getElementById("total-price").innerText;
  const convertedTotalPrice = parseInt(totalPrice);

  setInnerText("grandtotal-price", convertedTotalPrice);
  if (count == 4) {
    alert("You can apply our coupons to get discount");
    const applyButton = document.getElementById("apply-btn");
    applyButton.removeAttribute("disabled");

    applyButton.addEventListener("click", function () {
      const inputField = document.getElementById("input-field");
      const inputFieldText = inputField.value;
      if (inputFieldText === "NEW15" || inputFieldText === "Couple 20") {
        const inputContainer = document.getElementById("input-container");
        inputContainer.classList.add("hidden");
        if (inputFieldText === "NEW15") {
          //    const discountPrice = setInnerText('grandtotal-price',convertedTotalPrice * 0.15);
          //    console.log(typeof discountPrice);
          const discountPrice = convertedTotalPrice * 0.15;

          const discountContainer =
            document.getElementById("discount-container");
          discountContainer.innerHTML = "";
          const p1 = document.createElement("p");
          p1.innerText = "Discount Price";

          const p2 = document.createElement("p");
          p2.innerText = "BDT" + " " + parseInt(discountPrice);

          discountContainer.appendChild(p1);
          discountContainer.appendChild(p2);

          setInnerText(
            "grandtotal-price",
            parseFloat(convertedTotalPrice - discountPrice)
          );
        } else if (inputFieldText === "Couple 20") {
          const discountPrice = convertedTotalPrice * 0.2;
          const discountContainer =
            document.getElementById("discount-container");
          discountContainer.innerHTML = "";
          const p1 = document.createElement("p");
          p1.innerText = "Discount Price";

          const p2 = document.createElement("p");
          p2.innerText = "BDT" + " " + parseInt(discountPrice);

          discountContainer.appendChild(p1);
          discountContainer.appendChild(p2);

          setInnerText(
            "grandtotal-price",
            parseInt(convertedTotalPrice - discountPrice)
          );
        }
      } 
      else {
        alert("Please insert given coupon in correct format");
      }
    });
  } 
  else if (count < 4) {
    setInnerText("grand-total", parseInt(convertedTotalPrice));
  } 
  else{
    alert("Per person can buy only 4 ticket");
    return;
  }
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

