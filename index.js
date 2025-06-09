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


const Button = document.getElementById("hiddenButton");
const hiddenText = document.getElementById("hidden");

var clicks = 2

Button.addEventListener("click", event => {
  if (clicks > 1) {
    hiddenText.textContent = "Move your mouse around the screen to reveal hidden messages"
  }
    if (clicks > 2) {
    hiddenText.textContent = "Move your mouse around the screen to reveal"
  }
    if (clicks > 3) {
    hiddenText.textContent = "Move your mouse around the screen"
  }
    if (clicks > 4) {
    hiddenText.textContent = "Move your mouse around"
  }
    if (clicks > 5) {
    hiddenText.textContent = "Move your"
  }
    if (clicks > 6) {
    hiddenText.textContent = "Move"
  }
    if (clicks > 7) {
    hiddenText.textContent = "Try"
  }
    if (clicks > 8) {
    hiddenText.textContent = "Try resizing"
  }
    if (clicks > 9) {
    hiddenText.textContent = "Try resizing your"
  }
    if (clicks > 10) {
    hiddenText.textContent = "Try resizing your brower"
  }
  if (clicks > 15) {
    hiddenText.textContent = "Try resizing your brower :)"
  }
  if (clicks > 20) {
    hiddenText.textContent = "Nice try, there's nothing new now ;)"
  }
  if (clicks > 50) {
    hiddenText.textContent = "wow I can't believe you found this, let me know by saying blue ostriches and i'll buy you a coffee"
  }
    if (hiddenText.style.display === "none"){
      clicks += 1;
      hiddenText.style.display = "block"
    } else{
      hiddenText.style.display = "none"}

})


const kinda = document.getElementById("hoverOver");
let isMouseHover = false
var clarity = 0


kinda.addEventListener("mouseleave", event => {
  isMouseHover = false
  console.log("MouseLeft")
});

kinda.addEventListener("mouseover", event => {
  isMouseHover = true
   console.log("MouseOver")
});


setInterval(mouseStuff, 10)


function mouseStuff() {
  console.log("running1")
    if(isMouseHover == true && clarity < 1){
        clarity += .01;
        kinda.style.opacity = clarity;
        console.log("RunningFunctiopn true")
      } 

    if(isMouseHover == false && clarity > 0){
        clarity -= .01;
        kinda.style.opacity = clarity;
        console.log("RunningFunctiopn false")
      }
}


















const hint = document.getElementById("hint");
let isMouseHoverhint = false
var clarityhint = 0


hint.addEventListener("mouseleave", event => {
  isMouseHoverhint = false
  console.log("MouseLeft")
});

hint.addEventListener("mouseover", event => {
  isMouseHoverhint = true
   console.log("MouseOver")
});


setInterval(mouseStuffHint, 10)


function mouseStuffHint() {
  console.log("running1")
    if(isMouseHoverhint == true && clarityhint < 1){
        clarityhint += .01;
        hint.style.opacity = clarityhint;
        console.log("RunningFunctiopn true")
      } 

    if(isMouseHoverhint == false && clarityhint > 0){
        clarityhint -= .01;
        hint.style.opacity = clarityhint;
        console.log("RunningFunctiopn false")
      }
}
