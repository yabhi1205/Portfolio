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
window.addEventListener("scroll",()=>{
    section.forEach((e)=>{
        e.classList="center";
    });
        section.forEach((e)=>{
            let temp =e.getBoundingClientRect().top;
            if(temp>=0 && temp<=200){
                e.classList="center sactive";}
        });
});
    
//==============scroll=====================
let bottomPage=window.innerHeight/6*3;
let link = document.querySelectorAll(".link");
window.addEventListener("scroll",()=>{
    let i=0;
   for(i=0;i<6;i++){
       let len=section[i].getBoundingClientRect().top;
       if(len>=0 && len<=bottomPage){
        link.forEach((e)=>{
            e.classList="link";
        });
        link[i].classList="link active"
       }

   }
});

//======================contact===================
let progg= document.querySelector(".Cprogress");
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
            progg.style.background="conic-gradient(aqua 25%,white 50%,white 75%,white 100% )";
        }
        if(countProg==50){
            progg.style.background="conic-gradient(aqua 25%,aqua 50%,white 75%,white 100% )";
        }
        if(countProg==75){
            progg.style.background="conic-gradient(aqua 25%,aqua 50%,aqua 75%,white 100% )";
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
            progg.style.background="conic-gradient(aqua 25%,white 50%,white 75%,white 100% )";
        }
        if(countProg==50){
            progg.style.background="conic-gradient(aqua 25%,aqua 50%,white 75%,white 100% )";
        }
        if(countProg==75){
            progg.style.background="conic-gradient(aqua 25%,aqua 50%,aqua 75%,white 100% )";
        }
        if(countProg==100){
            next.style.color="rgba(245, 245, 245, 0.3)";
            next.style.cursor="not-allowed";
            progg.style.background="conic-gradient(aqua 25%,aqua 50%,aqua 75%,aqua 100% )";
            
        }
    }
    swap();
});

function swap(){
    let conform = document.querySelectorAll(".formBox");
    conform.forEach((e)=>{
        e.style.left="-200vw"
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


    
