package com.app.serviceImpl;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.GrievanceCreateDTO;
import com.app.dto.GrievanceResponseDTO;
import com.app.dto.GrievanceUpdateByFacultyDTO;
import com.app.entity.Faculty;
import com.app.entity.Grievance;
import com.app.entity.GrievanceCategory;
import com.app.entity.Student;
import com.app.enums.GrievanceStatusEnum;
import com.app.exception.ResourceNotFoundException;
import com.app.repository.FacultyRepository;
import com.app.repository.GrievanceCategoryRepository;
import com.app.repository.GrievanceRepository;
import com.app.repository.StudentRepository;
import com.app.service.GrievanceService;



@Service
public class GrievanceServiceImpl implements GrievanceService {

    @Autowired
    private GrievanceRepository grievanceRepo;

    @Autowired
    private StudentRepository studentRepo;

    @Autowired
    private GrievanceCategoryRepository categoryRepo;

    @Autowired
    private FacultyRepository facultyRepo;

    @Autowired
    private ModelMapper modelMapper;

    // CREATE
    @Override
    public GrievanceResponseDTO createGrievance(GrievanceCreateDTO dto) {
        Student student = studentRepo.findById(dto.getStudentId())
                .orElseThrow(() -> new ResourceNotFoundException("Student not found"));

        GrievanceCategory category = categoryRepo.findById(dto.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));

        Grievance grievance = modelMapper.map(dto, Grievance.class);
   
        grievance.setStudent(student);
        grievance.setCategory(category);
        grievance.setSubmittedDate(LocalDate.now());
        grievance.setStatus(GrievanceStatusEnum.PENDING);

        grievance = grievanceRepo.save(grievance);
        return modelMapper.map(grievance, GrievanceResponseDTO.class);
    }

    // UPDATE BY FACULTY
    @Override
    public GrievanceResponseDTO updateGrievanceByFaculty(Long id, GrievanceUpdateByFacultyDTO dto) {
        Grievance grievance = grievanceRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Grievance not found"));

        Faculty faculty = facultyRepo.findById(dto.getFacultyAssigned())
                .orElseThrow(() -> new ResourceNotFoundException("Faculty not found"));

        grievance.setFacultyAssigned(faculty);


        grievance.setStatus(dto.getStatus());
        grievance.setRemark(dto.getRemark());
        grievance.setFacultyAssigned(faculty);
        grievance.setLastUpdatedDate(LocalDate.now());

        grievance = grievanceRepo.save(grievance);
        return modelMapper.map(grievance, GrievanceResponseDTO.class);
    }

    // GET BY ID
    @Override
    public GrievanceResponseDTO getGrievanceById(Long id) {
        Grievance grievance = grievanceRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Grievance not found"));
        return modelMapper.map(grievance, GrievanceResponseDTO.class);
    }

    // GET ALL
    @Override
    public List<GrievanceResponseDTO> getAllGrievances() {
        List<Grievance> grievances = grievanceRepo.findAll();
        return grievances.stream()
                .map(g -> modelMapper.map(g, GrievanceResponseDTO.class))
                .collect(Collectors.toList());
    }

    // DELETE
    @Override
    public void deleteGrievance(Long id) {
        Grievance grievance = grievanceRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Grievance not found"));
        grievanceRepo.delete(grievance);
    }

    @Override
    public List<GrievanceResponseDTO> getGrievancesAssignedToFaculty(Long facultyId) {
        List<Grievance> grievances = grievanceRepo.findByFacultyAssignedId(facultyId);
        return grievances.stream()
                         .map(g -> modelMapper.map(g, GrievanceResponseDTO.class))
                         .toList();
    }
}
