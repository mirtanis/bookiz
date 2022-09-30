package com.ssafy.bookiz.controller;

import com.ssafy.bookiz.domain.Book;
import com.ssafy.bookiz.domain.BookDto;
import com.ssafy.bookiz.domain.RequestBookContent;
import com.ssafy.bookiz.service.BookCategoryService;
import com.ssafy.bookiz.service.BookContentService;
import com.ssafy.bookiz.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@RestController
@Slf4j
@CrossOrigin("*")
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    BookService bookService;

    @Autowired
    BookCategoryService bookCategoryService;

    @Autowired
    BookContentService bookContentService;

    private ModelMapper modelMapper;

    @GetMapping("/all")
    public ResponseEntity<?> findAll() throws Exception {
        try {
            List<Object> allBooks = bookService.findAll();
            if (allBooks.size() == 0) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<Object>>(allBooks, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/category")
    public ResponseEntity<?> getBooksByCategoryId(@RequestParam Long id) {
        try {
            List<Object> books = bookCategoryService.getBooksByCategoryId(id);
            return new ResponseEntity<List<Object>>(books, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/rank")
    public ResponseEntity<?> getBestBooks() {
        try {
            List<Object> books = bookService.getBestBooks();
            return new ResponseEntity<List<Object>>(books, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/new")
    public ResponseEntity<?> getNewBooks() {
        try {
            List<Object> books = bookService.getNewBooks();
            return new ResponseEntity<List<Object>>(books, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("")
    public ResponseEntity<?> getBookContents(@RequestParam Long id) {
        try {
            List<Object> contents = bookContentService.getBookContents(id);
            return new ResponseEntity<List<Object>>(contents, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/detail")
    public ResponseEntity<?> getBook(@RequestParam Long id) {
        try {
            BookDto book = bookService.findById(id);
//            BookDto bookDto = modelMapper.map(book, BookDto.class);
//            bookDto.setId(book.getId());
//            bookDto.setCreate_date(book.getCreate_date());
//            bookDto.setTitle(book.getTitle());
//            bookDto.setImage(book.getImage());
//            bookDto.setInfo(book.getInfo());
//            bookDto.setCnt(book.getCnt());
//            bookDto.setPage(book.getPage());

            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchBook(@RequestParam String word) {
        try {
            List<Object> books = bookService.findAllByTitle(word);
            if (books.size() == 0) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<Object>>(books, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/pluscnt")
    public ResponseEntity<?> plusCnt(@RequestParam Long id) {
        BookDto book = bookService.plusCnt(id);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PatchMapping("/cnt")
    public ResponseEntity<?> plusCntTest(@RequestBody Long id) {
        BookDto book = bookService.plusCnt(id);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PatchMapping("/cnt/{id}")
    public ResponseEntity<?> cntPlus(@PathVariable(value = "id") Long id) {
        BookDto book = bookService.plusCnt(id);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PostMapping("/addBook")
    public ResponseEntity<?> addBook(@RequestBody Book bookInput) {
        System.out.println("addBook 호출");
        //List<Object> books = bookService.findAllByTitle(bookInput.getTitle());
        Book book = bookInput;
//        if(books.size() > 0) {
//            BookDto bookDto = (BookDto) books.get(0);
//            book = bookService.findById2(bookDto.getId());
//        }else {
//            book = bookInput;
//        }
        bookService.addBook(book);

        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PostMapping("/addContents")
    public ResponseEntity<?> addContents(@RequestBody List<RequestBookContent> reqs) {
        System.out.println("addContents 호출");
        Book book = bookService.findById2(reqs.get(0).getBook_id());
        bookContentService.addContents(reqs, book);
        return new ResponseEntity<>(HttpStatus.OK);
    }// end of addContents API

    @PostMapping("/uploadFile")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("book_id") Long book_id) {
        System.out.println("uploadFile 호출");
        String fileName = file.getOriginalFilename();
        String filePath = Paths.get("").toAbsolutePath() + File.separator + "tale" + File.separator + book_id;
        File folder = new File(filePath);
        if(!folder.exists()) {
            if(!folder.mkdirs()) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        filePath = filePath + File.separator + fileName;
        File temp = new File(filePath);
        if(!(temp.exists())) {
            try (FileOutputStream fos = new FileOutputStream(filePath)){
                fos.write(file.getBytes());
                System.out.println("파일 업로드 성공 : "+fileName);
            } catch (Exception e) {
                System.out.println("파일 업로드 실패 : "+fileName);
                return new ResponseEntity<>(HttpStatus.ACCEPTED);
            }
        }

        return new ResponseEntity<>(filePath, HttpStatus.OK);
    }// end of uploadFile API

    @GetMapping("/display")
    public ResponseEntity<?> display(@RequestParam("image") String image, @RequestParam("id") Long id) {
        String filePath = Paths.get("").toAbsolutePath() + File.separator + "tale" + File.separator + id + File.separator + image;
        Resource req = new FileSystemResource(filePath);
        if(!req.exists()) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        try {
            HttpHeaders header = new HttpHeaders();
            header.add("Content-Type", Files.probeContentType(Paths.get(filePath)));
            return new ResponseEntity<>(req, header, HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }// end of display API

    @GetMapping("/audiofile")
    public ResponseEntity<?> audiofile(@RequestParam("audio") String audio, @RequestParam("id") Long id) {
        String filePath = Paths.get("").toAbsolutePath() + File.separator + "tale" + File.separator + id + File.separator + audio;
        Resource req = new FileSystemResource(filePath);
        if (!req.exists()) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        try {
            HttpHeaders header = new HttpHeaders();
            header.add("Content-Type", "audio/mp3");
            return new ResponseEntity<>(req, header, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
