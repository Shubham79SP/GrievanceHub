package com.app.service;

import com.app.dto.GrievanceCreateDTO;
import com.app.dto.GrievanceResponseDTO;
import com.app.dto.GrievanceUpdateByFacultyDTO;

import java.util.List;

public interface GrievanceService {

    GrievanceResponseDTO createGrievance(GrievanceCreateDTO dto);

    GrievanceResponseDTO updateGrievanceByFaculty(Long grievanceId, GrievanceUpdateByFacultyDTO dto);

    List<GrievanceResponseDTO> getAllGrievances();

    GrievanceResponseDTO getGrievanceById(Long grievanceId);

	void deleteGrievance(Long id);

	List<GrievanceResponseDTO> getGrievancesAssignedToFaculty(Long facultyId);

}
