package com.ssafy.bookiz.service;

import com.ssafy.bookiz.domain.Book;
import com.ssafy.bookiz.domain.BookContent;
import com.ssafy.bookiz.domain.BookDto;
import com.ssafy.bookiz.domain.RequestBookContent;
import com.ssafy.bookiz.repository.BookContentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookContentService {

    private BookContentRepository bookContentRepository;

    public BookContentService(BookContentRepository bookContentRepository) {
        this.bookContentRepository = bookContentRepository;
    }

    public void addContents(List<RequestBookContent> bookContents, Book book) {
        for (int i = 0; i < bookContents.size(); i++) {
            BookContent content = new BookContent(bookContents.get(i));
            content.setBook(book);
            bookContentRepository.save(content);
        }
    }

    public List<Object> getBookContents(Long id) {
        return bookContentRepository.getBookContents(id);
    }
}
