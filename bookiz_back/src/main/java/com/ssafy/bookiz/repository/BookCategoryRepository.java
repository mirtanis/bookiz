package com.ssafy.bookiz.repository;

import com.ssafy.bookiz.domain.BookCategory;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {
//    @EntityGraph(attributePaths = {""}, type=EntityGraph.EntityGraphType.LOAD)
    @Query(value = "SELECT bc.book FROM BookCategory bc WHERE bc.category.id = :id")
    public List<Object> findAllByCategoryId(@Param("id") Long id);
}

