package com.ssafy.bookiz.domain;

import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;


@Entity
@Getter
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id", columnDefinition = "INT UNSIGNED")
    private Long id;

    @Column(length = 50)
    private String title;

    @Column(length = 300)
    private String info;

    @Column(nullable = false)
    private Timestamp create_date;

    @Column(length = 100)
    private String image;

    @Column(columnDefinition = "INT UNSIGNED")
    private Integer page;

    @Column(nullable = false, columnDefinition = "INT UNSIGNED")
    private Integer cnt;

    public void setCnt(Integer cnt) {
        this.cnt = cnt;
    }
}