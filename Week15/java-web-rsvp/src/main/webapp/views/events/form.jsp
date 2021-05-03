<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title> Add a new Order </title>
  </head>
  <body>
    <form action="/rsvps" method="post">
      <div>
        <label for="firstName">First name: </label>
        <input type="text" id="firstName" name="firstName" required />
      </div>
      <div>
        <label for="lastName">Last name: </label>
        <input type="text" id="lastName" name="lastName" required />
      </div>
      <div>
        <label for="email">Email: </label>
        <input type="text" id="email" name="email" required />
      </div> required
        <label for="phone">Phone Number: </label>
        <input type="text" id="phone" name="phone" required />
      </div>
      <div>
        <label for="contactMethod">Contact method: </label>
        <select name="contactMethod" required >
          <option value="" disabled selected></option>
          <option value="phone">Phone</option>
          <option value="text">SMS</option>
        </select>
      </div>
      <input type="submit" value="Signup" />
    </form>
  </body>
</html>