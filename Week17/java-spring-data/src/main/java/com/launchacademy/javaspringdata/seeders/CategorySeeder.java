package com.launchacademy.javaspringdata.seeders;

import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CategorySeeder {
  private CategoryRepository categoryRepository;

  @Autowired
  public CategorySeeder(CategorySeeder categorySeeder) {
    this.categoryRepository = categoryRepository;
  }
  @Override
  public void run(String... args) throws Exception {
    Map<String, String> categoryMap = new HashMap<>();
    categoryMap.put("")
  }

}
