# 로컬에서 DB 통신 테스트 하는 방법

1. MySQL 설치
    1. https://dev.mysql.com/downloads/windows/installer/8.0.html (8.0.30) 2022-09-16 기준
    2. Choosing a Setup Type : Custom => Select Products : [MySQL Servers] – [MySQL Server] – [MySQL Server 8.0] – [MySQL Server 8.0.3 – X64], [Applications] – [MySQL Workbench] – [MySQL Workbench 8.0] – [MySQL Workbench 8.0.3 – X64], [Documentation] – [Samples and Examples] – [Samples and Examples 8.0] – [Samples and Examples 8.0.3 – X86]
    3. Type and networking : Development Computer, TCP/IP, 3306, 33060, Open Windows Firewall ports for network access
    4. Authentication Method : Use Legacy Authentication Method (추후 파이썬 연동을 위해서 권장된다고 함)
    5. Accounts and Roles : root 비밀번호 설정 (기억해야됨)
    6. 환경변수 `C:\Program Files\MySQL\MySQL Server 8.0\bin` 추가
    7. cmd > `mysql -u root -p` > root 계정 비밀번호 입력 > `create user bookiz@localhost identified by 'bookiz1234';` > `grant all privileges on *.* to bookiz@localhost;` > `SHOW GRANTS FOR 'bookiz'@'localhost';` > 권한 부여 확인 > `flush privileges;`
2. MySQL Workbench 설치
    - 만약 MySQL 설치 과정에서 Workbench도 설치됐다면 생략 가능
    1. https://www.mysql.com/products/workbench/
    2. MySQL Workbench 8.0.30, OS: Microsoft Windows 64 bit (2022-09-09 기준)
    3. Visual Studio 2015 없으면 설치 (https://www.microsoft.com/ko-kr/download/details.aspx?id=48145)
3. Spring 실행
    1. /S07P22A103/bookiz_back/build/libs 경로에서 cmd 입력
    2. `java -jar bookiz-0.0.1-SNAPSHOT.jar`

4. MySQL Workbench 실행
   1. MySQL Connections +버튼
   2. Connection Name : 설정을 저장할 스키마 닉네임 (bookiz)
   3. Parameters > Hostname : 접속할 DB의 IP (Local : 127.0.0.1)
   4. Parameters > Port : MySQL 포트번호 (Default : 3306)
   5. Parameters > Username : DB에 접속할 때 사용할 계정 이름 (bookiz)
   6. Parameters > Password > Store in Vault : 1-7에서 생성할 때 비밀번호 (bookiz1234) 입력
   7. Test Connection : Countinue Anyway -> Ok -> Ok
   8. Create a new schema > Name : bookiz, Charset/Collation : utf8, utf8_bin 체크 > Apply
   9. 네브바 > File > Open SQL Script > dummy.sql 불러오기
   10. 불러온 sql문에서 마우스 커서를 빈 줄에 깜빡이게 해놓고, Ctrl + Shift + Enter