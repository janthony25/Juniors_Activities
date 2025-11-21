function hideShow() {
  let paragraph = document.getElementById("visibleparagraph");

  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
  }
  else {
    paragraph.style.display = "none";
  }
}