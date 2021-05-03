package com.launchacademy.events;

import java.util.List;
import java.util.Set;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.validation.ConstraintViolation;
import javax.validation.Validator;

public class EventService {
  private EntityManager em;
  private Validator val;

  public EventService(EntityManager em) {
    this.em = em;
  }

  public EventService(EntityManager em, Validator val) {
    this.em = em;
    this.val = val;
  }

  public boolean save(Event event) {
    boolean valid = true;

    Set<ConstraintViolation<Event>> violations = val.validate(event);
    if(violations.size() > 0) {
      valid = false;
      System.out.println("Invalid input: please address the following issues");
      for (ConstraintViolation<Event> violation : violations) {
        System.out.println(violation.getPropertyPath() + ": " + violation.getMessage());
       }
    }

    if(valid) {
      try {
        em.getTransaction().begin();
        em.persist(event);
        em.getTransaction().commit();
        return true;
      } catch (Exception exc) {
        em.getTransaction().rollback();
        return false;
      }
    }

    return false;
  }

  public List<Event> findAll() {
    TypedQuery<Event> query = em.createQuery("SELECT e FROM Event e", Event.class);
    return query.getResultList();
  }


}
