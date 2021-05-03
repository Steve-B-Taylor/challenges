<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Hello from JSP</title>
  </head>
  <body>
    <p>The date is <%= (new java.util.Date()).toLocaleString() %></p>
  </body>
</html>