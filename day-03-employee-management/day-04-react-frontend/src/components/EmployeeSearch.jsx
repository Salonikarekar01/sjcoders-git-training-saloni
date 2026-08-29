function EmployeeSearch({ search, onSearchChange, onRefresh }) {
    return (
        <div className="search-section">
            <input
                placeholder="Search employees..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />

            <button onClick={onRefresh}>Refresh Employees</button>
        </div>
    );
}

export default EmployeeSearch;