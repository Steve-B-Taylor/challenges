package com.launchacademy.games;

import java.util.List;
import java.util.Set;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.validation.ConstraintViolation;
import javax.validation.Validator;

public class GameService {
  private EntityManager em;
  private Validator val;

  public GameService(EntityManager em) {
    this.em = em;
  }

  public GameService(EntityManager em, Validator val) {
    this.em = em;
    this.val = val;
  }

  public boolean save(Game game) {
    boolean valid = true;

    Set<ConstraintViolation<Game>> violations = val.validate(game);
    if(violations.size() > 0) {
      valid = false;
      System.out.println("Invalid input: please address the following issues");
      for (ConstraintViolation<Game> violation : violations) {
        System.out.println(violation.getPropertyPath() + ": " + violation.getMessage());
      }
    }

    if(valid) {
      try {
        em.getTransaction().begin();
        em.persist(game);
        em.getTransaction().commit();
        return true;
      } catch (Exception exc) {
        em.getTransaction().rollback();
        return false;
      }
    }

    return false;
  }

  public List<Game> findAll() {
    TypedQuery<Game> query = em.createQuery("SELECT g FROM Game g", Game.class);
    return query.getResultList();
  }

}
