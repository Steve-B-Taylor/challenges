<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import ="com.launchacademy.games.Game" %>
<%@ page import="java.util.ArrayList" %>
<c:set var="game" value="${requestScope.games}" />
<!DOCTYPE html>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <style>
  table, th, td {
    border: 1px solid black;
  }
  </style>
  <title> Games </title>
  </head>
  <body>
    <div>
      <table>
        <tr>
          <th>Red Team P1</th>
          <th>Red Team P2</th>
          <th>Red Team Score</th>
          <th>Blue Team P1</th>
          <th>Blue Team P2</th>
          <th>Blue Team Score</th>
          <th>Winner</th>
        </tr>
        <c:forEach items="${games}" var="game">
          <c:set var="winningTeam" value="Tie"/>
          <c:if test="${game.redTeamScore > game.blueTeamScore}">
            <c:set var="winningTeam" value="Red Team"/>
          </c:if>
          <c:if test="${game.redTeamScore < game.blueTeamScore}">
            <c:set var="winningTeam" value="Blue Team"/>
          </c:if>
          <tr>
            <td><c:out value="${game.redP1}"/></td>
            <td><c:out value="${game.redP2}"/></td>
            <td><c:out value="${game.redTeamScore}"/></td>
            <td><c:out value="${game.blueP1}"/></td>
            <td><c:out value="${game.blueP2}"/></td>
            <td><c:out value="${game.blueTeamScore}"/></td>
            <td><c:out value="${winningTeam}"/></td>
          </tr>
        </c:forEach>
      </table>
    </div>
  </body>
</html>