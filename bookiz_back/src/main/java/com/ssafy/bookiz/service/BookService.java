package com.ssafy.bookiz.service;

import com.ssafy.bookiz.domain.Book;
import com.ssafy.bookiz.domain.BookDto;
import com.ssafy.bookiz.repository.BookRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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

    public List<Book> findAll() {
        List<Book> books = new ArrayList<>();
        bookRepository.findAll().forEach(book -> books.add(book));
        return books;
    }

    public BookDto findById(Long id) {
        Book book = bookRepository.findById(id).get();
        BookDto bookDto = modelMapper.map(book, BookDto.class);
        return bookDto;
    }

    public List<Object> getBestBooks() {
        List<Object> books = bookRepository.findAllOrderByCnt();
        List<Object> bestBooks = books.stream()
                .map(book -> modelMapper.map(book, BookDto.class))
                .collect(Collectors.toList());
//        return bookRepository.findAllOrderByCnt();
        return bestBooks;
    }

    public List<Object> getNewBooks() {
        return bookRepository.findAllOrderByCreateDate();
    }

    public List<Book> findAllByTitle(String word) {
//        List<Book> books = new ArrayList<>();
//        for (Book b : bookRepository.findAll()) {
//            if (b.getTitle().contains(word.trim()) && b.getTitle().replaceAll(" ", "").contains(word)) {
//                books.add(b);
//            }
//        }
        return bookRepository.findAllByTitle(word);
    }

    public Book plusCnt(Long id) {
        Book book = bookRepository.findById(id).get();
        book.setCnt(book.getCnt() + 1);
        bookRepository.save(book);
        return book;
    }
}
