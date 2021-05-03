<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title> Add a new Order </title>
  </head>
  <body>
    <form action="/orders" method="post">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" value="" />
      </div>
      <div>
        <label for="itemName">Item name</label>
        <input type="text" id="itemName" name="itemName" value="" />
      </div>
      <div>
        <label for="itemQuantity">Item quantity</label>
        <input type="text" id="itemQuantity" name="itemQuantity" value="" />
      </div>
      <div>
        <label for="glutenFree">Gluten Free</label>
        <input type="radio" id="isGlutenFree" name="glutenFree" value="true" /><label>Yes</label>
        <input type="radio" id="notGlutenFree" name="glutenFree" value="false" /><label>No</label>
      </div>
      <div>
        <label for="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" name="imageUrl" value="" />
      </div>
      <input type="submit" value="Add Order" />
    </form>
  </body>
</html>