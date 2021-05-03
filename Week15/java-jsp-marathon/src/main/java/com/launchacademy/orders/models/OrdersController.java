package com.launchacademy.orders.models;

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

@WebServlet(urlPatterns = {"/", "/orders", "/orders/new"})
public class OrdersController extends HttpServlet {

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {

    if(req.getServletPath().equals("/orders/new")) {
      RequestDispatcher dispatcher = req.getRequestDispatcher("/views/orders/form.jsp");
      dispatcher.forward(req, resp);
    } else if (req.getParameter("orderId") != "" && req.getParameter("orderId") != null) {
      RequestDispatcher dispatcher = req.getRequestDispatcher("/views/orders/show.jsp");
      EntityManager em = getEmf().createEntityManager();
      try {
        OrderService orderService = new OrderService(em);
        Order oneOrder = orderService.findOne(Long.parseLong(req.getParameter("orderId")));
        req.setAttribute("order", oneOrder);
        dispatcher.forward(req, resp);
      } finally {
        em.close();
      }
    } else if (req.getServletPath().equals("/orders")) {
      RequestDispatcher dispatcher = req.getRequestDispatcher("/views/orders/index.jsp");
      EntityManager em = getEmf().createEntityManager();
      try {
        OrderService orderService = new OrderService(em);
        List<Order> allOrders = orderService.findAll();
        req.setAttribute("orders", allOrders);
        dispatcher.forward(req, resp);
      } finally {
        em.close();
      }
    }
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {
    if (req.getServletPath().equals("/orders")) {
      Order order = new Order();
      try {
        BeanUtils.populate(order, req.getParameterMap());
      } catch (IllegalAccessException ex) {
        System.out.println(ex);
      } catch (InvocationTargetException ex) {
        System.out.println(ex);
      }
      EntityManagerFactory emf = getEmf();
      EntityManager em = emf.createEntityManager();

      OrderService service = new OrderService(em);
      if (!service.save(order)) {
        System.out.println("Error:  Order did not save");
      } else {
        System.out.println("Order saved");
      }
      resp.sendRedirect("/orders");
      em.close();
    } else {
      resp.sendError(HttpServletResponse.SC_NOT_FOUND);
    }
  }

  private EntityManagerFactory getEmf() {
    return (EntityManagerFactory) this.getServletContext().getAttribute("emf");
  }
}
