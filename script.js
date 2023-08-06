const menuItems = document.querySelectorAll(".menu-items");
const clearBtn = document.querySelector("#clear_order");
const total = document.querySelector("#total");
const order = document.querySelector("#order");
const allOrders = document.querySelectorAll("#order")

menuItems.forEach((item) => {
  let imgsrc = "";
  let orderTotal = 0;

  let orderItem = document.createElement("option");

  item.addEventListener("mouseover", (event) => {
    if (event.target.matches("img")) {
      imgsrc = event.target.src;
      event.target.src = event.target.id;
    }
  });

  item.addEventListener("mouseout", (event) => {
    if (event.target.matches("img")) {
      event.target.src = imgsrc;
    }
  });

  item.addEventListener("click", (event) => {
    if (event.target.matches("img")) {
      itemName = event.target.alt;
      console.log("clicked " + itemName);

      if (itemName == "espresso") {
        let orderItem = document.createElement("option");
        orderItem.textContent = `$1.95 - ${itemName}`;
        order.appendChild(orderItem);
        orderItem.id = "orderItem"
        orderTotal += 1.95;
        total.innerText = "Your Total = " + orderTotal.toFixed(2)
      }
      else if (itemName == "latte") {
        let orderItem = document.createElement("option");
        orderItem.textContent = `$2.95 - ${itemName}`;
        order.appendChild(orderItem);
        
        orderTotal += 2.95;
        total.innerText = "Your Total = " + orderTotal.toFixed(2)
      }
      else if (itemName == "cappuccino") {
        let orderItem = document.createElement("option");
        orderItem.textContent = `$3.45 - ${itemName}`;
        order.appendChild(orderItem);
        orderTotal += 3.45;
        total.innerText = "Your Total = " + orderTotal.toFixed(2)
      }
      else if (itemName == "coffee") {
        let orderItem = document.createElement("option");
        orderItem.textContent = `$1.75 - ${itemName}`;
        order.appendChild(orderItem);
        orderTotal += 1.75;
        total.innerText = "Your Total = " + orderTotal.toFixed(2)
      }
      else if (itemName == "biscotti") {
        let orderItem = document.createElement("option");
        orderItem.textContent = `$1.95 - ${itemName}`;
        order.appendChild(orderItem);
        orderTotal += 1.95;
        total.innerText = "Your Total = " + orderTotal.toFixed(2)
      }
      else if (itemName == "scone") {
        let orderItem = document.createElement("option");
        orderItem.textContent = `$2.95 - ${itemName}`;
        order.appendChild(orderItem);
        
        orderTotal += 2.95;
        total.innerText = "Your Total = " + orderTotal.toFixed(2)
    
      }
    }
  });
});

clearBtn.addEventListener("click", () => {
  // Remove all options from the "order" select element
  order.innerHTML = "";

  // Reset the total value
  total.innerText = "Your Total = 0.00"
});

