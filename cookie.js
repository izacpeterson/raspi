/** @format */

let bigCookie = document.querySelector("#bigCookie");
setInterval(() => {
  bigCookie.click();
});
setInterval(() => {
  let un = document.querySelectorAll(".product");
  for (let i = un.length - 1; i >= 0; i--) {
    if (un[i]) un[i].click();
  }
  document.querySelectorAll(".upgrade").forEach((el) => {
    if (el) el.click();
  });
}, 5000);
