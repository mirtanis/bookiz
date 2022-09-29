#FROM openjdk:8
#ARG JAR_FILE=./build/libs/bookiz-0.0.1-SNAPSHOT.jar
#RUN mkdir -p /bookiz_back
#COPY ./ /bookiz_back
#COPY ${JAR_FILE} app.jar
#ENTRYPOINT ["java", "-jar", "/app.jar"]
#EXPOSE 8081

FROM openjdk:8
ARG JAR_FILE=./var/jenkins_home/workspace/deploy/bookiz_back/build/libs/bookiz-0.0.1-SNAPSHOT.jar
RUN mkdir -p /bookiz_back
COPY ./ /bookiz_back

COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
EXPOSE 8081


#RUN chmod +x ./gradlew
#RUN ./gradlew build
#ENTRYPOINT ["java", "-jar", "/build/libs/bookiz-0.0.1-SNAPSHOT.jar"]
#EXPOSE 8081
