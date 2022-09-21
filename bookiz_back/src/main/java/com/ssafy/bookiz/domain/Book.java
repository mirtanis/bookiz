package com.ssafy.bookiz.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;


@Entity
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
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

//    @CreatedDate
    @Column(name = "createdate", updatable = false)
    private Timestamp createdate;

    @Column(length = 100)
    private String image;

    @Column(columnDefinition = "INT UNSIGNED")
    private Integer page;

    @Column(nullable = false, columnDefinition = "INT UNSIGNED")
    private Integer cnt;

    public void setCnt(Integer cnt) {
        this.cnt = cnt;
    }

//    @PrePersist
//    public void beforeCreate() {
//        createdate = LocalDateTime.now();
//    }

}