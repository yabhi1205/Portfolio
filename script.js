// =================pre loader======================== 
var loader = document.querySelector(".preloader");
var linksside = document.querySelector(".header-strip");
var shrink = document.querySelector(".shrink");
window.addEventListener("load",()=>{
    loader.style.display="none";
    linksside.style.transform="scale(1)"
    shrink.style.transform="scale(1)"
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


//==============scroll=====================
//=================sections=================
let progg= document.querySelector(".Cprogress");
let link= document.querySelectorAll(".link");
let bottomPage=window.innerHeight/6*2;
let section = document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
        section.forEach((e)=>{
            let temp =e.getBoundingClientRect().top;
            if(temp<=bottomPage*1.5){
                e.classList="center sactive";}
            else{
                e.classList="center nactive";
            }
        });
        for(let i=0;i<6;i++){
            let len=section[i].getBoundingClientRect().top;
            if(len>=-10 && len<=bottomPage){
                 link.forEach((e)=>{
                     e.classList="link";
                 });
                 link[i].classList="link active"
            }
        }
});
    


//======================contact===================
let next = document.querySelector(".Cnext");
let prev = document.querySelector(".Cprevious");
let countProg = 0;
prev.addEventListener('click',()=>{
    if(countProg!=0){
        countProg-=25;
        next.style.cursor="pointer";
        next.style.color="white";
        progg.innerText=countProg+"%";
        if(countProg==25){
            progg.style.background="conic-gradient(orange 25%,white 50%,white 75%,white 100% )";
        }
        if(countProg==50){
            progg.style.background="conic-gradient(orange 25%,orange 50%,white 75%,white 100% )";
        }
        if(countProg==75){
            progg.style.background="conic-gradient(orange 25%,orange 50%,orange 75%,white 100% )";
        }
        if(countProg==0){
            prev.style.color="rgba(245, 245, 245, 0.3)";
            prev.style.cursor="not-allowed";
            progg.style.background="conic-gradient(white 25%,white 50%,white 75%,white 100% )";
            
        }
    }
    swap();
});
next.addEventListener('click',()=>{
    if(countProg!=100){
        countProg+=25;
        prev.style.cursor="pointer";
        next.style.cursor="pointer";
        prev.style.color="white";
        progg.innerText=countProg+"%";
        if(countProg==25){
            progg.style.background="conic-gradient(orange 25%,white 50%,white 75%,white 100% )";
        }
        if(countProg==50){
            progg.style.background="conic-gradient(orange 25%,orange 50%,white 75%,white 100% )";
        }
        if(countProg==75){
            progg.style.background="conic-gradient(orange 25%,orange 50%,orange 75%,white 100% )";
        }
        if(countProg==100){
            next.style.color="rgba(245, 245, 245, 0.3)";
            next.style.cursor="not-allowed";
            progg.style.background="conic-gradient(orange 25%,orange 50%,orange 75%,orange 100% )";
            
        }
    }
    swap();
});

function swap(){
    let conform = document.querySelectorAll(".formBox");
    conform.forEach((e)=>{
        e.style.left="-300vw"
    });
    if(countProg==0){
        conform[0].style.right="0";
        conform[0].style.left="0";
    }
    if(countProg==25){
        conform[1].style.right="0";
        conform[1].style.left="0";
    }
    if(countProg==50){
        conform[2].style.right="0";
        conform[2].style.left="0";
    }
    if(countProg==75){
        conform[3].style.right="0";
        conform[3].style.left="0";
    }
    if(countProg==100){
        conform[4].style.right="0";
        conform[4].style.left="0";
    }
}

//========================mail============================
document.getElementById("submit").addEventListener("click",()=>{
    let Fname = document.getElementById("Fname").value;
    let Lname = document.getElementById("Lname").value;
    let Phone = document.getElementById("num").value;
    let mail = document.getElementById("mail").value;
    let des = document.getElementById("detail").value;
    var bodys ="Name: "+ Fname + " "+Lname +"<br/> Phone no.: "+Phone+"<br/> Email Id.:  "+mail+"<br/> Description: "+des;
    
    Email.send({
        Host : "smtp.gmail.com",
        Username : "abhisinghal112001@gmail.com",
        Password : "teigugjsovguukpt",
        To : 'abhisinghal112001@gmail.com',
        From : mail,
        Subject : Fname+" Sent you a mail (Portfolio)",
        Body : bodys
    }).then(
        message =>{
            if(message=='OK'){
                progg.innerText="Done";
                setInterval(()=>{
                    location.reload();
                },2000)
            }
            else{
                alert('There is an error in sending message. Or you missed some area')
            }
        }
    );
})