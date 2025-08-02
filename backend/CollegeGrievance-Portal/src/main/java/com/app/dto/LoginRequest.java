package com.app.dto;

import com.app.entity.Student;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //(from Lombok) gives getters/setters automatically
@NoArgsConstructor //Required for frameworks like Spring to instantiate via reflection.
@AllArgsConstructor //Helps in testing or quick object creation.
public class LoginRequest {

	 private Long prnNo;
	 private String password;
}
