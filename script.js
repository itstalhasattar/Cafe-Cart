// Select all elements with the class "menu-items" (presumably, the menu items with images)
const menuItems = document.querySelectorAll(".menu-items");

// Select the "Clear Order" button
const clearBtn = document.querySelector("#clear_order");

// Select the element to display the total order amount
const total = document.querySelector("#total");

// Select the "order" select element to display the user's order
const order = document.querySelector("#order");

// Select the "order_form" element (a form that wraps the entire order process)
const orderForm = document.querySelector("#order_form");

// Initialize a variable to keep track of the total cost of the user's order
let orderTotal = 0;

// Add event listeners to each of the menu items
menuItems.forEach((item) => {
  // Variable to store the original image source
  let imgsrc = "";
  orderTotal = 0;
  // Event listener for mouseover (when the user hovers over a menu item image)
  item.addEventListener("mouseover", (event) => {
    if (event.target.matches("img")) {
      // Save the original image source in the "imgsrc" variable
      imgsrc = event.target.src;
      // Change the image source to the "id" attribute of the image (hover effect)
      event.target.src = event.target.id;
    }
  });
  // Event listener for mouseout (when the user moves the mouse out of a menu item image)
  item.addEventListener("mouseout", (event) => {
    if (event.target.matches("img")) {
      // Restore the original image source from the "imgsrc" variable
      event.target.src = imgsrc;
    }
  });

  // Event listener for click (when the user clicks on a menu item image)
  item.addEventListener("click", (event) => {
    if (event.target.matches("img")) {
      // Get the name of the selected item from the "alt" attribute of the image
      itemName = event.target.alt;

      // Add the selected item to the "order" select element based on its name
      if (itemName == "espresso") {
        let orderItem = document.createElement("option");
        orderItem.textContent = `$1.95 - ${itemName}`;
        order.appendChild(orderItem);
        orderItem.id = "orderItem";
        orderTotal += 1.95; //Update the order total
        total.innerText = "Your Total : " + "$" + orderTotal.toFixed(2);
      } else if (itemName == "latte") {
        let orderItem = document.createElement("option");
        orderItem.textContent = `$2.95 - ${itemName}`;
        order.appendChild(orderItem);
        orderTotal += 2.95;
        total.innerText = "Your Total : " + "$" + orderTotal.toFixed(2);
      } else if (itemName == "cappuccino") {
        let orderItem = document.createElement("option");
        orderItem.textContent = `$3.45 - ${itemName}`;
        order.appendChild(orderItem);
        orderTotal += 3.45;
        total.innerText = "Your Total : " + "$" + orderTotal.toFixed(2);
      } else if (itemName == "coffee") {
        let orderItem = document.createElement("option");
        orderItem.textContent = `$1.75 - ${itemName}`;
        order.appendChild(orderItem);
        orderTotal += 1.75;
        total.innerText = "Your Total : " + "$" + orderTotal.toFixed(2);
      } else if (itemName == "biscotti") {
        let orderItem = document.createElement("option");
        orderItem.textContent = `$1.95 - ${itemName}`;
        order.appendChild(orderItem);
        orderTotal += 1.95;
        total.innerText = "Your Total : " + "$" + orderTotal.toFixed(2);
      } else if (itemName == "scone") {
        let orderItem = document.createElement("option");
        orderItem.textContent = `$2.95 - ${itemName}`;
        order.appendChild(orderItem);
        orderTotal += 2.95;
        total.innerText = "Your Total : " + "$" + orderTotal.toFixed(2);
      }
    }
  });
});
// Event listener for the "Clear Order" button click
clearBtn.addEventListener("click", () => {
  // Remove all options from the "order" select element
  order.innerHTML = "";

  // Reset the total value
  orderTotal = 0;
  // Update the total display to show no items ordered yet
  total.innerText = "Your Total : " + "$" + orderTotal;
});

// Event listener for form submission ( when the user submits the order_form)
orderForm.addEventListener("submit", (event) => {
  // Check if the orderTotal is 0 (no items have been added)
  if (orderTotal === 0) {
    // Display an alert to ask the user to add items to continue
    alert("Please Add Item To Continue!");
    // Prevent the form submission
    event.preventDefault();
  }
});
