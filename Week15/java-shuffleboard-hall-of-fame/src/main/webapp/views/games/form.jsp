<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title> Add a new Order </title>
  </head>
  <body>
    <form action="/games" method="post">
    <h1>Shuffleboard Hall of Fame</h1>
    <h2>Red Team</h2>
      <div>
        <label for="redP1">Player 1 name: </label>
        <input type="text" id="redP1" name="redP1" value="" />
      </div>
      <div>
        <label for="redP2">Player 2 score: </label>
        <input type="text" id="redP2" name="redP2" value="" />
      </div>
      <div>
        <label for="redTeamScore">Red Team score: </label>
        <input type="text" id="redTeamScore" name="redTeamScore" value="" />
      </div>
    <h2>Blue Team</h2>
      <div>
        <label for="blueP1">Player 1 name: </label>
        <input type="text" id="blueP1" name="blueP1" value="" />
      </div>
      <div>
        <label for="blueP2">Player 2 score: </label>
        <input type="text" id="blueP2" name="blueP2" value="" />
      </div>
      <div>
        <label for="blueTeamScore">Blue Team score: </label>
        <input type="text" id="blueTeamScore" name="blueTeamScore" value="" />
      </div>
      <input type="submit" value="Record Game" />
    </form>
  </body>
</html>