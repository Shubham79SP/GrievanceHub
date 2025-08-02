package com.app.entity;



import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "grievance_categories")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GrievanceCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

//    @Column(nullable = false, unique = true)
    private Long id;

    private String name;

    private String description;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Grievance> grievances;
}
