package com.ssafy.bookiz.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {
    private Long id;

    private String title;

    private String info;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private Timestamp createdate;

    private String image;

    private Integer page;

    private Integer cnt;
}
