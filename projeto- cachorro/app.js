var swiper = new Swiper(".blogswiper" ,{
  pagination:{
    el:".swiper-pagination"
  },
  autoplay:{
    delay:2000,
  },
  loop:true,
 });
 
 let menu = document.querySelector("ul");
 let bars = document.querySelector(".header .fa-bars");

 bars.addEventListener("click", () =>{
  menu.classList.toggle("show");
 });