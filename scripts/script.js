const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];


const $aboutMe = document.getElementById('about-me');
console.log($aboutMe)
$menu.addEventListener('click', toggleMenu, false);

var isOpen = false;
function toggleMenu() {
    if(!isOpen) {
        $navBar.classList.add('menu-opened');
        $menu.firstElementChild.classList.add('close-btn')
        isOpen = true; 
    } else {
        $navBar.classList.remove('menu-opened');
        $menu.firstElementChild.classList.remove('close-btn')
        isOpen = false;
    }
}

$navBar.addEventListener('click', navClick, false);
function navClick(evt) {
    if (evt.target.tagName == 'A') {
        toggleMenu();
    }
}

function populateAboutMe() {
  const date = new Date('1996-07-04T15:00:00');
  const years = Math.floor((Date.now() - date) / (1000 * 3600 * 24 * 365))

  let innerText = $aboutMe.innerHTML;
  innerText = innerText.replace("{years}", years);
  $aboutMe.innerHTML = innerText;
}

populateAboutMe();



