FROM openjdk:8
ARG JAR_FILE=./build/libs/bookiz-0.0.1-SNAPSHOT.jar
RUN mkdir -p /bookiz_back
COPY ./ /bookiz_back
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
EXPOSE 8081

# 호스트의 현재 디렉터리에 test 파일을 컨테이너(컨테이너 아이디 379***)의 / 디렉터리로 복사
RUN docker container cp ./test 379:

#FROM openjdk:8
#RUN mkdir -p /bookiz_back
#COPY ./ /bookiz_back

#RUN ls
#WORKDIR /usr

# RUN cp secret/application-aws.properties /bookiz_back/src/main/resources/
# WORKDIR /bookiz_back

#RUN chmod +x ./gradlew
#RUN ./gradlew build
#ENTRYPOINT ["java", "-jar", "/build/libs/bookiz-0.0.1-SNAPSHOT.jar"]
#EXPOSE 8081
