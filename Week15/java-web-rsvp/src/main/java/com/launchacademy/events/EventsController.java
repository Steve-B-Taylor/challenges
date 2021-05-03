package com.launchacademy.events;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import org.apache.commons.beanutils.BeanUtils;

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

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {

    if (req.getServletPath().equals("/rsvps")) {
      Event event = new Event();
      try {
        BeanUtils.populate(event, req.getParameterMap());
      } catch (IllegalAccessException ex) {
        System.out.println(ex);
      } catch (InvocationTargetException ex) {
        System.out.println(ex);
      }
      EntityManagerFactory emf = getEmf();
      EntityManager em = emf.createEntityManager();

      ValidatorFactory vf = getVf();
      Validator val = vf.getValidator();

      EventService service = new EventService(em, val);
      if (!service.save(event)) {
        System.out.println("ERROR:  RSVP did not save");
      } else {
        System.out.println("RSVP'd");
      }
      resp.sendRedirect("/rsvps");
      em.close();
    } else {
      resp.sendError(HttpServletResponse.SC_NOT_FOUND);
    }
  }

  private EntityManagerFactory getEmf() {
    return (EntityManagerFactory) this.getServletContext().getAttribute("emf");
  }

  private ValidatorFactory getVf() {
    return (ValidatorFactory) this.getServletContext().getAttribute("vf");
  }

}
