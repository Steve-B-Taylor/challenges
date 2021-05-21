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
@Table(name="parties")
public class Party {
  @Id
  @SequenceGenerator(name="party_generator", sequenceName = "parties_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "party_generator")

  @Column(name="id", nullable = false, unique = true)
  private Integer id;

  @Column(name="name")
  private String name;

  @Column(name="description")
  private String description;

  @Column(name="location")
  private String location;

}
