function EmployeeList({ employees, onEdit, onDelete }) {
    return (
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

                        <td>
                            <button onClick={() => onEdit(employee)}>Edit</button>
                            <button onClick={() => onDelete(employee.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EmployeeList;