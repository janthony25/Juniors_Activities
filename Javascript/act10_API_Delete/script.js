const API_URL =
  "https://6916fd66a7a34288a27f26d4.mockapi.io/customer/customerDetails";

// Load customers when page loads
document.addEventListener("DOMContentLoaded", function () {
  loadCustomers();
});


// Get all customers
async function loadCustomers() {
  try {
    const response = await fetch(API_URL);
    const customers = await response.json();
    displayCustomers(customers);
  } catch (error) {
    console.error("Error:", error);
    alert("Error loading customers");
  }
}

// Display customers in the list
function displayCustomers(customers) {
  const listDiv = document.getElementById("customerList");

  if (customers.length === 0) {
    listDiv.innerHTML = "<p>No customers found</p>";
    return;
  }

  let html = '<table border="1" cellpadding="10">';
  html += "<tr><th>ID</th><th>Name</th><th>Address</th><th>Number</th></tr>";

  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    html += "<tr>";
    html += "<td>" + customer.id + "</td>";
    html += "<td>" + customer.name + "</td>";
    html += "<td>" + customer.address + "</td>";
    html += "<td>" + customer.number + "</td>";
    html += "</tr>";
  }

  html += "</table>";
  listDiv.innerHTML = html;
}
