let el = document.getElementById("app");

/* Geting the height and width of the element el */
const height = el.clientHeight;
const width = el.clientWidth;

/*
 * Adding a listener for mousemove event
 * Which will trigger function 'handleMove'
 * On mousemove
 */
el.addEventListener("mousemove", handleMove);

function handleMove(e) {
  /*
      * Get x y position of mouse cursor
      https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/layerX
      * With respect to the element
      * On mouseover
      */
  /* Store the x position */
  const xVal = e.layerX;
  const yVal = e.layerY;

  /*
   * Calculate rotation value along the Y and X-axis
   * Here the multiplier 20 is to
   * Control the rotation
   * You can change the value and see the results
   */

  const yRotation = 15 * ((xVal - width / 2) / width);
  const xRotation = -15 * ((yVal - height / 2) / height);

  /* Generate string for CSS transform property */
  const string =
    "perspective(500px) scale(1.1) rotateX(" +
    xRotation +
    "deg) rotateY(" +
    yRotation +
    "deg)";

  /* Apply the calculated transformation */
  el.style.transform = string;
}
/* Add listener for mouseout event, remove the rotation */
el.addEventListener("mouseout", function() {
  el.style.transform = "perspective(300px) scale(1) rotateX(0) rotateY(0)";
});
/* Add listener for mousedown event, to simulate click */
el.addEventListener("mousedown", function() {
  el.style.transform = "perspective(300px) scale(1) rotateX(0) rotateY(0)";
});
/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener("mouseup", function() {
  el.style.transform = "perspective(300px) scale(1.1) rotateX(0) rotateY(0)";
});
