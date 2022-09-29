#FROM openjdk:8
#ARG JAR_FILE=./build/libs/bookiz-0.0.1-SNAPSHOT.jar
#RUN mkdir -p /bookiz_back
#COPY ./ /bookiz_back
#COPY ${JAR_FILE} app.jar
#ENTRYPOINT ["java", "-jar", "/app.jar"]
#EXPOSE 8081

FROM openjdk:8
RUN mkdir -p /bookiz_back
COPY ./ /bookiz_back
# RUN cp secret/application-aws.properties /bookiz_back/src/main/resources/
RUN cd bookiz_back/
RUN ./gradlew build
ENTRYPOINT ["java", "-jar", "/bookiz_back/build/libs/bookiz-0.0.1-SNAPSHOT.jar"]
EXPOSE 8081
