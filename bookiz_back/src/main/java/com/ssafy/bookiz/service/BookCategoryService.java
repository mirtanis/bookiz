package com.ssafy.bookiz.service;

import com.ssafy.bookiz.repository.BookCategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class BookCategoryService {

    private BookCategoryRepository bookCategoryRepository;

    public BookCategoryService(BookCategoryRepository bookCategoryRepository) { this.bookCategoryRepository = bookCategoryRepository;
    }

    public List<Object> getBooksByCategoryId(Long id) {
        return bookCategoryRepository.findAllByCategoryId(id);
    }
}
