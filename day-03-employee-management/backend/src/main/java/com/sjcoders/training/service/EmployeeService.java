package com.sjcoders.training.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sjcoders.training.entity.Employee;
import com.sjcoders.training.model.EmployeeAddRequest;
import com.sjcoders.training.repository.EmployeeRepository;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public void addEmployee(EmployeeAddRequest request) {
        Employee employee = new Employee();

        employee.setEmployeeCode(request.getEmployeeCode());
        employee.setFullName(request.getFullName());
        employee.setEmail(request.getEmail());
        employee.setPhone(request.getPhone());
        employee.setDepartment(request.getDepartment());
        employee.setRole(request.getRole());
        employee.setStatus(request.getStatus());

        employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {

        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long id) {

        return employeeRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Employee not found"));

    }

    public Employee updateEmployee(Long id, EmployeeAddRequest request) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        employee.setEmployeeCode(request.getEmployeeCode());
        employee.setFullName(request.getFullName());
        employee.setEmail(request.getEmail());
        employee.setPhone(request.getPhone());
        employee.setDepartment(request.getDepartment());
        employee.setRole(request.getRole());
        employee.setStatus(request.getStatus());

        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        employeeRepository.delete(employee);
    }

}
