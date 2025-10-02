//your JS code here. If required.

let squares = document.querySelectorAll(".square");
squares.forEach((square, index) => {
  square.addEventListener("mouseenter", () => {
    squares.forEach((sq) => {
      if (sq === square) {
        sq.style.backgroundColor = "#E6E6FA";
      } else {
        sq.style.backgroundColor = "#6F4E37";
      }
    });
  });

  square.addEventListener("mouseleave", () => {
    squares.forEach((sq) => {
      sq.style.backgroundColor = "#E6E6FA";
    });
  });
});