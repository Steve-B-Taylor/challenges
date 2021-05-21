package com.launchacademy.javaspringdata.seeders;

import com.launchacademy.javaspringdata.models.AppCategory;
import com.launchacademy.javaspringdata.repositories.AppCategoryRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AppCategory implements CommandLineRunner {
  private AppCategoryRepository appCategoryRepository;

  @Autowired
  public AppCategory(AppCategoryRepository appCategoryRepository) {
    this.appCategoryRepository = appCategoryRepository;
  }

  @Override
  public void run(String... args) throws Exception {
    AppCategory app1 = new AppCategory();
    app1.setName("Social Media");
    AppCategory app2 = new AppCategory();
    app2.setName("Social Media");
    AppCategory app3 = new AppCategory();
    app3.setName("Social Media");
    AppCategory app4 = new AppCategory();
    app4.setName("Social Media");
    List<AppCategory> apps = (List<AppCategory>) AppCategoryRepository.findAll();

    if(apps.size() == 0) {
      AppCategoryRepository.save(app1);
      AppCategoryRepository.save(app2);
      AppCategoryRepository.save(app3);
      AppCategoryRepository.save(app4);
    }


}