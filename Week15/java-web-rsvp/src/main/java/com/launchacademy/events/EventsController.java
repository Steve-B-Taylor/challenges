package com.launchacademy.events;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = {"/", "/rsvps" ,"/rsvps/new"})
public class EventsController extends HttpServlet {

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {

    if (req.getServletPath().equals("/rsvps/new")) {
      RequestDispatcher dispatcher = req.getRequestDispatcher("/views/events/form.jsp");
      dispatcher.forward(req, resp);
    }
  }

}
