INSERT INTO bookiz.category (name) VALUES ("잠자기 좋은");
INSERT INTO bookiz.category (name) VALUES ("전래동화");

INSERT INTO bookiz.book (cnt, image, info, page, title, createdate) 
VALUES (0, "assets/images/금도끼 은도끼/4.jpg", "정직한 나무꾼은 금도끼를 얻고 욕심쟁이 나무꾼은 쇠도끼마저 잃게 되었다는 내용의 설화", 18, "금도끼 은도끼", DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s'));

INSERT INTO bookiz.book_category (book_id, category_id) VALUES (1, 2);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "옛날 어느 마을에 마음씨 착한 나무꾼이 살았어요.", "assets/images/금도끼 은도끼/1.jpg", 1, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "착한 나무꾼은 오늘도 지게를 지고 산으로 올라갔답니다.", "assets/images/금도끼 은도끼/1.jpg", 2, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "나무꾼이 연못가에 지게를 내려놓고 부지런히 나무를 하는데
갑자기 손이 미끄러지면서, 그만 도끼가 연못에 풍덩 빠지고 말았어요.", "assets/images/금도끼 은도끼/2.jpg", 3, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "나무꾼이 연못가에 지게를 내려놓고 부지런히 나무를 하는데
갑자기 손이 미끄러지면서, 그만 도끼가 연못에 풍덩 빠지고 말았어요.", "assets/images/금도끼 은도끼/2.jpg", 4, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "아이고, 이를 어째 하나밖에 없는 도끼가 물에 빠지다니 이제 부모님을 어떻게 모시나... 으흑흑", "assets/images/금도끼 은도끼/2.jpg", 5, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "나무꾼은 바닥에 주저앉아 엉엉 울었어요.", "assets/images/금도끼 은도끼/2.jpg", 6, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "그때였어요. 펑! 소리가 나더니 연못에서 희고 긴 수염을 가진 산신령이 나타났어요.", "assets/images/금도끼 은도끼/3.jpg", 7, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "나는 이 산을 지키는 산신령이니라.", "assets/images/금도끼 은도끼/3.jpg", 8, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "무슨 일로 울고있느냐", "assets/images/금도끼 은도끼/3.jpg", 9, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "하나뿐인 도끼를 연못에 빠트렸습니다.", "assets/images/금도끼 은도끼/3.jpg", 10, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "앞으로 무슨 수로 부모님을 모실지 걱정이 되어...", "assets/images/금도끼 은도끼/3.jpg", 11, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "나무꾼의 말에 산신령은 가만히 고개를 끄덕이더니
물속으로 들어갔다가 잠시 후에 다시 나타났어요.", "assets/images/금도끼 은도끼/3.jpg", 12, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "산신령은 번쩍번쩍 빛나는 금도끼를 보여주며 말했어요.", "assets/images/금도끼 은도끼/4.jpg", 13, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "나무꾼아 , 이 금도끼가 네 도끼냐?", "assets/images/금도끼 은도끼/4.jpg", 14, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "네? 이 금도끼가요? 아닙니다.", "assets/images/금도끼 은도끼/4.jpg", 15, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "산신령은 이번에 은도끼를 내밀면서 말했어요.", "assets/images/금도끼 은도끼/4.jpg", 16, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "그럼 이 은도끼가 네 도끼냐?", "assets/images/금도끼 은도끼/4.jpg", 17, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "그것도 제 도끼가 아닙니다.", "assets/images/금도끼 은도끼/4.jpg", 18, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "산신령은 나무꾼의 낡은 쇠도끼를 내밀면서 말했어요.", "assets/images/금도끼 은도끼/5.jpg", 19, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "그럼 이 낡은 쇠도끼가 네 도끼냐?", "assets/images/금도끼 은도끼/5.jpg", 20, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "네 맞습니다. 그 도끼가 제 도끼입니다", "assets/images/금도끼 은도끼/5.jpg", 21, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "허허허, 참으로 정직한 청년이로구나", "assets/images/금도끼 은도끼/5.jpg", 22, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "상으로 이 도끼들을 모두 주마 하하하", "assets/images/금도끼 은도끼/5.jpg", 23, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "착한 나무꾼은 금도끼와 은도끼, 그리고 자신의 낡은 도끼까지 모두 받아 돌아왔어요.", "assets/images/금도끼 은도끼/6.jpg", 24, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "이 소식을 들은 이웃집 욕심쟁이 나무꾼은 당장 연못으로 달려갔어요.", "assets/images/금도끼 은도끼/6.jpg", 25, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "그리고는 자신의 쇠도끼를 연못에 던진뒤 엉엉 우는 시늉을 하기 시작했답니다.", "assets/images/금도끼 은도끼/7.svg", 26, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "아이고 아이고, 이를 어찌할고 내 도끼가 연못 속에 퐁당 빠져 버렸네!", "assets/images/금도끼 은도끼/7.svg", 27, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "펑! 이윽고 산신령이 나타나 우는 까닭을 물었어요.", "assets/images/금도끼 은도끼/7.svg", 28, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "아이고 아이고, 이를 어찌할고 내 도끼가 연못 속에 퐁당 빠져 버렸네!", "assets/images/금도끼 은도끼/7.svg", 29, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "펑! 이윽고 산신령이 나타나 우는 까닭을 물었어요.", "assets/images/금도끼 은도끼/8.svg", 30, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "아이고 산신령님 나무를 하다가 그만 제 도끼를 연못속에 빠뜨렸지 뭡니까요?", "assets/images/금도끼 은도끼/8.svg", 31, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "산신령은 물속으로 들어갔다가 잠시후 금도끼를 가지고 나와 물었어요.", "assets/images/금도끼 은도끼/9.svg", 32, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "이 금도끼가 네 도끼냐?", "assets/images/금도끼 은도끼/9.svg", 33, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "번쩍번쩍 빛나는 금도끼를 보자 욕심 많은 나무꾼은 두 손을 내밀며 말했어요.", "assets/images/금도끼 은도끼/9.svg", 34, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "네 산신령님 그 도끼가 제 도끼입니다. 어서 이리 주십시오.", "assets/images/금도끼 은도끼/9.svg", 35, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "산신령이 번쩍이는 은도끼를 보여주며 물었어요.", "assets/images/금도끼 은도끼/10.svg", 36, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "흠 그럼, 이 은도끼도 네 도끼냐?", "assets/images/금도끼 은도끼/10.svg", 37, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "네 맞습니다. 그 은도끼도 제 도끼입니다", "assets/images/금도끼 은도끼/10.svg", 38, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "산신령은 욕심쟁이 나무꾼의 쇠도끼도 가져와 한번 더 물었어요.", "assets/images/금도끼 은도끼/10.svg", 39, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "그렇다면 이 쇠도끼도 네 도끼냐?", "assets/images/금도끼 은도끼/10.svg", 40, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "예, 그 쇠도끼도 제 도끼입니다!", "assets/images/금도끼 은도끼/10.svg", 41, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "네 이놈! 이런 고얀 녀석을 보았나!", "assets/images/금도끼 은도끼/12.svg", 42, 0, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "욕심 많은 나무꾼의 말에 산신령은 몹시 화가 났어요.", "assets/images/금도끼 은도끼/12.svg", 43, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "너 같은 욕심쟁이에게는 도끼를 하나도 줄 수 없다!", "assets/images/금도끼 은도끼/12.svg", 44, 1, 1);

INSERT INTO bookiz.book_content (audio, content, image, page, type, book_id)
VALUES ("오디오주소", "욕심쟁이 나무꾼은 산신령에게 크게 혼이 나고
결국 자신의 도끼만 잃고 빈 손으로 집에 돌아갔답니다.", "assets/images/금도끼 은도끼/12.svg", 45, 1, 1);

