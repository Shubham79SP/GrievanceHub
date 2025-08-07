package com.app.entity;

import com.app.enums.UserRoleEnum;

import jakarta.persistence.*;

import jakarta.persistence.Entity;



import lombok.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {
	@Id
	private  Long username;
	
	private String password;
	
	private String fullname;
	
	private String email;
	
	@Enumerated(EnumType.STRING)//we use STRING JPA to map Java Enums as strings in the database ordinal value (like 0, 1, etc.)..
	private UserRoleEnum role;
	
	

	
	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	private Student student;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	private Faculty faculty;

}
