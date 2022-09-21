package com.ssafy.bookiz.service;

import com.ssafy.bookiz.domain.BookDto;
import com.ssafy.bookiz.repository.BookCategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class BookCategoryService {

    private BookCategoryRepository bookCategoryRepository;

    private final ModelMapper modelMapper;

    public BookCategoryService(BookCategoryRepository bookCategoryRepository, ModelMapper modelMapper) {
        this.bookCategoryRepository = bookCategoryRepository;
        this.modelMapper = modelMapper;
    }

    public List<Object> getBooksByCategoryId(Long id) {
        List<Object> books = bookCategoryRepository.findAllByCategoryId(id);
        List<Object> categoryBooks = books.stream()
                .map(book -> modelMapper.map(book, BookDto.class))
                .collect(Collectors.toList());
        return categoryBooks;
    }
}
