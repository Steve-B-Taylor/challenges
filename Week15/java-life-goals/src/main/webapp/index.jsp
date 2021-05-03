<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="java.util.ArrayList" %>

  <% ArrayList<String> lifeGoals = new ArrayList<String>();
    lifeGoals.add("get job");
    lifeGoals.add("kill it for ages");
    lifeGoals.add("retire early-ish");
    lifeGoals.add("sail all over the world");
    lifeGoals.add("enjoy life");
    request.setAttribute("goalList", lifeGoals);
   %>

<!DOCTYPE html>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Hello from JSP</title>
  </head>
  <body>
    <h2>Life Goals</h2>
    
    <!-- Your Code Here -->
    <ul>
    <c:forEach items="${goalList}" var="listItem">
      <li><c:out value="${listItem}" />
    </c:forEach>
    </ul>

  </body>
</html>