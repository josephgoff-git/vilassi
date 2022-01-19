window.onbeforeunload = function () {
  document.body.style.display = 'None';
  window.scrollTo(0, 0);
}

function Function1() {
  setTimeout(fadeInBlack, 100);
}

function Function2() {
    setTimeout(fadeOut, 1500);
}

function Function3 () {
  setTimeout(fadeInWhite, 2400);
}




const welcomeImg = document.getElementById("intro-container");
const welcomeImgB = document.getElementById("intro-containerB");
const body = document.getElementById("body");


function fadeInBlack() {
  welcomeImg.className += " intro-container";
  welcomeImg.className += " b-nike-2";
}


function fadeOut() {
    welcomeImg.className = "intro-container-invisible";
    welcomeImgB.className = "intro-container-invisible";
}


const boxx = document.getElementById("box");

function fadeInWhite() {
    body.className -= "no-overflow";
    boxx.className += " box-2";
}

window.onload = function() {
    document.body.className += " loaded";
    Function1();
    Function2();
    Function3();
}




 /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
 function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
  //   document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("container").style.marginLeft = "200px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  //   document.getElementById("main").style.marginLeft = "0";
    document.getElementById("container").style.marginLeft = "0";
  }



  

const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener('mouseover', () => {
            console.log(portfolioItem.childNodes[1].classList)
            portfolioItem.childNodes[1].classList.add('image-blur');
        });

        portfolioItem.addEventListener('mouseout', () => {
            console.log(portfolioItem.childNodes[1].classList)
            portfolioItem.childNodes[1].classList.remove('image-blur');
        });
    });


