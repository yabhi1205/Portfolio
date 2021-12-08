// =================pre loader======================== 
var loader = document.querySelector(".preloader");
window.addEventListener("load",()=>{
    loader.style.display="none";
})
//======================header scroll=================
var Fname = document.querySelector(".h-name");
let sImage = document.querySelector("#sImage1");
let work = document.querySelector(".roll");
let shape1 = document.querySelector(".shape1");
document.addEventListener('scroll',()=>{
    let value = scrollY;
    Fname.style.transform="translateY("+(value)+"px)";
    sImage.style.transform="translateY("+(-value)+"px)";
    work.style.transform="translateY("+(value)+"px)";
    shape1.style.transform="rotateZ("+(value/10)+"deg)";
})
