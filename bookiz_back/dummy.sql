SELECT * FROM bookiz.category;
SELECT * FROM bookiz.book_content;
SELECT * FROM bookiz.book_category;
SELECT * FROM bookiz.book;

INSERT INTO bookiz.category (name) VALUES ("잠자기 좋은");
INSERT INTO bookiz.category (name) VALUES ("전래동화");

INSERT INTO bookiz.book (cnt, image, info, page, title, createdate) 
VALUES (0, "썸네일주소", "흥부와 놀부의 인생 이야기", 18, "흥부와 놀부", DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s'));
INSERT INTO bookiz.book (cnt, image, info, page, title, createdate) 
VALUES (5, "썸네일주소", "인력거 장사가 잘돼도 너무 잘된다..?", 22, "운수 좋은 날", DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s'));
INSERT INTO bookiz.book (cnt, image, info, page, title, createdate) 
VALUES (3, "썸네일주소", "토끼와 거북이가 달리기 시합을..?", 15, "토끼와 거북이", DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s'));
INSERT INTO bookiz.book (cnt, image, info, page, title, createdate) 
VALUES (10, "썸네일주소", "강에 도끼를 빠드린 나무꾼의 운명은..!?", 12, "금도끼 은도끼", DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s'));

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "옛날 옛적에, 흥부와 놀부가 살고 있었어요.", "페이지사진", 1, 1, 1);
INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "흥부는 배고파서 형님을 찾아가서 말했답니다.", "페이지사진", 2, 1, 1);
INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "형님 너무 배고파요.", "페이지사진", 3, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "출근할게...", "페이지사진", 1, 0, 2);
INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "남편은 인력거를 끌고 나간다.", "페이지사진", 2, 1, 2);
INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "아내는 누워서 말이 없다.", "페이지사진", 3, 1, 2);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "토끼와 거북이는 경주를 하기로 했어요.", "페이지사진", 1, 1, 3);
INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "거북이가 토끼에게 말해요.", "페이지사진", 2, 1, 3);
INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "내가 널 이겨주겠어.", "페이지사진", 3, 0, 3);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "나무꾼이 도끼로 나무를 베고 있어요.", "페이지사진", 1, 1, 4);
INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "이런! 도끼를 강에 빠뜨렸어요.", "페이지사진", 2, 1, 4);
INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "나무꾼은 강에 주저앉아 울기 시작했어요.", "페이지사진", 3, 1, 4);

INSERT INTO bookiz.book_category (book_id, category_id) VALUES (1, 2);
INSERT INTO bookiz.book_category (book_id, category_id) VALUES (3, 2);
INSERT INTO bookiz.book_category (book_id, category_id) VALUES (2, 1);
INSERT INTO bookiz.book_category (book_id, category_id) VALUES (4, 2);