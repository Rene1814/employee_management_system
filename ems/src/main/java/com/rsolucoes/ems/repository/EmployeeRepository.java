package com.rsolucoes.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rsolucoes.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
