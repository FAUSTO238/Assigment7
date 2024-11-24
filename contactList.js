// File: contactList.js

// Initialize the contact list
const contactList = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" }
];

// Reference to the contact list table body
const contactListTable = document.getElementById("contact-list");

// Function to display contacts in the table
function displayContacts() {
    contactListTable.innerHTML = ""; // Clear current table rows
    contactList.forEach(contact => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
        `;
        contactListTable.appendChild(row);
    });
}

// Function to add a new contact from the input fields
function addContactFromInput() {
    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const email = document.getElementById("contact-email").value.trim();

    if (name && phone && email) {
        contactList.push({ name, phone, email });
        displayContacts();
        document.getElementById("output").textContent = `Contact added: ${name}`;
        // Clear input fields
        document.getElementById("contact-name").value = "";
        document.getElementById("contact-phone").value = "";
        document.getElementById("contact-email").value = "";
    } else {
        document.getElementById("output").textContent = "Please fill in all fields.";
    }
}

// Display the initial contact list on page load
displayContacts();
