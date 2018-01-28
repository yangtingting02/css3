window.onload = () => {
  const controls = document.getElementsByClassName("st-control");

  let idx = 0;
  let click = false;
  setInterval(() => {
    if (click) {
      click = false;
    } else {
      idx = idx + 1;
      if (idx >= controls.length) {
        idx = 0;
      }
      controls[idx].checked = true;
    }
  }, 3000);

  for (var i=0; i < controls.length; i++){
    controls[i].onclick = ((index) => {
      return () => {
        idx = index;
        click = true;
      }
    })(i);
  }
};
