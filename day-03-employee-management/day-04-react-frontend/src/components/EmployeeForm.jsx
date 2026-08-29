function EmployeeForm({ form, editingId, onChange, onSubmit, onCancel }) {
    return (
        <form onSubmit={onSubmit}>
            <h2>{editingId ? "Edit Employee" : "Add Employee"}</h2>

            <div className="form-grid">
                <input
                    name="employeeCode"
                    placeholder="Employee Code"
                    value={form.employeeCode}
                    onChange={onChange}
                    required
                />

                <input
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={onChange}
                    required
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={onChange}
                    required
                />

                <input
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={onChange}
                    required
                />

                <input
                    name="department"
                    placeholder="Department"
                    value={form.department}
                    onChange={onChange}
                    required
                />

                <input
                    name="role"
                    placeholder="Role"
                    value={form.role}
                    onChange={onChange}
                    required
                />

                <select name="status" value={form.status} onChange={onChange}>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                </select>
            </div>

            <button type="submit">
                {editingId ? "Update Employee" : "Add Employee"}
            </button>

            {editingId && (
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            )}
        </form>
    );
}

export default EmployeeForm;