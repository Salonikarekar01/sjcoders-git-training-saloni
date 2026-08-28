import { useEffect, useState } from "react";
import "./index.css";

const API_URL = "http://localhost:8080/employee";

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    employeeCode: "",
    fullName: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    status: "ACTIVE",
  });

  const fetchEmployees = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      employeeCode: "",
      fullName: "",
      email: "",
      phone: "",
      department: "",
      role: "",
      status: "ACTIVE",
    });

    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
      } else {
        await fetch(`${API_URL}/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
      }

      resetForm();
      fetchEmployees();
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  const handleEdit = (employee) => {
    setEditingId(employee.id);

    setForm({
      employeeCode: employee.employeeCode,
      fullName: employee.fullName,
      email: employee.email,
      phone: employee.phone,
      department: employee.department,
      role: employee.role,
      status: employee.status,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Employee Management</h1>

      <form onSubmit={handleSubmit}>
        <h2>{editingId ? "Edit Employee" : "Add Employee"}</h2>

        <div className="form-grid">
          <input
            name="employeeCode"
            placeholder="Employee Code"
            value={form.employeeCode}
            onChange={handleChange}
            required
          />

          <input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            required
          />

          <input
            name="role"
            placeholder="Role"
            value={form.role}
            onChange={handleChange}
            required
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>
        </div>

        <button type="submit">
          {editingId ? "Update Employee" : "Add Employee"}
        </button>

        {editingId && (
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      <div className="search-section">
        <input
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={fetchEmployees}>
          Refresh Employees
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Code</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employeeCode}</td>
              <td>{employee.fullName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.department}</td>
              <td>{employee.role}</td>
              <td>{employee.status}</td>

              <td>
                <button onClick={() => handleEdit(employee)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;