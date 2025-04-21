document.addEventListener("DOMContentLoaded", () => {

  // search function to handle real-time search filtering.
  const search = (input, clearBtn, cards, attr, extraAttr = null) => {
    input.addEventListener("input", () => {
      const q = input.value.toLowerCase().replace(/\s+/g, ""); // remove all spaces & lowercase
      clearBtn.style.display = q ? "block" : "none"; // shows or hides the clear icon

      // Filters and displays only the cards whose specified attributes contain the normalized (lowercase, space-free) search query.
      cards.forEach(c => {
        const mainAttrVal = c.getAttribute(attr)?.toLowerCase().replace(/\s+/g, "") || "";
        const extraAttrVal = extraAttr ? c.getAttribute(extraAttr)?.toLowerCase().replace(/\s+/g, "") : "";
        const isMatch = mainAttrVal.includes(q) || extraAttrVal.includes(q);
        c.style.display = isMatch ? "block" : "none";
      });

    });

    //When the clear button is clicked: Clears the search field, Hides the clear button,Shows all cards again 
    clearBtn.addEventListener("click", () => {
      input.value = "";
      clearBtn.style.display = "none"; // This will hide the clear btn
      cards.forEach(c => c.style.display = "block"); // This will show the clear btn
    });
  };

  // Search in tables
  search(document.querySelector(".search-table"),
    document.querySelector(".sidebar .clear-search"),
    document.querySelectorAll(".table-card"),
    "data-table-name");

  // Search in Menus
  search(
    document.querySelector(".search-menu"),
    document.querySelector(".main .clear-search"),
    document.querySelectorAll(".menu-card"),
    "data-item-name",
    "data-category"
  );

  //About getting elements from the HTML and saving them for later use.
  const tables = document.querySelectorAll(".table-card");
  const menuItems = document.querySelectorAll(".menu-card");
  const modal = document.querySelector(".modal");
  const modalHeader = document.querySelector(".modal-header h3");
  const modalBody = document.querySelector(".modal-body");
  const closeModal = document.querySelector(".close-btn");

  let orders = {}; // Creates an empty object orders to store orders for each table.

  // It makes each menu item draggable and stores its name and price when dragging starts. 
  menuItems.forEach(item => {
    item.setAttribute("draggable", true); // Makes the menu item draggable
    item.addEventListener("dragstart", e => { // this runs when dragging starts on a menu item.
      e.dataTransfer.setData("text", JSON.stringify({ // simple format to store structured data using key–value pairs
        name: item.getAttribute("data-item-name"),
        price: parseInt(item.querySelector(".price").textContent) // converts string to number and store in the price
      }));
    });
  });

  // This makes each table accept drops from menu items, updates the orders for that table, updates totals, and allows opening a modal on click.
  tables.forEach(table => {
    table.addEventListener("dragover", e => e.preventDefault()); //Prevents default behavior to allow dropping on this table.
    table.addEventListener("drop", e => {
      e.preventDefault();
      const { name, price } = JSON.parse(e.dataTransfer.getData("text")); // unpacking it on the other side.
      const tableName = table.getAttribute("data-table-name");
      if (!orders[tableName]) orders[tableName] = [];
      const found = orders[tableName].find(item => item.name === name);
      if (found) found.qty++;
      else orders[tableName].push({ name, price, qty: 1 });
      updateTableSummary(tableName);
    });
    table.addEventListener("click", () => openModal(table.getAttribute("data-table-name")));
  });

  // Updates the UI for a table card with the total price and number of ordered items from the orders object.
  const updateTableSummary = tableName => {
    const table = [...tables].find(t => t.getAttribute("data-table-name") === tableName); //tables is a NodeList, so [...tables] converts it into a real array to use .find(...).
    const summary = orders[tableName] || [];
    const total = summary.reduce((acc, item) => acc + item.price * item.qty, 0); // Calculates the total amount:
    const count = summary.reduce((acc, item) => acc + item.qty, 0); // Calculates total quantity of all items
    table.querySelector(".rs").textContent = total; // Updates the table card’s .rs element (where total price is displayed).
    table.querySelector(".items").textContent = count; // Updates the table card’s .items element (where total items count is shown).
  };

  // Opens the modal for a selected table, highlights the active table card, and displays its current order.
  const openModal = tableName => {
    modal.style.display = "block"; // Makes the modal visible 
    modalHeader.textContent = `${tableName} | Order Details`;

    document.querySelectorAll(".table-card").forEach(t => {
      t.classList.remove("active");
      if (t.getAttribute("data-table-name") === tableName) {
        t.classList.add("active");  //The active class can be used to highlight the selected table visually.
      }
    });

    renderModalBody(tableName);
  };
  // When the close button is clicked, the modal is hidden and any highlighted table is deactivated.
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.querySelectorAll(".table-card").forEach(t => t.classList.remove("active"));
  });


  const renderModalBody = tableName => {   // It resets the modal body and inserts a heading row for the order list of the selected table.
    modalBody.innerHTML = `
      <div class="order-row header">
        <span>S.No</span>
        <span>Item</span>
        <span>Price</span>
        <span>Servings</span>
        <span>Delete</span>
      </div>
    `;

    const items = orders[tableName] || [];

    items.forEach((item, idx) => {   // For each item in the table's order, this creates a row in the modal with serial number, name, price, quantity input, and a delete icon.
      const row = document.createElement("div");
      row.className = "order-row";
      row.innerHTML = `
        <span>${idx + 1}</span>
        <span>${item.name}</span>
        <span class="unit-price">${item.price}</span>
        <input type="number" min="1" value="${item.qty}" class="qty-input">
        <span class="delete-btn" style="cursor:pointer;color:red;">🗑️</span>
      `;

      // When quantity is changed, it updates the item’s quantity, refreshes the table summary, and recalculates the modal total.
      const qtyInput = row.querySelector(".qty-input");
      qtyInput.addEventListener("input", e => {
        const newQty = Math.max(1, parseInt(e.target.value));
        item.qty = newQty;
        updateTableSummary(tableName);
        updateTotal();
      });

      // When the delete button is clicked, it removes the item from the order, updates the summary, and re-renders the modal.
      row.querySelector(".delete-btn").addEventListener("click", () => {
        orders[tableName].splice(idx, 1); // used to remove the elements from the array 
        updateTableSummary(tableName);
        renderModalBody(tableName);
      });

      modalBody.appendChild(row);
    });

    // display the total bill amount inside the modal.
    const totalRow = document.createElement("div");
    totalRow.className = "total-amount";
    totalRow.style = "margin-top: 10px; font-weight: bold;";
    totalRow.textContent = "Total: Rs 0";

    // button to finalize the bill
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close Session & Generate Bill";
    closeBtn.style = `
      margin-top: 15px;
      padding: 10px 15px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      width: 100%;
      font-weight: bold;
    `;
    // When the button is clicked, it checks if the current table has any items. If not, it alerts the user and exits.
    closeBtn.addEventListener("click", () => {
      const bill = orders[tableName] || [];
      if (bill.length === 0) {
        alert("No items to bill.");
        return;
      }

      // This code prepares a readable string showing all ordered items with their individual and total prices, and then shows it in an alert popup
      const details = bill.map(  // creates a new array by applying a function to each item in the original array.
        (item, i) => `${i + 1}. ${item.name} - Rs ${item.price} × ${item.qty} = Rs ${item.price * item.qty}`
      ).join("\n");

      const total = bill.reduce((acc, item) => acc + item.price * item.qty, 0); // Reduces Array to a Single Value
      alert(`Bill for ${tableName}:\n\n${details}\n\nTotal: Rs ${total}`);

      // This section finalizes the billing, clears the data, updates the view, and closes the modal.
      orders[tableName] = [];
      updateTableSummary(tableName);
      modal.style.display = "none";
      document.querySelectorAll(".table-card").forEach(t => t.classList.remove("active"));
    });
    modalBody.appendChild(totalRow);
    modalBody.appendChild(closeBtn);
    updateTotal();
  };

  // This function looks at each item in the bill, calculates the total amount based on price × quantity, and updates the total amount shown in the modal.
  const updateTotal = () => {
    let total = 0;
    document.querySelectorAll(".order-row:not(.header)").forEach(row => {
      const price = parseInt(row.querySelector(".unit-price").textContent);
      const qty = parseInt(row.querySelector(".qty-input").value);
      total += price * qty;
    });
    const totalDiv = document.querySelector(".total-amount");
    if (totalDiv) totalDiv.textContent = "Total: Rs " + total;
  };
});


/* 
`DOMContentLoaded` Event
Ensures the script runs **only after HTML is fully loaded**.


`search()` Function
Reusable function that:
- Filters cards (tables or menu items) **based on search input**
- Shows/hides clear button
- Resets all cards when clear button is clicked

Search Setup
Calls `search()` twice:
1. For table search (`.search-table`)
2. For menu search (`.search-menu`, supports category too)


Initial DOM Setup
Grabs all key elements:
- Tables, Menu items
- Modal & its parts
- Close button


`orders = {}`  
Stores all orders by table name.


 Menu Drag Setup
- Makes each `.menu-card` **draggable**
- On drag start, sets item name & price in `dataTransfer` (as JSON)


Table Drop Setup
- Enables each `.table-card` to accept drops
- On drop:
  - Extracts item info from drag
  - Adds or updates item in `orders[tableName]`
  - Calls `updateTableSummary()`
- Also opens modal on click


`updateTableSummary(tableName)`
Updates:
- Total price
- Total items
Shown on the table card


`openModal(tableName)`
- Opens the modal
- Highlights active table
- Calls `renderModalBody()`


Modal Close
Clicking `.close-btn`:
- Hides the modal
- Removes active table highlight

`renderModalBody(tableName)`
- Builds item rows (name, price, servings, delete button)
- Each row lets you:
  - Update quantity (auto-updates total)
  - Delete item (updates view & summary)
- Adds total amount row
- Adds “Generate Bill” button


`updateTotal()`
Recalculates & updates:
- Total bill shown in modal footer


 “Generate Bill” Button
On click:
- Shows bill in an alert (formatted with `.map()` and `.reduce()`)
- Resets order for that table
- Updates UI & closes modal

*/