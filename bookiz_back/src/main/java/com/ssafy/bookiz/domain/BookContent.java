package com.ssafy.bookiz.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "book_content")
public class BookContent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_content_id", columnDefinition = "INT UNSIGNED")
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
    @JsonIgnore
    private Book book;

    public BookContent(RequestBookContent content) {
        super();
        this.audio = content.getAudio();
        this.content = content.getContent();
        this.type = content.getType();
        this.image = content.getImage();
        this.page = content.getPage();
    }

    public BookContent() {

    }

    public void setBook(Book book) {
        this.book = book;
    }
}