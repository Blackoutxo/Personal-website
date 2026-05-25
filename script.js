// Local time 
let date = new Date();
let isNight;

const hours = String(date.getHours()).padStart(2, '0');

if(hours >= '18') {
    isNight = true;
    console.log('The sun is setting down, Bravo 2 going dark!')
} else { 
    isNight = false;
    console.log('The suns rising, Bravo 2 retreating!')
}

// Scrolling
const wrapper = document.querySelector(".elements-horizontal");
 
const lenis = new Lenis({
  wrapper: wrapper,
  content: wrapper,
  orientation: "horizontal",
  gestureOrientation: "both",
  smoothWheel: true,
  wheelMultiplier: 3,
  touchMultiplier: 1.8,
  lerp: 0.1,
  infinite: false,
});
 
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Get github info
let followers = 0;
let repoCount = 0;
async function getGitInfo() {
    try {
        const response = await fetch('https://api.github.com/users/Blackoutxo');
        const infos = await response.json();

        followers = infos.followers;
        repoCount = infos.public_repos;

        document.querySelector('.git-repo-count').textContent = repoCount;
        
        // Add changing texts here
    }  catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

// ----- Sound ------ //
const audio = new Audio('/assets/sound/pencil write.mp3');

window.onload = function () {
    audio.currentTime = 1;
    audio.play();
    audio.currentTime = 3;
}

//------ Load animations Works ------ //

// About section
const observeAboutme = new IntersectionObserver(([entry]) => {
    const targets = document.querySelectorAll('.img-placeholder, .about-me');
    targets.forEach(el => el.classList.toggle('anim', entry.isIntersecting));
}, {threshold: 0.1});

observeAboutme.observe(document.querySelector('#about'));

// Skills section
const observeSkills = new IntersectionObserver(([entry]) => {
    const targets = document.querySelectorAll('.skills-txt, .front-end-box, .back-end-box, .my-toolbox');
    targets.forEach(el => el.classList.toggle('anim', entry.isIntersecting));
}, {threshold: 0.1});

observeSkills.observe(document.querySelector('#skills'));

// Works section
const observer = new IntersectionObserver(([entry]) => {
  const targets = document.querySelectorAll('.work-txt, .combat-helper, .combat-H-text, .combat-helper-container, .combat-paragraph, .LU-java, .open-live-code-1, .open-github-1, .p1-tag, .image-combat, .svelte-proj, .svelte-H-text, .svelte-paragraph, .svelte-container, .LU-container, .orcrist-addon-proj, .orcrist-container, .orcrist-img, .orcrist-H-text, .orcrist-paragraph, .LU-java-3');
    targets.forEach(el => el.classList.toggle('anim', entry.isIntersecting));
}, { threshold: 0.1 });

observer.observe(document.querySelector('#projects'));

// ------ Theme toggle ------ //
const themeToggle = document.querySelector('.material-symbols-outlined');
const elements = document.querySelectorAll('body, .nav-bar, #blackout, .nav-links, .top-box, .top-H, .header-mid, .mid-H, .bottom-H, .description-paragraph, .works-button, .contact-button, .img-placeholder, .about-me, .about-txt, .about-header, .about-paragraph, .js-box, .html-box, .jvm-box, .my-toolbox, .skills-txt, .front-end-box, .grid-box, .html-lang-box, .css-lang-box, .js-lang-box, .back-end-box, .storage-box, .java-lang-box, .work-txt, .link-overlay, .social-icon, .combat-helper, .LU-java, .open-live-code-1, .open-github-1, .svelte-proj, .LU-svelte, .LU-css, .LU-ts, .orcrist-addon-proj');

themeToggle.addEventListener('click', () => {
    elements.forEach(el => el.classList.toggle('windowDown'));
    themeToggle.classList.toggle('is-filled');
});

if(isNight) {
    elements.forEach(el => el.classList.toggle('windowDown'));
    themeToggle.classList.toggle('is-filled');
}

// contact form
const forms = document.querySelectorAll('#name, #email, #message');
const subBtn = document.querySelector('.submit-button');
const mailSent = document.querySelector('.mail-sent');
let toggle = 0;

mailSent.classList.add('hidden');

subBtn.addEventListener('click', () => {
    forms.forEach(form => {
        if(form.value.trim() === '') {    
            toggle = toggle === 0 ? 1 : 0;
            subBtn.classList.toggle('clickOnly');
        } else if (toggle === 1) {
            subBtn.classList.remove('clickOnly');
            subBtn.classList.add('clicked');
            mailSent.classList.add('sentAnim');
            mailSent.classList.remove('hidden');
            console.log('tru');            
        }
    });

//    if (toggle === 1) {
//        subBtn.classList.add('clicked');
//        mailSent.classList.add('sentAnim');
//        mailSent.classList.remove('hidden');
//        console.log('tru');
//   }
});

subBtn.addEventListener('animationend', () => {
    subBtn.classList.remove('clicked');
});

mailSent.addEventListener('animationend', () => {
    mailSent.classList.remove('sentAnim');
    mailSent.classList.add('hidden');    
});



// Functions
getGitInfo();