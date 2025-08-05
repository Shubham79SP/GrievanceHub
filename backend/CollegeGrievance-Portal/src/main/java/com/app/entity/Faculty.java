package com.app.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(exclude = "grievances")
@EqualsAndHashCode(exclude = "grievances")
@Table(name = "faculties")
public class Faculty {

    @Id
//    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;  // Faculty ID

    private String fullName;

    private String department;

    private String designation;

    private String email;

    private String phone;

    private String address;

    private String photoUrl;

    private String category;      // Main grievance category handled

    private String subcategory;   // Subcategory under the category

    private String expertise;     // Expertise or specialization

    // Reverse mapping (optional if you need to access grievances assigned to faculty)
    @OneToMany(mappedBy = "facultyAssigned", cascade = CascadeType.ALL)
    private List<Grievance> grievances = new ArrayList<>();//initalise to abvoid nullpointer

}
