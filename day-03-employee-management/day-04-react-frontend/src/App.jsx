import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/employee";

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleSearch = async (event) => {
    const value = event.target.value;
    setSearch(value);

    if (value.trim() === "") {
      fetchEmployees();
      return;
    }

    const filteredEmployees = employees.filter((employee) =>
      employee.fullName.toLowerCase().includes(value.toLowerCase())
    );

    setEmployees(filteredEmployees);
  };

  return (
    <div className="container">
      <h1>Employee Management</h1>

      <input
        type="text"
        placeholder="Search employees..."
        value={search}
        onChange={handleSearch}
      />

      <button onClick={fetchEmployees}>
        Refresh Employees
      </button>

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
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employeeCode}</td>
              <td>{employee.fullName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.department}</td>
              <td>{employee.role}</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;