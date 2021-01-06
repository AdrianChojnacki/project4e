const div = document.querySelector(`div`);

// Functions variables
let divX;
let divY;
let insertDivX;
let insertDivY;
let drawActive = false;

// Mousedown function
div.addEventListener(`mousedown`, (e) => {
  div.style.backgroundColor = "gray";

  insertDivX = e.offsetX;
  insertDivY = e.offsetY;

  drawActive = !drawActive;
});

// Mousemove function
div.addEventListener(`mousemove`, (e) => {
  if (drawActive) {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;

    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});

// Mouseup function
div.addEventListener(`mouseup`, () => {
  div.style.backgroundColor = "black";

  drawActive = !drawActive;
});
