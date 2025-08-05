package com.app.controller;

import com.app.dto.GrievanceCreateDTO;
import com.app.dto.GrievanceResponseDTO;
import com.app.dto.GrievanceUpdateByFacultyDTO;
import com.app.service.GrievanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/grievances")
@RequiredArgsConstructor
public class GrievanceController {

    private final GrievanceService grievanceService;

    //  Create a new grievance (by student)
    @PostMapping
    public ResponseEntity<GrievanceResponseDTO> createGrievance(@RequestBody GrievanceCreateDTO dto) {
        GrievanceResponseDTO created = grievanceService.createGrievance(dto);
        return ResponseEntity.ok(created);
    }

    //  Get all grievances (admin/faculty/student based on role)
    @GetMapping
    public ResponseEntity<List<GrievanceResponseDTO>> getAllGrievances() {
        List<GrievanceResponseDTO> list = grievanceService.getAllGrievances();
        return ResponseEntity.ok(list);
    }

    // Get grievance by ID
    @GetMapping("/{id}")
    public ResponseEntity<GrievanceResponseDTO> getById(@PathVariable Long id) {
        GrievanceResponseDTO dto = grievanceService.getGrievanceById(id);
        return ResponseEntity.ok(dto);
    }

    //  Faculty updates grievance (remark, status, assigned faculty, etc.)
    @PutMapping("/{id}/faculty-update")
    public ResponseEntity<GrievanceResponseDTO> updateByFaculty(
            @PathVariable Long id,
            @RequestBody GrievanceUpdateByFacultyDTO updateDTO) {

        GrievanceResponseDTO updated = grievanceService.updateGrievanceByFaculty(id, updateDTO);
        return ResponseEntity.ok(updated);
    }

    //  Get grievances for a specific student
    @GetMapping("/student/{studentId}")
    public ResponseEntity<GrievanceResponseDTO> getGrievancesByStudent(@PathVariable Long studentId) {
        return ResponseEntity.ok(grievanceService.getGrievanceById(studentId));
    }

    // ⬅️ Get grievances assigned to a specific faculty
    @GetMapping("/faculty/{facultyId}")
    public ResponseEntity<List<GrievanceResponseDTO>> getGrievancesForFaculty(@PathVariable Long facultyId) {
        return ResponseEntity.ok(grievanceService.getGrievancesAssignedToFaculty(facultyId));
    }
}
