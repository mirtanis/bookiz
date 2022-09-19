package com.ssafy.bookiz.controller;

import com.ssafy.bookiz.domain.Book;
import com.ssafy.bookiz.domain.BookCategory;
import com.ssafy.bookiz.service.BookService;
import com.ssafy.bookiz.service.BookCategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@CrossOrigin("*")
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    BookService bookService;

    @Autowired
    BookCategoryService bookCategoryService;

    @GetMapping("/all")
    public ResponseEntity<List<Book>> findAll() throws Exception {
        List<Book> allBooks = bookService.findAll();
        if (allBooks.size() == 0)
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);

        return new ResponseEntity<List<Book>>(allBooks, HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<?> getBooksByCategoryId(@RequestParam Long id) {
        try {
            List<Object> books = bookCategoryService.getBooksByCategoryId(id);
            return new ResponseEntity<List<Object>>(books, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/rank")
    public ResponseEntity<?> getBestBooks() {
        try {
            List<Object> books = bookCategoryService.getBestBooks();
            return new ResponseEntity<List<Object>>(books, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/new")
    public ResponseEntity<?> getNewBooks() {
        try {
            List<Object> books = bookCategoryService.getNewBooks();
            return new ResponseEntity<List<Object>>(books, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
