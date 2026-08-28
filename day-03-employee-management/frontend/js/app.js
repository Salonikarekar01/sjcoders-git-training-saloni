const API_URL = "http://localhost:8080/employee";


async function loadEmployees() {

    try {

        const response = await fetch(API_URL);

        const employees = await response.json();

        renderEmployeeTable(employees);

    } catch (error) {

        console.error("Error loading employees:", error);

    }

}


function renderEmployeeTable(employees) {

    const tableBody =
        document.getElementById("employeeTableBody");

    tableBody.innerHTML = "";

    employees.forEach(employee => {

        const row = `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.employeeCode}</td>
                <td>${employee.fullName}</td>
                <td>${employee.email}</td>
                <td>${employee.phone}</td>
                <td>${employee.department}</td>
                <td>${employee.role}</td>
                <td>${employee.status}</td>
            </tr>
        `;

        tableBody.innerHTML += row;

    });

}


loadEmployees();

document.getElementById("employeeForm")
    .addEventListener("submit", async function (event) {

        event.preventDefault();

        const employee = {
            employeeCode: document.getElementById("employeeCode").value,
            fullName: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            department: document.getElementById("department").value,
            role: document.getElementById("role").value,
            status: document.getElementById("status").value
        };

        try {

            const response = await fetch(API_URL + "/add", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(employee)

            });

            if (response.ok) {

                showMessage(
                    "Employee saved successfully!",
                    "success"
                );

                document.getElementById("employeeForm").reset();

                loadEmployees();

            } else {

                showMessage(
                    "Failed to save employee.",
                    "danger"
                );

            }

        } catch (error) {

            console.error("Error saving employee:", error);

            showMessage(
                "Error connecting to the server.",
                "danger"
            );

        }

    });


function showMessage(text, type) {

    const message = document.getElementById("message");

    message.innerHTML = `
        <div class="alert alert-${type}">
            ${text}
        </div>
    `;

}

document.getElementById("searchInput")
    .addEventListener("input", async function () {

        const searchText = this.value.toLowerCase();

        try {

            const response = await fetch(API_URL);

            const employees = await response.json();

            const filteredEmployees = employees.filter(employee =>
                employee.employeeCode.toLowerCase().includes(searchText) ||
                employee.fullName.toLowerCase().includes(searchText) ||
                employee.email.toLowerCase().includes(searchText) ||
                employee.department.toLowerCase().includes(searchText) ||
                employee.role.toLowerCase().includes(searchText) ||
                employee.status.toLowerCase().includes(searchText)
            );

            renderEmployeeTable(filteredEmployees);

        } catch (error) {

            console.error("Error searching employees:", error);

        }

    });