package com.launchacademy.partyplanner.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="friends")
public class Friend {
  @Id
  @SequenceGenerator(name="friend_generator", sequenceName = "friends_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "friend_generator")

  @Column(name="id", nullable = false, unique = true)
  private Integer id;

  @Column(name="firstName", nullable = false)
  private String firstName;

  @Column(name="lastName", nullable = false)
  private String lastName;
}
