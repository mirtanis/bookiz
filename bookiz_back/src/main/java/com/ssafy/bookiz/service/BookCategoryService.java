package com.ssafy.bookiz.service;

import com.ssafy.bookiz.domain.BookCategory;
import com.ssafy.bookiz.repository.BookCategoryRepository;
import com.ssafy.bookiz.repository.CategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
// for log.info
@Slf4j
public class BookCategoryService {

    private BookCategoryRepository bookCategoryRepository;

    public BookCategoryService(BookCategoryRepository bookCategoryRepository) { this.bookCategoryRepository = bookCategoryRepository;
    }

    public List<Object> getBooksByCategoryId(Long id) {
        return bookCategoryRepository.findAllByCategoryId(id);
    }

    public List<Object> getBestBooks() {
        return bookCategoryRepository.findAllOrderByCnt();
    }

    public List<Object> getNewBooks() {
        return bookCategoryRepository.findAllOrderByCreatdate();
    }
}
