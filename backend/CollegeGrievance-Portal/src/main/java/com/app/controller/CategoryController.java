package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.app.entity.GrievanceCategory;
import com.app.service.CategoryService;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "*") //  Allow frontend access (like React)
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping
    public GrievanceCategory addCategory(@RequestBody GrievanceCategory category) {
        return categoryService.addCategory(category);
    }

    @GetMapping
    public List<GrievanceCategory> getAllCategories() {
        return categoryService.getAllCategories();
    }
}
