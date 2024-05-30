/** @format */

const Even = document.querySelector(".Even");
const Odd = document.querySelector(".Odd");
// const input = document.querySelector(".form-control");

Even.addEventListener("click", (e) => {
     e.preventDefault();

     const form = parseInt(document.querySelector(".form-control").value);
     const result = document.querySelector("#result");
     let even = 0;
     let odd = 0;

     for (let i = 0; i < form; i++) {
          if (i % 2 == 1) {
               odd++;
          } else {
               even++;
          }
     }
     result.innerHTML = `Even number : ${even}`;
});

Odd.addEventListener("click", (e) => {
     e.preventDefault();

     const form = parseInt(document.querySelector(".form-control").value);
     const result = document.querySelector("#result");
     let even = 0;
     let odd = 0;

     for (let i = 0; i < form; i++) {
          if (i % 2 == 1) {
               odd++;
          } else {
               even++;
          }
     }

     result.innerHTML = `Odd number : ${odd}`;
});
