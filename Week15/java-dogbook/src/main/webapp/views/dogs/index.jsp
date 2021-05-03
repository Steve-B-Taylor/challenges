<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import ="com.launchacademy.dogs.Dog" %>
<c:set var="dog" value="${requestScope.dogs}" />
<!DOCTYPE html>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title> DogBook Profiles </title>
  </head>
  <body>
    <h1>DogBook Profiles</h1>
    <div>
      <ul>
      <c:forEach items="${dogs}" var="dog">
        Name:  <c:out value="${dog.firstName}"/> <c:out value="${dog.lastName}"/><br>
        <img src="<c:out value="${dog.photoUrl}" /> " width="300"/><br>
      </c:forEach>
      </ul>
    </div>
  </body>
</html>