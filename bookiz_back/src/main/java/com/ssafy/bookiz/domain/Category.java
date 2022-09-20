package com.ssafy.bookiz.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id", columnDefinition = "INT UNSIGNED")
    private Long id;

    @Column(length = 50)
    private String name;
}