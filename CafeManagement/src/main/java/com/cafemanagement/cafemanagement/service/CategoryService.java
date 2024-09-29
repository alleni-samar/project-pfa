package com.cafemanagement.cafemanagement.service;

import com.cafemanagement.cafemanagement.model.Category;

import java.util.List;

public interface CategoryService {
    Category addNewCategory(Category category);

    List<Category> getAllCategories();
    Category findById(Long id);

    Category updateCategory(Long id, Category category);
}
