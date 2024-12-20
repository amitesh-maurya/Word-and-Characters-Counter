// charechter count
let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function () {
  var text = this.value;
  let char = text.length;
  document.getElementById("char").innerHTML = char;

  // words count
  text = text.trim();
  let words = text.split(" ");
  let cleanList = words.filter(function (elmt) {
    return elmt != "";
  });
  document.getElementById("word").innerHTML = cleanList.length;
});
