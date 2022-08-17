


// to toggle show modals 

function togglemodals(id){

    var x, i;
    x = document.querySelectorAll(".showmodal");
    for (i = 0; i < x.length; i++){
        x[i].classList.remove("open");
    }

    const show = document.getElementById(`${id}`);
    
    if (show !== null || show !== undefined){
        show.classList.toggle("open");
    }

    var showdiv = document.getElementById("showcontainermain");
    showdiv.scrollTop = 0;

    let showImages = [...show.querySelectorAll(".showimage")]
    
    for (j = 0; j<showImages.length; j++){
        showImages[j].setAttribute("src", showImages[j].getAttribute("data-src"));

        
    }
    if (window.innerWidth < 600) {
        backtotopmobile();
    }

}

 togglemodals('show34');

//  Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
//     console.log('images finished loading');
// });


// language buttons


function languageeng(){
    let a, b;

    a = document.querySelectorAll(".cat");
    for (b = 0; b < a.length; b++){
        a[b].classList.remove("visible");
    }

    let x, i;

    x = document.querySelectorAll(".esp");
    for (i = 0; i < x.length; i++){
        x[i].classList.remove("visible");
    }

    let y, j;

    y = document.querySelectorAll(".eng");
    for (j = 0; j < y.length; j++){

        y[j].classList.add("visible");
    }
    document.getElementById("engbutton").style.backgroundColor = "lightgrey";
    document.getElementById("espbutton").style.backgroundColor = "";
    document.getElementById("catbutton").style.backgroundColor = "";

    document.getElementById("engbuttonmobile").style.backgroundColor = "lightgrey";
    document.getElementById("espbuttonmobile").style.backgroundColor = "";
    document.getElementById("catbuttonmobile").style.backgroundColor = "";
}


function languagecat(){

    let a, b;

    a = document.querySelectorAll(".cat");
    for (b = 0; b < a.length; b++){
        a[b].classList.add("visible");
    }

    let x, i;

    x = document.querySelectorAll(".esp");
    for (i = 0; i < x.length; i++){
        x[i].classList.remove("visible");
    }

    let y, j;

    y = document.querySelectorAll(".eng");
    for (j = 0; j < y.length; j++){
        y[j].classList.remove("visible");
    }
    document.getElementById("engbutton").style.backgroundColor = "";
    document.getElementById("espbutton").style.backgroundColor = "";
    document.getElementById("catbutton").style.backgroundColor = "lightgrey";

    document.getElementById("engbuttonmobile").style.backgroundColor = "";
    document.getElementById("espbuttonmobile").style.backgroundColor = "";
    document.getElementById("catbuttonmobile").style.backgroundColor = "lightgrey";


}

function languageesp(){

    let a, b;

    a = document.querySelectorAll(".esp");
    for (b = 0; b < a.length; b++){
        a[b].classList.add("visible");
    }

    let x, i;

    x = document.querySelectorAll(".cat");
    for (i = 0; i < x.length; i++){
        x[i].classList.remove("visible");
    }

    let y, j;

    y = document.querySelectorAll(".eng");
    for (j = 0; j < y.length; j++){
        y[j].classList.remove("visible");
    }
    document.getElementById("engbutton").style.backgroundColor = "";
    document.getElementById("espbutton").style.backgroundColor = "lightgrey";
    document.getElementById("catbutton").style.backgroundColor = "";

    document.getElementById("engbuttonmobile").style.backgroundColor = "";
    document.getElementById("espbuttonmobile").style.backgroundColor = "lightgrey";
    document.getElementById("catbuttonmobile").style.backgroundColor = "";

}





// description skips

function descriptionskip(){
    let currentmodal = document.querySelector(".open")
    currentmodal.querySelector(".endspacer").scrollIntoView(true, {behavior: "smooth", block: "end"}); 
}


function backtotop(){
    // let currentmodal = document.querySelector(".open")
    // let top = currentmodal.querySelector(".headingscontainer") 
    // top.scrollIntoView(true, {behavior: "smooth"});
    let mobiletop =  document.getElementById("showspacer");
   mobiletop.scrollIntoView(true, {behavior: "smooth"});
}

function backtotopmobile(){
   let mobiletop =  document.getElementById("showspacer");
   mobiletop.scrollIntoView(true, {behavior: "smooth"});
  
    
}


function menuskip(){
    document.getElementById("menucontainer").scrollIntoView(true, {behavior: "smooth"});
}

//links

function openmap() {
    window.open("https://www.google.com/maps/place/Cordova/@41.3546643,2.1456118,15z/data=!4m5!3m4!1s0x0:0xede3e738b798c708!8m2!3d41.3546643!4d2.1456118");
   }

function mailto(){
    window.location.href = "mailto:mail@example.org";
}

function call(){
    window.open("tel:+1800229933");
}

// // to make text stay grey lol

function linkClicked(){
    
    var x;
    x = document.querySelectorAll("span.showlink");
    for (i = 0; i < x.length; i++){
        x[i].style.Color = "black";
    }

    var links = document.querySelectorAll("span.showlink");
    links.forEach(link => link.style.color = "black"); 
    event.target.style.color = "lightgrey";
  
}



// const link = document.querySelectorAll(".showlink");

//  for (let i = 0; i < link.length; i++) {
//      link[i].addEventListener("click", function() {
//        link[i].classList.toggle("grey");
//      });
//  }

 function clickLink(){
    var x, i;
    x = document.querySelectorAll(".showlink");
    for (i = 0; i < x.length; i++){
        x[i].classList.remove("grey");
    }

    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener("click", function() {
          link[i].classList.toggle("grey");
        });
    }
 }

 
