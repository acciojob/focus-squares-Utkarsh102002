
    let squares = document.querySelectorAll(".square");


    squares.forEach((i) => {

      i.addEventListener("mouseenter", () => {
        squares.forEach((j) => {
          if (j === i) {
            j.style.backgroundColor = "#E6E6FA";
          } else {
            j.style.backgroundColor = "#6F4E37"; 
        });
      });

      
      i.addEventListener("mouseleave", () => {
        squares.forEach((j) => {
          j.style.backgroundColor = "#E6E6FA";
        });
      });

    });