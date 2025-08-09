package com.app.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotBlank;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

//For Student to Submit Grievance 
public class GrievanceCreateDTO {
	private Long categoryId;

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    @NotBlank(message = "Category Name is required")
    private String categoryName;

    @NotBlank(message = "Student ID (PRN) is required")
    private Long studentId;

    private MultipartFile attachmentFile;  // Optional; handled in service layer
}
