package com.launchacademy.greetings;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.InvocationTargetException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.beanutils.BeanUtils;

@WebServlet(urlPatterns = {"/greetings/new", "/greetings"})
public class GreetingsController extends HttpServlet {
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
    RequestDispatcher dispatcher = req.getRequestDispatcher("/views/greetings/new.jsp");
    dispatcher.forward(req, resp);
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp)
      throws ServletException, IOException {
    if(req.getServletPath().equals("/greetings")) {
      PrintWriter writer = resp.getWriter();
      writer.println("POSTED");
    }
    else {
      resp.sendError(HttpServletResponse.SC_NOT_FOUND);
    }
  }
}