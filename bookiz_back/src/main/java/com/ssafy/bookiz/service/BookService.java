package com.ssafy.bookiz.service;

import com.ssafy.bookiz.domain.Book;
import com.ssafy.bookiz.repository.BookRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Slf4j
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

    public Book findById(Long id) {
//        Book book = new Book();
        Book book = bookRepository.findById(id).get();
        return book;
    }

    public List<Book> findAllByTitle(String word) {
        log.info(word);
        log.info(word.trim());
//        List<Book> books = new ArrayList<>();
//        for (Book b : bookRepository.findAll()) {
//            if (b.getTitle().contains(word.trim()) && b.getTitle().replaceAll(" ", "").contains(word)) {
//                books.add(b);
//            }
//        }
        return bookRepository.findAllByTitle(word);
    }
}
