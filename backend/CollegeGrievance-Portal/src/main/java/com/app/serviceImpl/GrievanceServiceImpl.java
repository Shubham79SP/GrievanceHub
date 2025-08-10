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
import com.app.dto.WrapperDTO;
import com.app.entity.Faculty;
import com.app.entity.Grievance;
import com.app.entity.GrievanceCategory;
import com.app.entity.Student;
import com.app.entity.SubCategory;
import com.app.enums.GrievanceStatusEnum;
import com.app.exception.ResourceNotFoundException;
import com.app.project.client.DotNetApiClient;
import com.app.repository.FacultyRepository;
import com.app.repository.GrievanceCategoryRepository;
import com.app.repository.GrievanceRepository;
import com.app.repository.StudentRepository;
import com.app.repository.SubCategoryRepository;
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

    @Autowired
    private SubCategoryRepository subCategoryRepo;

    @Autowired
    private DotNetApiClient dotNetApiClient;

    @Override
    public GrievanceResponseDTO createGrievance(GrievanceCreateDTO dto) {
        Student student = studentRepo.findById(dto.getStudentId())
                .orElseThrow(() -> new ResourceNotFoundException("Student not found"));

        GrievanceCategory category = categoryRepo.findById(dto.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));

        SubCategory subCategory = subCategoryRepo
                .findByNameAndCategoryCategoryId(dto.getSubCategoryName(), dto.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("SubCategory not found"));

        Grievance grievance = new Grievance();
        grievance.setTitle(dto.getTitle());
        grievance.setDescription(dto.getDescription());
        grievance.setStudent(student);
        grievance.setCategory(category);
        grievance.setSubCategory(subCategory);
        grievance.setSubmittedDate(LocalDate.now());
        grievance.setStatus(GrievanceStatusEnum.PENDING);

        Grievance savedGrievance = grievanceRepo.save(grievance);

        GrievanceResponseDTO responseDTO = modelMapper.map(savedGrievance, GrievanceResponseDTO.class);
        responseDTO.setStudentId(student.getPrnNo()); // ✅ Ensure it's numeric

        syncGrievanceToDotNet(responseDTO);

        return responseDTO;
    }

    @Override
    public GrievanceResponseDTO updateGrievanceByFaculty(Long id, GrievanceUpdateByFacultyDTO dto) {
        Grievance grievance = grievanceRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Grievance not found"));

        Faculty faculty = facultyRepo.findById(dto.getFacultyAssigned())
                .orElseThrow(() -> new ResourceNotFoundException("Faculty not found"));

        grievance.setFacultyAssigned(faculty);
        grievance.setStatus(dto.getStatus());
        grievance.setRemark(dto.getRemark());
        grievance.setLastUpdatedDate(LocalDate.now());

        Grievance updated = grievanceRepo.save(grievance);

        GrievanceResponseDTO responseDTO = modelMapper.map(updated, GrievanceResponseDTO.class);
        responseDTO.setStudentId(updated.getStudent().getPrnNo()); // ✅ Ensure it's numeric

        syncGrievanceToDotNet(responseDTO);

        return responseDTO;
    }

    @Override
    public GrievanceResponseDTO getGrievanceById(Long id) {
        Grievance grievance = grievanceRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Grievance not found"));
        return modelMapper.map(grievance, GrievanceResponseDTO.class);
    }

    @Override
    public List<GrievanceResponseDTO> getAllGrievances() {
        return grievanceRepo.findAll().stream()
                .map(g -> modelMapper.map(g, GrievanceResponseDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void deleteGrievance(Long id) {
        Grievance grievance = grievanceRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Grievance not found"));
        grievanceRepo.delete(grievance);
    }

    @Override
    public List<GrievanceResponseDTO> getGrievancesAssignedToFaculty(Long facultyId) {
        return grievanceRepo.findByFacultyAssignedId(facultyId).stream()
                .map(g -> modelMapper.map(g, GrievanceResponseDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void syncGrievanceToDotNet(GrievanceResponseDTO grievanceDto) {
        try {
            WrapperDTO wrapper = new WrapperDTO();
            wrapper.setGrievance(grievanceDto);
            dotNetApiClient.syncNewGrievance(wrapper);
        } catch (Exception e) {
            System.err.println("Failed to sync grievance to .NET: " + e.getMessage());
        }
    }
}
