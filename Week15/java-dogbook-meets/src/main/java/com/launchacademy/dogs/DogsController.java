package com.launchacademy.dogs;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.beanutils.BeanUtils;

@WebServlet(urlPatterns = {"/", "/dogs", "/dogs/new"})
public class DogsController extends HttpServlet {

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp)
      throws ServletException, IOException {

    if(req.getServletPath().equals("/dogs/new")) {
      RequestDispatcher dispatcher = req.getRequestDispatcher("/views/dogs/form.jsp");
      dispatcher.forward(req, resp);
    }  else if (req.getServletPath().equals("/dogs")) {
      RequestDispatcher dispatcher = req.getRequestDispatcher("/views/dogs/index.jsp");
      EntityManager em = getEmf().createEntityManager();
      try {
        DogService dogService = new DogService(em);
        List<Dog> alldogs = dogService.findAll();
        req.setAttribute("dogs", alldogs);
        dispatcher.forward(req, resp);
      } finally {
        em.close();
      }
    }
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp)
      throws ServletException, IOException {
    if (req.getServletPath().equals("/dogs")) {
      Dog dog = new Dog();
      try {
        BeanUtils.populate(dog, req.getParameterMap());
      } catch (IllegalAccessException ex) {
        System.out.println(ex);
      } catch (InvocationTargetException ex) {
        System.out.println(ex);
      }
      EntityManagerFactory emf = getEmf();
      EntityManager em = emf.createEntityManager();

      DogService service = new DogService(em);
      if (!service.save(dog)) {
        System.out.println("Error:  Dog did not save");
      } else {
        System.out.println("Dog saved");
      }
      resp.sendRedirect("/dogs");
      em.close();
    } else {
      resp.sendError(HttpServletResponse.SC_NOT_FOUND);
    }
  }

  private EntityManagerFactory getEmf() {
    return (EntityManagerFactory) this.getServletContext().getAttribute("emf");
  }

}
