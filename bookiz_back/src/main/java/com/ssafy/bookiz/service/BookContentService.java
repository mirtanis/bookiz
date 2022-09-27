package com.ssafy.bookiz.service;

import com.ssafy.bookiz.domain.BookContent;
import com.ssafy.bookiz.repository.BookContentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookContentService {

    private BookContentRepository bookContentRepository;

    public BookContentService(BookContentRepository bookContentRepository) {
        this.bookContentRepository = bookContentRepository;
    }

    public void addContents(List<BookContent> bookContents) {
        for (int i = 0; i < bookContents.size(); i++) {
            bookContentRepository.save(bookContents.get(i));
        }
    }

    public List<Object> getBookContents(Long id) {
        return bookContentRepository.getBookContents(id);
    }
}
