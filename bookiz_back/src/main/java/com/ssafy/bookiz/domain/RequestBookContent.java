package com.ssafy.bookiz.domain;

public class RequestBookContent {

    private Long id;

    private Integer page;

    private String content;

    private String image;

    private String audio;

    private Integer type;

    private Long book_id;

    public RequestBookContent() {
        super();
    }

    public RequestBookContent(Long id, Integer page, String content, String image, String audio, Integer type, Long book_id) {
        this.id = id;
        this.page = page;
        this.content = content;
        this.image = image;
        this.audio = audio;
        this.type = type;
        this.book_id = book_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getAudio() {
        return audio;
    }

    public void setAudio(String audio) {
        this.audio = audio;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Long getBook_id() {
        return book_id;
    }

    public void setBook_id(Long book_id) {
        this.book_id = book_id;
    }
}
