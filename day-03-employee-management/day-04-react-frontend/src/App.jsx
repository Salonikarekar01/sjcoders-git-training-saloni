import { useEffect, useState } from "react";
import "./index.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeList from "./components/EmployeeList";
import {
  fetchEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./services/employeeService";

const emptyForm = {
  employeeCode: "",
  fullName: "",
  email: "",
  phone: "",
  department: "",
  role: "",
  status: "ACTIVE",
};

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const loadEmployees = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchEmployees();
      setEmployees(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      if (editingId) {
        await updateEmployee(editingId, form);
        setSuccessMessage("Employee updated successfully.");
      } else {
        await addEmployee(form);
        setSuccessMessage("Employee added successfully.");
      }

      resetForm();
      loadEmployees();
    } catch (err) {
      setError(err.message);
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

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (!confirmed) return;

    setError(null);
    setSuccessMessage(null);

    try {
      await deleteEmployee(id);
      setSuccessMessage("Employee deleted successfully.");
      loadEmployees();
    } catch (err) {
      setError(err.message);
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

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <EmployeeForm
        form={form}
        editingId={editingId}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={resetForm}
      />

      <EmployeeSearch
        search={search}
        onSearchChange={setSearch}
        onRefresh={loadEmployees}
      />

      {loading ? (
        <p>Loading employees...</p>
      ) : (
        <EmployeeList
          employees={filteredEmployees}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;