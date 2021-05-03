package com.launchacademy.dogs;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

public class DogService {
  private EntityManager em;

  public DogService(EntityManager em) {
    this.em = em;
  }

  public boolean save(Dog dog) {
    try {
      em.getTransaction().begin();
      em.persist(dog);
      em.getTransaction().commit();
      return true;

    } catch (Exception e) {
      em.getTransaction().rollback();
      System.out.println(e.getMessage());
      return false;
    }
  }

  public List<Dog> findAll() {
    TypedQuery<Dog> query = em.createQuery("SELECT d FROM Dog d ORDER BY lastName, firstName ASC", Dog.class);
    return query.getResultList();
  }

}