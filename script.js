function Main() {
  var bloco = document.getElementById("bloco");
  var pos = { left: 0, right: 0, top: 0, bottom: 0 };
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        bloco.style.right = (pos.right += 5) + "px";
        bloco.style.left = (pos.left -= 5) + "px";
        break;
      case 38:
        bloco.style.top = (pos.top -= 5) + "px";
        bloco.style.bottom = (pos.bottom += 5) + "px";
        break;
      case 39:
        bloco.style.right = (pos.right -= 5) + "px";
        bloco.style.left = (pos.left += 5) + "px";
        break;
      case 40:
        bloco.style.top = (pos.top += 5) + "px";
        bloco.style.bottom = (pos.bottom -= 5) + "px";
        break;
    }
  };
}

document.addEventListener("DOMContentLoaded", Main);
