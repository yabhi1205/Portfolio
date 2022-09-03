let header_bc = document.querySelector(".header-bc");
let header_text = document.querySelector(".header-text h1");
let header_value = 100;

window.addEventListener("scroll",(e)=>{
    if(header_bc.getBoundingClientRect().bottom == window.innerHeight){
        header_value = 100
    }
    if(header_value<200){
        header_value+=.4
        header_bc.style.backgroundSize = `${header_value}% ${header_value}% `
    }
});