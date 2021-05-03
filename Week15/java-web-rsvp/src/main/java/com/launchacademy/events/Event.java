package com.launchacademy.events;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(name="participants")
public class Event {
  @Id
  @SequenceGenerator(name="event_generator", sequenceName = "participants_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "event_generator")
  private Long id;

  @NotEmpty
  @Column(name="first_name", nullable = false)
  private String firstName;

  @NotEmpty
  @Column(name="last_name", nullable = false)
  private String lastName;

  @NotEmpty
  @Email
  @Column(name="email", nullable = false)
  private String email;

  @NotEmpty
  @Column(name="phone", nullable = false)
  private String phone;

  @NotEmpty
  @Column(name="contact_method", nullable = false)
  private String contactMethod;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getContactMethod() {
    return contactMethod;
  }

  public void setContactMethod(String contactMethod) {
    this.contactMethod = contactMethod;
  }
}
