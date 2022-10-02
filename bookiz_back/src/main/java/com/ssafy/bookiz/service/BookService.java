package com.ssafy.bookiz.service;

import com.ssafy.bookiz.domain.Book;
import com.ssafy.bookiz.domain.BookDto;
import com.ssafy.bookiz.repository.BookRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;
import java.util.stream.Collectors;

@Slf4j
@Service
public class BookService {

    private BookRepository bookRepository;

    private final ModelMapper modelMapper;

    public BookService(BookRepository bookRepository, ModelMapper modelMapper) {
        this.bookRepository = bookRepository;
        this.modelMapper = modelMapper;
    }

    public List<Object> findAll() {
        List<Book> books = bookRepository.findAllByOrderByCntDesc();
        List<Object> allBooks = books.stream()
                .map(book -> modelMapper.map(book, BookDto.class))
                .collect(Collectors.toList());
        return allBooks;
    }

    public BookDto findById(Long id) {
        Book book = bookRepository.findById(id).get();
        BookDto bookDto = modelMapper.map(book, BookDto.class);
        return bookDto;
    }

    public Book findById2(Long id) {
        Book book = bookRepository.findById(id).get();
        return book;
    }

    public List<Object> getBestBooks() {
        List<Book> books = bookRepository.findTop3ByOrderByCntDesc();
        List<Object> bestBooks = books.stream()
                .map(book -> modelMapper.map(book, BookDto.class))
                .collect(Collectors.toList());
        return bestBooks;
    }

    public List<Object> getNewBooks() {
        List<Object> books = bookRepository.findAllOrderByCreatedateDesc();
        List<Object> newBooks = books.stream()
                .map(book -> modelMapper.map(book, BookDto.class))
                .collect(Collectors.toList());
        return newBooks;
    }

    public List<Object> findAllByTitle(String word) {
        List<Object> books = bookRepository.findAllByTitle(word);
        List<Object> searchBooks = books.stream()
                .map(book -> modelMapper.map(book, BookDto.class))
                .collect(Collectors.toList());
        return searchBooks;
    }

    public BookDto plusCnt(Long id) {
        Book book = bookRepository.findById(id).get();
        book.setCnt(book.getCnt() + 1);
        bookRepository.save(book);
        BookDto bookDto = modelMapper.map(book, BookDto.class);
        return bookDto;
    }
    public long addBook(Book book) {
        Date today = new Date();
        SimpleDateFormat form = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        form.setTimeZone(TimeZone.getTimeZone("Asia/Seoul"));
        book.setCreatedate(Timestamp.valueOf(form.format(today)));
        bookRepository.save(book);
        book.setImage("https://j7a103.p.ssafy.io/api/books/display?image=" + book.getImage() + "&id=" + book.getId());
        bookRepository.save(book);
        return book.getId();
    }
}
