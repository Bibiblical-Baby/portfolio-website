// selecting our elements 

let menu = document.querySelector('.menu');
let toggleMenu = document.getElementById('toggle-menu');
const menuItems = document.querySelectorAll('[data-menu]');
let closeMenu = document.querySelector('.fa-times');
let rightsliders = document.querySelectorAll('.from-right');
let leftsliders = document.querySelectorAll('.from-left');
const columns = document.querySelectorAll('.column');


// event listeners

closeMenu.onclick = ()=>{
    menu.classList.remove('toggle');;
}
menuItems.forEach((menuitem)=>{
    menuitem.onclick = ()=>{
      menu.classList.toggle('toggle');
    }
})
toggleMenu.onclick = ()=>{
    menu.classList.add('toggle');
    toggleMenu.style = 'z-index: 10000000';
}


// intersection observers 


 let options = {
     threshold: 0,
     rootMargin: "0px 0px -70px 0px"
 };
 let appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll){
     entries.forEach(entry => {
         if(!entry.isIntersecting){
             return;
         }else{
             entry.target.classList.add('appear');
             appearOnScroll.unobserve(entry.target);
         }
     });
 }, options);
 let slideOnScroll = new IntersectionObserver(function (entries, slideOnScroll){
     entries.forEach(entry => {
         if(!entry.isIntersecting){
             return;
         }
         else{
             entry.target.classList.add('slide');
             slideOnScroll.unobserve(entry.target);
             window.scrollTo(0, 0);
         }
     });
 }, options);

 columns.forEach(column =>{
     appearOnScroll.observe(column);
 });

 rightsliders.forEach(slider =>{
     slideOnScroll.observe(slider);
 });
 leftsliders.forEach(slider =>{
     slideOnScroll.observe(slider);
 });