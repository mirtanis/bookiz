package com.ssafy.bookiz.domain;

import lombok.Getter;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id", columnDefinition = "INT UNSIGNED")
    private Long book_id;

    @Column(length = 50)
    private String title;

    @Column(length = 300)
    private String info;

    private Timestamp createdate;

    @Column(length = 100)
    private String image;

    @Column(columnDefinition = "INT UNSIGNED")
    private Integer page;

    @Column(columnDefinition = "INT UNSIGNED")
    private Integer cnt;
}