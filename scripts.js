const hamburger=document.querySelector(".hamburger");
const linkContainer=document.querySelector(".link_container");
const links=document.querySelectorAll(".link_container li");hamburger.addEventListener("click",()=>{linkContainer.classList.toggle("open");
links.forEach(link=>{link.classList.toggle("fade");});});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "View More"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "View Less"; 
      moreText.style.display = "inline";
    }
  }