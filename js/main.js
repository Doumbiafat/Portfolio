/*================= AFFICHER ET CACHER MENU============================ */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-elt'),
navClose = document.getElementById('nav-ferme')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('affiche-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('affiche-menu')

    })
}

/*==================== ENLEVER MENU ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('affiche-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ===================================== MODE SOMBRE =================================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
  
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
  
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* =============================== COMPETENCES ============================== */

const skillsContent = document.getElementsByClassName('competences_content'),
skillsHeader = document.querySelectorAll('.competences_header')


function toggleSkills(){
    let itemClass = this.parentNode.className

    for( i= 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'competences_content competences_close'
    }
    if(itemClass === 'competences_content competences_close'){
        this.parentNode.className = 'competences_content competences_open'
    }
}

skillsHeader.forEach((eL) => {
    eL.addEventListener('click', toggleSkills)
})

// ====================================== PROJETS==========================

let swiperProjet = new Swiper(".projet_contenu", {
    cssMode: true,
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });