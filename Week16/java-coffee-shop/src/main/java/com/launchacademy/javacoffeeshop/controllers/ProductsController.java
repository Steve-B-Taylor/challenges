package com.launchacademy.javacoffeeshop.controllers;

import com.launchacademy.javacoffeeshop.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/products")
public class ProductsController {
  private ProductService productService;

  @Autowired
  public ProductsController(ProductService productService) {
    this.productService = productService;
  }

  @GetMapping
  public String listProducts (Model model) {
    model.addAttribute("products", productService.findAll());
    return "products/index";
  }

  @GetMapping("/products/show/{id}")
  public String getShow(@PathVariable Integer id, Model model) {
    model.addAttribute("product", productService.get(id));
    return "show";
  }

}