package com.rsolucoes.ems.service.impl;

import org.springframework.stereotype.Service;

import com.rsolucoes.ems.dto.EmployeeDto;
import com.rsolucoes.ems.entity.Employee;
import com.rsolucoes.ems.mapper.EmployeeMapper;
import com.rsolucoes.ems.repository.EmployeeRepository;
import com.rsolucoes.ems.service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{
	
	private EmployeeRepository employeeRepository;

	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedEmployee = employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}

}
