package com.launchacademy.webGreeter.controllers;

import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/greetings")
public class GreetingsController {

 @GetMapping("/default")
 public String getDefaultGreeting(Model model) {
   model.addAttribute("greeting", "Hello from Spring");
   return "greetings/show";
 }

  @GetMapping("/by-query-string")
  public String getQueryStringGreeting(@RequestParam(required=false) String firstName, @RequestParam(required=false) String lastName, Model model) {
    model.addAttribute("greeting", "Hello from Spring");
    if (firstName != null) {
      model.addAttribute("greeting", "Hello from Spring, " + firstName);
      if (lastName != null) {
        model.addAttribute("greeting", "Hello from Spring, " + firstName + " " + lastName);
      }
     }
    return "greetings/show";
  }

  @GetMapping("/by-language")
  public String getQueryStringGreeting(@RequestParam String lang, @RequestParam(required=false) String firstName, @RequestParam(required=false) String lastName, Model model) {
    String salutation = "";
    if (lang.equals("fr")) {
      salutation = "Bonjour";
    } else if (lang.equals("en")) {
      salutation = "Hello";
    } else if (lang.equals("es")) {
      salutation = "Hola";
    }

    model.addAttribute("greeting", salutation + " from Spring");

    if (firstName != null) {
      model.addAttribute("greeting", salutation + " from Spring, " + firstName);
      if (lastName != null) {
        model.addAttribute("greeting", salutation + " from Spring, " + firstName + " " + lastName);
      }
    }
    return "greetings/show";
  }

  @GetMapping("/by-name/{name}")
  public String getCustomizedGreeting(@PathVariable String name, Model model) {
    model.addAttribute("greeting", "Hello from Spring, " + name);
    return "greetings/show";
  }
}
