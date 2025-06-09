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






const images = document.querySelectorAll('.slideshow-image');
const progressFills = document.querySelectorAll('.progress-fill');
const progressBox = document.querySelectorAll('.progress-text');

const infoText = document.getElementById('info-text');
const infoTextDesc = document.getElementById('info-text-desc');
const infoBox = document.getElementById('info-box');

let currentIndex = 0;
const intervalTime = 7000;
let slideTimeoutinside;
let slideTimeoutoutside;

const infoMessages = [
   "Dravit",
    "Calculator",
];

const infoMessagesDesc = [
   "Made in HTML, CSS, JS. For co-op ",
    "Made in Java. For computer science class",
];


function showNextImage() {

    images[currentIndex].classList.remove('active');
    infoBox.classList.remove('active');
    progressBox[currentIndex].classList.remove('active');
    progressFills[currentIndex].style.transition = 'none';
    progressFills[currentIndex].style.width = '100%';
    progressBox[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % images.length;

    infoBox.classList.add('active');
    infoText.textContent = infoMessages[currentIndex];
    infoTextDesc.textContent = infoMessagesDesc[currentIndex];
    images[currentIndex].classList.add('active');
    progressBox[currentIndex].classList.add('active');

    progressFills.forEach((fill, currentIndex) => {
        fill.style.transition = 'none';
        fill.style.width = '0%';
        // fill.style.width = currentIndex ? '0%' : '100%';
    });

    // progressFills.forEach((fill, i) => {
    //     fill.style.transition = 'none';
    //     fill.style.width = i === currentIndex ? '0%' : '100%';
    // });

    slideTimeoutoutside = setTimeout(() => {
        progressFills[currentIndex].style.transition = 'width 7s linear';
        progressFills[currentIndex].style.width = '100%';
        slideTimeoutinside = setTimeout(showNextImage, intervalTime);
    }, 0);
}

function showImageAt(index) {

    clearTimeout(slideTimeoutoutside);
    clearTimeout(slideTimeoutinside);

    images[currentIndex].classList.remove('active');
    infoBox.classList.remove('active');
    progressBox[currentIndex].classList.remove('active');
    progressFills[currentIndex].style.transition = 'none';
    progressFills[currentIndex].style.width = '0%';
    

    currentIndex = index;

    images[currentIndex].classList.add('active');
    progressBox[currentIndex].classList.add('active');
    infoBox.classList.add('active');
    infoText.textContent = infoMessages[currentIndex];
    infoTextDesc.textContent = infoMessagesDesc[currentIndex];

    progressFills.forEach((fill, currentIndex) => {
        fill.style.transition = 'none';
        fill.style.width = '0%';
        // fill.style.width = currentIndex ? '0%' : '100%';
    });

    slideTimeoutoutside = setTimeout(() => {
        progressFills[currentIndex].style.transition = 'width 7s linear';
        progressFills[currentIndex].style.width = '100%';
        slideTimeoutinside = setTimeout(showNextImage, intervalTime);
    }, 0);
}


progressBox.forEach((textElement, index) => {
    textElement.addEventListener('click', () => {
        showImageAt(index);
        // slideInterval = setInterval(showNextImage, intervalTime);
    });
});

    // Initialize the first image and its progress bar
    slideTimeoutoutside = setTimeout(() => {
        progressFills[currentIndex].style.transition = 'width 7s linear';
        progressFills[currentIndex].style.width = '100%';
        slideTimeoutinside = setTimeout(showNextImage, intervalTime);
    }, 0);

