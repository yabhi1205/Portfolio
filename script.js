// =================pre loader======================== 
var loader = document.querySelector(".preloader");
window.addEventListener("load",()=>{
    loader.style.display="none";
})
//=========================
let passion = document.getElementById("passion");
let passionElement = ["WEB DEVELOPER","PHOTO EDITOR","VIDEO EDITOR"];
passion.innerText=passionElement[0];
let i=0;
setInterval(()=>{
    i<2?i++:i=0;
    passion.innerText=passionElement[i];
},3000)
//=================nav ==============

let link = document.querySelectorAll(".link");
link.forEach(element => {
    element.addEventListener('click',()=>{
        link.forEach((e)=>{
            e.classList="link";
        });
        element.classList="link active";
    })
});
let open=document.getElementById("open");
let close=document.getElementById("close");

open.addEventListener("click",()=>{
    close.style.display="block";
    open.style.display="none";
    document.querySelector("nav").classList="nav1";
});
close.addEventListener("click",()=>{
    close.style.display="none";
    open.style.display="block";
    document.querySelector("nav").classList=" ";
});


//======================skills =================

let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;
let count6=0;
run();
let html = document.getElementById("html-skill");
let css = document.getElementById("css-skill");
let js = document.getElementById("js-skill");
let cLanguage = document.getElementById("c-skill");
let java = document.getElementById("java-skill");
let edit = document.getElementById("edit-skill");
setInterval(run,11050)
function run(){
    count1=0;
    count2=0;
    count3=0;
    count4=0;
    count5=0;
    count6=0;
    let time = setInterval(showword,100);
}
function showword() {
    if(count1<90){
        count1+=2;
    }
    html.innerText=count1+'%';
    if(count2<65){
        count2++;
    }
    css.innerText=count2+'%';
    if(count3<55){
        count3++;
    }
    js.innerText=count3+'%';
    if(count4<55){
        count4++;
    }
    cLanguage.innerText=count4+'%';
    if(count5<40){
        count5++;
    }
    java.innerText=count5+'%';
    if(count6<50){
        count6++;
    }
    edit.innerText=count6+'%';
}

//=================sections=================
let section = document.querySelectorAll("section");
link.forEach(element => {
    element.addEventListener('click',()=>{
             
        section.forEach((e)=>{
            e.classList="center";
            console.log(e.getBoundingClientRect().top);
        });
        setInterval(()=>{
            section.forEach((e)=>{
                let temp =e.getBoundingClientRect().top;
                if(temp==0){
                e.classList="center sactive";}
            },100);;
        })
    })
});
