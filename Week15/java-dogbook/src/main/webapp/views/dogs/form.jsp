<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title> Add your dog </title>
  </head>
  <body>
    <form action="/dogs" method="post">
      <div>
      <h2> Add your pup's Profile!</h2>
        <table>
          <tr>
            <td><label for="firstName">(Dog) Name: </label></td>
            <td><input type="text" id="firstName" name="firstName" value="" /></td>
          </tr>
          <tr>
            <td><label for="lastName">Last name: </label></td>
            <td><input type="text" id="lastName" name="lastName" value="" /></td>
          </tr>
          <tr>
            <td><label for="breed">Breed: </label></td>
            <td><input type="text" id="breed" name="breed" value="" /></td>
          </tr>
          <tr>
            <td><label for="sex">Sex: </label></td>
            <td><input type="text" id="sex" name="sex" value="" /></td>
          </tr>
          <tr>
            <td><label for="photoUrl">Photo URL: </label></td>
            <td><input type="text" id="photoUrl" name="photoUrl" value="" /></td>
          </tr>
      </table>
      <input type="submit" value="Add Pup!" />
    </form>
  </body>
</html>