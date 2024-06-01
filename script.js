/** @format */

const Even = document.querySelector(".Even");
const Odd = document.querySelector(".Odd");
// const input = document.querySelector(".form-control");

Even.addEventListener("click", (e) => {
     e.preventDefault();

     const from = parseInt(document.querySelector(".from").value);
     const to = parseInt(document.querySelector(".to").value);
     

     const result = document.querySelector("#result");
     let even = 0;
     let odd = 0;

     for (let i = from; i <= to; i++) {
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

     
     const from = parseInt(document.querySelector(".from").value);
     
     const to = parseInt(document.querySelector(".to").value);
     
     const result = document.querySelector("#result");
     let even = 0;
     let odd = 0;

     for (let i = from; i <= to; i++) {
          if (i % 2 == 1) {
               odd++;
          } else {
               even++;
          }
     }

     result.innerHTML = `Odd number : ${odd}`;
});
