package com.cafemanagement.cafemanagement.serviceImpl;

import com.cafemanagement.cafemanagement.model.Category;
import com.cafemanagement.cafemanagement.repository.CategoryRepo;
import com.cafemanagement.cafemanagement.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepo categoryRepo;

    @Override
    public Category addNewCategory(Category category) {
        return categoryRepo.save(category);
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }

    @Override
    public Category updateCategory(Long id, Category category) {
        Category existingCategory = categoryRepo.findById(id).orElse(null);
        if (existingCategory != null) {
            existingCategory.setName(category.getName());
            return categoryRepo.save(existingCategory);
        }
        return null;
    }
    @Override
    public Category findById(Long id) {
        return categoryRepo.findById(id).orElse(null);
    }
}
