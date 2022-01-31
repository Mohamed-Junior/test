const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav #my-navbar-content ul li");
const carouselSlide = document.querySelector(".my-carousel-slide");
const carouselImage = document.querySelectorAll(".my-carousel-slide .divImg");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const mymain = document.getElementById("my-main")
let counter = 0;
let size = carouselImage[0].clientWidth ;
// console.log(carouselImage[0], carouselImage[0].clientWidth, size)

function jump(h){
    var url = location.href;               //Save down the URL without hash.
    location.href = "#"+h;                 //Go to the target element.
    history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
}

function changeLinkState() {
    let index = sections.length;
  
    while(--index && mymain.scrollTop + 50 < sections[index].offsetTop) {}
    console.log( sections[index].id, index)
    navLi.forEach((link) => link.classList.remove('my-navbar-active'));
    switch(sections[index].id){
        case "home-page": break;
        case "first-quote": {
            navLi[0].classList.add('my-navbar-active');
            break; 
        }
        case "skills-page": {
            navLi[0].classList.add('my-navbar-active');
            break; 
        }
        case "second-quote": {
            navLi[1].classList.add('my-navbar-active');
            break; 
        }
        case "project-page": {
            navLi[1].classList.add('my-navbar-active');
            break; 
        }
        case "about-page": {
            navLi[2].classList.add('my-navbar-active');
            break; 
        }
        case "contact-page": {
            navLi[3].classList.add('my-navbar-active');
            break; 
        }
    }
    // navLi.forEach((li) => {
    //   li.classList.remove("my-navbar-active");
    //   console.log(current)
    //   if (li.classList.contains(current)) {
    //     li.classList.add("my-navbar-active");
    //   }
    // });

  }
  
  changeLinkState();
  mymain.addEventListener('scroll', changeLinkState);

console.log(size )

nextBtn.addEventListener("click", ()=>{
    if(counter >= carouselImage.length - 1) return;
    size = carouselImage[0].clientWidth ;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX("+(-size * counter) +"px)";
    if(counter == carouselImage.length - 1)
        nextBtn.style.visibility = "hidden"
    else{
        nextBtn.style.visibility = "visible"
        prevBtn.style.visibility = "visible"
    }
});

prevBtn.addEventListener("click", ()=>{
    if(counter <= 0){
        return;
    } 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    size = carouselImage[0].clientWidth ;
    counter--;
    carouselSlide.style.transform = "translateX("+(-size * counter) +"px)";
    if(counter == 0)
        prevBtn.style.visibility = "hidden"
    else{
        prevBtn.style.visibility = "visible"
        nextBtn.style.visibility = "visible"
    }
});
setInterval(()=>{
    const modalproject = document.getElementById("modal-project")
    modalproject.classList.add("fade")
    modalproject.classList.add("modal")
    modalproject.style.display = "none !important";
}, 5);

window.onresize = () =>{
    // alert( window.innerWidth);
    console.log(window.innerWidth);
}