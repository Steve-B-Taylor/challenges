// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName("nav");

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
document.getElementById("sidebar-left");

// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName("pages");
document.getElementsByClassName("groups");

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
document.getElementsByClassName("favorites")[0].className = "Least Favs";

// Exercise 5): Find the first of the ads in the sidebar and hide it.
document.getElementsByClassName("ad-slot")[0].className = "post-hidden";

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
document.getElementsByClassName("post-hidden")[0].className = "ad-slot";

// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
document
  .getElementsByClassName("ad-slot")[0]
  .lastElementChild.setAttribute("src", "egg.jpg");

// Exercise 8): Find Sam's post and change its text to something incredible.
document.querySelectorAll(".media-body")[4].lastChild.innerText =
  "something incredible";

// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
document.querySelector(".post-actions").firstChild.className = "post-liked";

// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Share to watch it turn red.
document.querySelectorAll(".post-actions")[1].lastElementChild.className =
  "post-shared";

// Exercise 11: On the second post, remove the `.post-shared` class from the `li` containing the text Share.
document
  .querySelectorAll(".post-actions")[1]
  .lastElementChild.removeAttribute("class");
