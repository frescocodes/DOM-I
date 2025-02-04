const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Populate Site Content
let navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];


let ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent["cta"]["img-src"];

let bigHead = document.querySelector('h1');
bigHead.textContent = siteContent['cta']['h1'];

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

let h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4']
h4[1].textContent = siteContent['main-content']['about-h4']
h4[2].textContent = siteContent['main-content']['services-h4']
h4[3].textContent = siteContent['main-content']['product-h4']
h4[4].textContent = siteContent['main-content']['vision-h4']

let h4text = document.querySelectorAll('.text-content p')
h4text[0].textContent = siteContent['main-content']['features-content']
h4text[1].textContent = siteContent['main-content']['about-content']
h4text[2].textContent = siteContent['main-content']['services-content']
h4text[3].textContent = siteContent['main-content']['product-content']
h4text[4].textContent = siteContent['main-content']['vision-content']


let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

let contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent['contact']['contact-h4']
let contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

let footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];



// Add New Content
function changeColor() {
  let navs = document.querySelectorAll('nav a');
  for (i = 0; i < navs.length; i++){
    navs[i].style.color = 'green';
  }
}

const newNav1 = document.createElement('a');
const newNav2 = document.createElement('a')
newNav1.textContent = 'Nav1'
newNav2.textContent = 'Nav2'

let navbar = document.querySelector('nav');

navbar.prepend(newNav1);
navbar.appendChild(newNav2);

changeColor();


// STRETCH GOALS

h4[0].style.color = 'red';
h4[1].style.color = 'orange';
h4[2].style.color = 'green';
h4[3].style.color = 'blue';
h4[4].style.color = 'purple';

contactContent[0].textContent = "123 Way 456 Street Somewhere, USA";
