const darkPath =
  "M22 34.5C22 52.7254 33 66 31.5 66C14.103 66 0 51.2254 0 33C0 14.7746 14.103 0 31.5 0C33.5 0 22 16.2746 22 34.5Z";
const dayPath =
  "M63 33C63 51.2254 48.897 66 31.5 66C14.103 66 0 51.2254 0 33C0 14.7746 14.103 0 31.5 0C48.897 0 63 14.7746 63 33Z";
const darkMode = document.querySelector("#dark");


let toogle = false;

darkMode.addEventListener("click", () => {
  //We Use anime here
  var Path, sectionColor, angleRotate, svgColor;

  if (toogle == false) {
    svgColor = "#f5f5f5";
    Path = darkPath;
    angleRotate = "320";
    sectionColor = "#323232";
  
  } else {
    svgColor = "#ffd337";
    Path = darkPath;
    angleRotate = "60";
    sectionColor = "#f7f7f7";
    Path = dayPath;
  }

  toogle = toogle ? true : false;
  const timeline = anime.timeline({
    duration: 900,
    easing: "easeOutExpo"
  });

  timeline
    .add({
      targets: ".sun",
      fill: svgColor,
      d: [{ value: Path }]
    })
    .add(
      {
        targets: darkMode,
        rotate: angleRotate
      },
      "-=700"
    )
    .add(
      {
        targets: ".main",
        backgroundColor: sectionColor
      },
      "-=800"
    );

  if (toogle == false) {
    toogle = true;
  } else {
    toogle = false;
  }
});
