package com.ssafy.bookiz.domain;

import java.util.List;

public class RequestBookContents {
    private Book book;
    private List<BookContent> contents;

    RequestBookContents(Book book, List<BookContent> contents) {
        super();
        this.book = book;
        this.contents = contents;
    }

    public Book getBook() {
        return book;
    }

    public List<BookContent> getContents() {
        return contents;
    }
}
