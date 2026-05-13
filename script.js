// Scrolling



// Get Repo count
async function getRepo() {
    try {
        const response = await fetch(`https://api.github.com/users/Blackoutxo/repos`);
        const repos = await response.json();
        
        repoCount = 0;
        repos.forEach(repo => {
            const status = repo.fork ? "true" : "false";

            if(status) repoCount++;
        });

    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

// Add alotta classes :O
const themeToggle = document.querySelector('.material-symbols-outlined');

// window down classes
const body = document.body;
const navBar = document.querySelector('.nav-bar');
const blackoutLogo = document.getElementById('blackout');
const navLinks = document.querySelector('.nav-links');
const linkOverlays = document.querySelectorAll('.link-overlay');
const socialIcons = document.querySelectorAll('.social-icon');

// Header
const topBox = document.querySelector('.top-box');
const headerMid = document.querySelector('.header-mid');
const midH = document.querySelector('.mid-H');
const description = document.querySelector('.description-paragraph');

//About me
const abtImg = document.querySelector('.img-placeholder');
const aboutMe = document.querySelector('.about-me');
const aboutTxt = document.querySelector('.about-txt');
const aboutHeader = document.querySelector('.about-header');
const aboutParagraph = document.querySelector('.about-paragraph');
const workBtn = document.querySelector('.works-button');
const contactBtn = document.querySelector('.contact-button');
const jsBtn = document.querySelector('.js-box');
const htmlBtn = document.querySelector('.html-box');
const jvmBtn = document.querySelector('.jvm-box');

themeToggle.addEventListener('click', () => {
    // Toggle theme on individual elements
    body.classList.toggle('windowDown');
    navBar.classList.toggle('windowDown');
    blackoutLogo.classList.toggle('windowDown');
    navLinks.classList.toggle('windowDown');
    
    // header
    topBox.classList.toggle('windowDown');
    headerMid.classList.toggle('windowDown');
    midH.classList.toggle('windowDown');
    description.classList.toggle('windowDown');
   
    // About me
    abtImg.classList.toggle('windowDown');
    aboutMe.classList.toggle('windowDown');
    aboutTxt.classList.toggle('windowDown');
    aboutHeader.classList.toggle('windowDown');
    aboutParagraph.classList.toggle('windowDown');
    workBtn.classList.toggle('windowDown');
    contactBtn.classList.toggle('windowDown');
    jsBtn.classList.toggle('windowDown');
    htmlBtn.classList.toggle('windowDown');
    jvmBtn.classList.toggle('windowDown');

    // Toggle for multiple elements (Lists)
    linkOverlays.forEach(overlay => overlay.classList.toggle('windowDown'));
    socialIcons.forEach(icon => icon.classList.toggle('windowDown'));

    // Handle Icon Change & Animation
    themeToggle.classList.toggle('is-filled');
});

// Functions
getRepo();