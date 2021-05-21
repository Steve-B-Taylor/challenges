package com.launchacademy.marathon.controllers;

import com.launchacademy.marathon.repositories.SongRepository;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SongsController {
  @NoArgsConstructor
  private class UrlNotFoundException extends RuntimeException {};

  @ControllerAdvice
  private class UrlNotFoundAdvice {}
  @ResponseBody
  @ExceptionHandler(UrlNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  String urlNotFoundHandler(UrlNotFoundException ex) {
    return ex.getMessage();
  }

  private final SongRepository songRepo;



}
