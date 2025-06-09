const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('inert', '')
  }
  else{
    // desktop device
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

// For Bookmark Links
// const navLinks = document.querySelectorAll('nav a')
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     closeSidebar()
//   })
// })

updateNavbar(media)


const Sleepy = document.getElementById("sleepyPic");
const outside = document.getElementById("outsidePic");

let isMouseHoverSleepyPic = false
var claritySleepy = 0

let isMouseHoveroutsidePic = false
var clarityOutside = 0

Sleepy.addEventListener("mouseleave", event => {
  isMouseHoverSleepyPic = false
  console.log("MouseLeft")
});

Sleepy.addEventListener("mouseover", event => {
  isMouseHoverSleepyPic = true
   console.log("MouseOver")
});


setInterval(mouseStuffSleepy, 10)


function mouseStuffSleepy() {
  console.log("running1")
    if(isMouseHoverSleepyPic == true && claritySleepy < 1){
        claritySleepy += .01;
        Sleepy.style.opacity = claritySleepy;
        console.log("RunningFunctiopn true")
      } 

    if(isMouseHoverSleepyPic == false && claritySleepy > 0){
        claritySleepy -= .01;
        Sleepy.style.opacity = claritySleepy;
        console.log("RunningFunctiopn false")
      }
}


outside.addEventListener("mouseleave", event => {
  isMouseHoveroutsidePic = false
  console.log("MouseLeft")
});

outside.addEventListener("mouseover", event => {
  isMouseHoveroutsidePic = true
   console.log("MouseOver")
});


setInterval(mouseStuffOutside, 10)


function mouseStuffOutside() {
  console.log("running1")
    if(isMouseHoveroutsidePic == true && clarityOutside < 1){
        clarityOutside += .01;
        outside.style.opacity = clarityOutside;
        console.log("RunningFunctiopn true")
      } 

    if(isMouseHoveroutsidePic == false && clarityOutside > 0){
        clarityOutside -= .01;
        outside.style.opacity = clarityOutside;
        console.log("RunningFunctiopn false")
      }
}