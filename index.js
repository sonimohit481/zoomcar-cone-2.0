function openNav() {
  document.getElementById("side-navbar").style.width = "400px";

  document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.6)";
  document.getElementById("main").style.width = "100vw";
  document.getElementById("main").style.height = "100vh";
  document.getElementById("main").style.position = "fixed";
  document.getElementById("main").style.top = "0";
  document.getElementById("main").style.left = "0";

  document.getElementById("main").addEventListener("click", () => {
    closeNav();
  });
}

function closeNav() {
  document.getElementById("side-navbar").style.width = "0";
  document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0)";
  document.getElementById("main").style.width = "0";
  document.getElementById("main").style.height = "0";
  document.getElementById("main").style.position = "none";
  document.getElementById("main").style.top = "0";
  document.getElementById("main").style.left = "0";
}

let accordian = document.querySelector(".content-box");

accordian.addEventListener("click", () => {
  accordian.classList.toggle("active");
});

let userinfo = JSON.parse(localStorage.getItem("userinfo"));
if (userinfo != null) {
  let ele = document.getElementById("loginn-at");
  ele.innerHTML = ` <a href="afterlogin.html" id="loginn-at">${userinfo.name} &nbsp; &nbsp;<span class="material-icons-outlined" id="spanspan-at">
  account_circle
  </span></a>`;
}
