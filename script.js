let onav=document.getElementById("open-nav");
let cnav=document.getElementById("close-nav");
let allbdy=document.getElementById("section");
let header=document.getElementById("header");

let nav=document.getElementById("nav");
onav.addEventListener('click',()=>{
    nav.style.right="0"
    // header.style.right="30vw"
    allbdy.style.filter="blur(3px)"
})
cnav.addEventListener('click',()=>{
    nav.style.right="-60vw"
    // header.style.right="0vw"
    allbdy.style.filter="none"
})