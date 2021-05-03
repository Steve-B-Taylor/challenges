package com.launchacademy.games;

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
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import org.apache.commons.beanutils.BeanUtils;

@WebServlet(urlPatterns = {"/", "/games", "/games/new"})
public class GamesController extends HttpServlet {

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {

    if (req.getServletPath().equals("/games")) {
      RequestDispatcher dispatcher = req.getRequestDispatcher("/views/games/index.jsp");
      EntityManager em = getEmf().createEntityManager();
      try {
        GameService gameService = new GameService(em);
        List<Game> allGames = gameService.findAll();
        req.setAttribute("games", allGames);
        dispatcher.forward(req, resp);
      } finally {
        em.close();
      }
    } else if (req.getServletPath().equals("/games/new")) {
      RequestDispatcher dispatcher = req.getRequestDispatcher("/views/games/form.jsp");
      dispatcher.forward(req, resp);
    }
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp)
      throws ServletException, IOException {

    if (req.getServletPath().equals("/games")) {
      Game game = new Game();
      try {
        BeanUtils.populate(game, req.getParameterMap());
      } catch (IllegalAccessException iae) {
        System.out.println("IllegalAccessException: " + iae);
      } catch (InvocationTargetException ite) {
        System.out.println("InvocationTargetException: " + ite);
      }
      EntityManagerFactory emf = getEmf();
      EntityManager em = emf.createEntityManager();

      ValidatorFactory vf = getVf();
      Validator val = vf.getValidator();

      GameService service = new GameService(em, val);
      if (!service.save(game)) {
        System.out.println("Error:  Game did not save");
      } else {
        System.out.println("Game saved");
      }
      resp.sendRedirect("/games");
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
