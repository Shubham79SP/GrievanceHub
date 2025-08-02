package com.app.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

//For Student to Submit Grievance 
public class GrievanceCreateDTO {

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    @NotBlank(message = "Category ID is required")
    private String categoryId;

    @NotBlank(message = "Student ID (PRN) is required")
    private Long studentId;

    private MultipartFile attachmentFile;  // Optional; handled in service layer
}
