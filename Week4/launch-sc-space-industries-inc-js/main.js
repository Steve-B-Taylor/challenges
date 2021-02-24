let editButton = document.getElementById("edits");

editButton.addEventListener("click", () => {
  makeEdits();
});

let makeEdits = () => {
  newSlogan = "Keep on explorin' on";
  hc = document.getElementById("head-container");
  sh = document.getElementsByClassName("section-head");
  document.body.style.backgroundColor = "black";
  ld = document.getElementsByClassName("links-details");
  hc.style.backgroundColor = "black";
  hc.style.color = "white";

  shLen = sh.length;
  for (let i = 0; i < shLen; i++) {
    sh.item(i).style.color = "#87cefa";
  }

  ldLen = ld.length;
  for (let i = 0; i < ldLen; i++) {
    ld.item(i).style.color = "#ffd700";
  }

  cv = document.getElementById("core-list");
  // cv.removeChild(cv.childNodes[1]);
  cv.removeChild(cv.children[0]);

  m = document.getElementById("slogan");
  m.lastElementChild.textContent = newSlogan;
};
