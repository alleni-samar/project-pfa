package com.cafemanagement.cafemanagement.repository;

import com.cafemanagement.cafemanagement.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepo extends JpaRepository<Category, Long> {

}
