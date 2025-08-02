package com.app.service;

import java.util.List;

import com.app.dto.LoginRequest;
import com.app.entity.Student;

public interface StudentService {
	
	Student addStudent(Student student);
	List<Student> getAllStudents();
	Student getStudentByPrn(String prnNo);
	 boolean deleteStudentByPrn(String prnNo);
	 Student updateStudent(String prnNo, Student updatedStudent);
	 String loginStudent(LoginRequest request);


}
