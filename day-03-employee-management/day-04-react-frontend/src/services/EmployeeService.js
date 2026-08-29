const API_URL = "http://localhost:8080/employee";

export async function fetchEmployees() {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Unable to load employees");
    return response.json();
}

export async function addEmployee(employee) {
    const response = await fetch(`${API_URL}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
    });
    if (!response.ok) throw new Error("Unable to add employee");
}

export async function updateEmployee(id, employee) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
    });
    if (!response.ok) throw new Error("Unable to update employee");
}

export async function deleteEmployee(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error("Unable to delete employee");
}