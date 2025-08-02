package com.app.serviceImpl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.GrievanceCategory;
import com.app.repository.GrievanceCategoryRepository;
import com.app.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private GrievanceCategoryRepository categoryRepo;

    @Override
    public GrievanceCategory addCategory(GrievanceCategory category) {
        return categoryRepo.save(category);
    }

    @Override
    public List<GrievanceCategory> getAllCategories() {
        return categoryRepo.findAll();
    }

}
