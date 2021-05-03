package com.launchacademy.webGreeter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/greetings")
public class GreetingsController {
  @GetMapping("/default")
  public String getDefaultGreeting(Model model) {
    model.addAttribute("greeting", "Hello from Spring");
    return "greetings/show";
  }

  @GetMapping("/by-query-string")
  public String getQueryStringGreeting(@RequestParam String name, Model model) {
    model.addAttribute("greeting", "Hello from Spring, " + name);
    return "greetings/show";
  }

}