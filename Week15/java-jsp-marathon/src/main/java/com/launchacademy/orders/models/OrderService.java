package com.launchacademy.orders.models;

import javax.persistence.EntityManager;

public class OrderService {
  private EntityManager em;

  public OrderService(EntityManager em) {
    this.em = em;
  }

  public boolean save(Order order) {
    try {
      em.getTransaction().begin();
      em.persist(order);
      em.getTransaction().commit();
      return true;

    } catch (Exception e) {
      em.getTransaction().rollback();
      System.out.println(e.getMessage());
      return false;
    }
  }

}
