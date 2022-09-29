package com.ssafy.bookiz.repository;

import com.ssafy.bookiz.domain.BookContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookContentRepository extends JpaRepository<BookContent, Long> {

    @Query(value = "SELECT bc FROM BookContent bc WHERE bc.book.id = :id ORDER BY bc.page")
    public List<Object> getBookContents(@Param("id") Long id);

}
