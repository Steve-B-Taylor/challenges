// your code, here
const hidden = document.getElementById("coupon-code").innerText;

function showIt() {
  document.getElementById("coupon-code").innerText = "50OFF-YOWZA!";
  console.log(document.getElementById("coupon-code").innerText);
}

const show = document.querySelector("#click-here");

show.onmousedown = showIt;
