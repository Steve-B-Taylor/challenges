<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="order" value="${requestScope.order}" />
<!DOCTYPE html>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title> Order details </title>
  </head>
  <body>
    <div>
      Username: <c:out value="${order.username}"/><br>
      Item: <c:out value="${order.itemName}"/>
      <c:if test="${order.glutenFree}"> (GF)
      </c:if>
      <br>Quantity: <c:out value="${order.itemQuantity}"/><br>
      <img src="<c:out value="${order.imageUrl}" /> " width="400"/><br>
    </div>
  </body>
</html>