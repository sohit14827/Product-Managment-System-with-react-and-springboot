package com.example.sohit.product_managment_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sohit.product_managment_system.model.Product;

public interface ProductRepository extends JpaRepository<Product,Integer> {

    


}
