// Load navbar from separate file

fetch("/navbar/navbar.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("navbar-container").innerHTML = html;
  });
