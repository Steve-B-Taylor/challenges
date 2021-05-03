<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@page import="java.util.Map" %>
<%@page import="java.util.HashMap" %>
<!DOCTYPE html>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>JSP Donut Orders</title>
  </head>
  <body>
    <%
      Map<String, Integer> donutOrders = new HashMap<String, Integer>();
      donutOrders.put("Jennifer", 10);
      donutOrders.put("Alex", 1);
      donutOrders.put("Carly", 3);
      request.setAttribute("MyMap", donutOrders);

      Map<String, String> favDonuts = new HashMap<String, String>();
      favDonuts.put("Jennifer", "Raspberry scone");
      favDonuts.put("Alex", "Blackberry Hibiscus");
      favDonuts.put("Carly", "Maple bar");
      request.setAttribute("MyMap", favDonuts);
    %>
    <h2>Donut Orders</h2>
    <p>The date is <%= (new java.util.Date()).toLocaleString() %></p>
    <ul>
      <% int totalDonuts = 0; %>
      <% String favMsg = ""; %>
      <% for (Map.Entry<String, Integer> entry : donutOrders.entrySet()) {
           String note = "";
           String key = entry.getKey();
           Integer value = entry.getValue();
           for (Map.Entry<String, String> fave : favDonuts.entrySet()) {
             String favKey = fave.getKey();
             String favValue = fave.getValue();
             if (key == favKey) {
               favMsg = "<ul><li>" + favValue + " is " + key + "'s favorite</ul>";
             }
           }
           if (value > 5) {
             note = " (Need to talk to " + key + " about gaming the donut system)";
             value = 2;
           }
          totalDonuts += value;
          out.println("<li>" + key + ": " + value + note + favMsg);
        }
      %>
    </ul>
    <% out.println("Total Donuts: " + totalDonuts); %>
  </body>
</html>