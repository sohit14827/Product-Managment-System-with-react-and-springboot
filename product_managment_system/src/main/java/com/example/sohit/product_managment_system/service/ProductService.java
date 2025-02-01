package com.example.sohit.product_managment_system.service;

import java.util.List;

import com.example.sohit.product_managment_system.model.Product;

public interface ProductService {

    public Product saveProduct(Product product);

    public List<Product> getAllProduct();

    public Product getProductById(Integer id);

    public String deleteProduct(Integer id);

    public Product editProduct(Product product, Integer id);



}
