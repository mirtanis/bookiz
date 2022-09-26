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
    public List<Object> findAllByTitle(@Param("word") String word);

    public List<Book> findTop3ByOrderByCntDesc();

    public List<Book> findAllByOrderByCntDesc();

    @Query(value = "SELECT b FROM Book b ORDER BY b.createdate DESC")
    public List<Object> findAllOrderByCreatedateDesc();
}
