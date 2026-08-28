package com.sjcoders.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sjcoders.training.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
