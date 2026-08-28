package com.sjcoders.training.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class EmployeeAddRequest {
    @NotBlank(message = "Employee code is required")
    private String employeeCode;

    @NotBlank(message = "Full name is required")
    private String fullName;

    @NotBlank(message = "Email is required")
    @Email(message = "Please enter a valid email")
    private String email;

    @NotNull(message = "Phone number is required")
    private Long phone;

    @NotBlank(message = "Department is required")
    private String department;

    @NotBlank(message = "Role is required")
    private String role;

    @NotBlank(message = "Status is required")
    @Pattern(regexp = "ACTIVE|INACTIVE", message = "Status must be ACTIVE or INACTIVE")
    private String status;

    public EmployeeAddRequest() {
    }

    public EmployeeAddRequest(@NotBlank(message = "Employee code is required") String employeeCode,
            @NotBlank(message = "Full name is required") String fullName,
            @NotBlank(message = "Email is required") @Email(message = "Please enter a valid email") String email,
            @NotNull(message = "Phone number is required") Long phone,
            @NotBlank(message = "Department is required") String department,
            @NotBlank(message = "Role is required") String role,
            @NotBlank(message = "Status is required") @Pattern(regexp = "ACTIVE|INACTIVE", message = "Status must be ACTIVE or INACTIVE") String status) {
        this.employeeCode = employeeCode;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.department = department;
        this.role = role;
        this.status = status;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
