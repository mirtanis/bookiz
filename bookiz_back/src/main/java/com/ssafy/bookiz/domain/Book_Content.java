package com.ssafy.bookiz.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "book_content")
public class Book_Content {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "INT UNSIGNED")
    private Long id;

    @Column(columnDefinition = "INT UNSIGNED")
    private Integer page;

    @Column(length = 100)
    private String content;

    @Column(length = 100)
    private String image;

    @Column(length = 100)
    private String audio;

    // 내래이션인지, 대사인지
    @Column(columnDefinition = "INT UNSIGNED")
    private Integer type;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;
}