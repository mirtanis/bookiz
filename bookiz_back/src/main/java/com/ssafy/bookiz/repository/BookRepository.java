package com.ssafy.bookiz.repository;

import com.ssafy.bookiz.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    @Query(value = "SELECT b FROM Book b WHERE b.title LIKE CONCAT('%', :word, '%')")
    public List<Book> findAllByTitle(@Param("word") String word);

    @Query(value = "SELECT b FROM Book b ORDER BY b.cnt DESC")
    public List<Object> findAllOrderByCnt();

    @Query(value = "SELECT b FROM Book b ORDER BY b.create_date DESC")
    public List<Object> findAllOrderByCreateDate();
}
