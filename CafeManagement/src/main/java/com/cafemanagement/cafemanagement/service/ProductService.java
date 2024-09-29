package com.cafemanagement.cafemanagement.service;

import com.cafemanagement.cafemanagement.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> getAllProducts();
    Optional<Product> findById(Long id);
    Product save(Product product);
    Product updateProduct(Long id, Product product);
    void deleteById(Long id);

    Optional<Product> getProductById(Long id);
}
