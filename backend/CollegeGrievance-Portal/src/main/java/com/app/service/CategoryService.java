package com.app.service;

import java.util.List;
import java.util.Locale.Category;

import com.app.dto.GrievanceCategoryDTO;
import com.app.entity.GrievanceCategory;

public interface CategoryService {
    
    List<GrievanceCategory> getAllCategories();
	GrievanceCategory addCategory(GrievanceCategory category);
	
	GrievanceCategory addCategoryFromDTO(GrievanceCategoryDTO dto);
	void deleteCategory(Long id);


}
