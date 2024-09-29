package com.cafemanagement.cafemanagement.repository;

import com.cafemanagement.cafemanagement.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product,Long> {

}
