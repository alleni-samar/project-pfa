package com.cafemanagement.cafemanagement.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    private String name;
    private String description;
    private Integer price;
    private String status;
    @ManyToOne
    @JoinColumn(name = "category_id" )
    @JsonBackReference
    private Category category;
}

