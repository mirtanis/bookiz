package com.ssafy.bookiz.service;

import com.ssafy.bookiz.domain.Book;
import com.ssafy.bookiz.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    private BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> findAll() {
        List<Book> books = new ArrayList<>();
        bookRepository.findAll().forEach(book -> books.add(book));
        return books;
    }
}
