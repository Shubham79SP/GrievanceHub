package com.app.controller;

import com.app.dto.SubCategoryDTO;
import com.app.service.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subcategories")
public class SubCategoryController {

    @Autowired
    private SubCategoryService subCategoryService;

    @PostMapping("/add/{categoryId}")
    public ResponseEntity<String> addSubCategory(@RequestBody SubCategoryDTO dto,
                                                 @PathVariable Long categoryId) {
        return ResponseEntity.ok(subCategoryService.addSubCategory(dto, categoryId));
    }

    @GetMapping("/all")
    public ResponseEntity<List<SubCategoryDTO>> getAllSubCategories() {
        return ResponseEntity.ok(subCategoryService.getAllSubCategories());
    }
}
