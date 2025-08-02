package com.app.dto;

import com.app.enums.GrievanceStatusEnum;
import lombok.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

//Full response sent to frontend (e.g., to show in dashboard for Student or Faculty)


public class GrievanceResponseDTO {

    private Long grievanceId;

    private String title;

    private String description;

    private String attachmentPath;

    private String studentId;

    private String studentName;   // from student entity

    private String department;

    private String year;

    private String categoryId;

    private String categoryName;

    private Long facultyAssigned;   // Faculty name/email (optional)

    private String remark;

    private GrievanceStatusEnum status;

    private LocalDate submittedDate;

    private LocalDate lastUpdatedDate;
}


// Workflow:
//Faculty submits the update form →
//
//Controller receives data via GrievanceUpdateByFacultyDTO →
//
//Service layer updates the corresponding Grievance entity →
//
//Changes are persisted in the grievances table (in DB).
