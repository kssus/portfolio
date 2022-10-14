'use strict';

// navbar transparent when It is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  // console.log(`navbarHeight: ${navbarHeight}`);
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// scrolling when tapping in navbar
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (e) => {
  // console.log(e.target.dataset.link);
  const target = e.target;
  const link = target.dataset.link;
  // console.log(link);
  scrollIntoView(link);
})
// scrolling to pade home
const home = document.querySelector('#home');
const homeContainer = document.querySelector('#home .section__container');
const homeHeight = home.getBoundingClientRect().height;
// console.log(homeHeight);
document.addEventListener('scroll', () => {

  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
})

// arrow up to home
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.classList.remove('invisible');
  } else {
    arrowUp.classList.add('invisible');
  }
})

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
})

// click "contact me" button
const homeBtn = document.querySelector('.home__contact');
homeBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
})

// utility funtion
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior : "smooth"});
}

// project filtering & animation
const workCategories = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');



workCategories.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  console.log(filter);
  if(filter == null) {
    return;
  }
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  const selected = document.querySelector('.category__btn.active');
  selected.classList.remove('active');
  target.classList.add('active');
projectContainer.classList.add('anim-out');
setTimeout(() => {
  projectContainer.classList.remove('anim-out');
  projects.forEach((project) => {
    // console.log(project.dataset.type);
    if(filter === '*' || filter === project.dataset.type) {
      project.classList.remove('invisible');
    } else {
      project.classList.add('invisible');
    }
  });
}, 300);
});


  // console.log('-----------');
  // for(let project of projects) {
  //   console.log(project);

  // };
  
  // console.log('------------');
  // let project;
  // for(let i = 0; i < projects.length; i++) {
  //   console.log(projects[i]);

  // };

// Device
document.addEventListener('scroll', () => {
  const monitor = document.querySelector('#monitor');
  console.log(window.scrollY);
  if(window.scrollY > 3800) {
    monitor.classList.add('animate');
  } else {
    monitor.classList.remove('animate');
  }
  
  const phone = document.querySelector('#phone');
  console.log(window.scrollY);
  if(window.scrollY > 3800) {
    phone.classList.add('animate');
  } else {
    phone.classList.remove('animate');
  }
});

// Features
const featureContainer = document.querySelectorAll('.feature');

featureContainer.forEach((feature) => {
  // console.log(feature);
  document.addEventListener('scroll', () => {
    if(window.scrollY > 4110) {
      feature.classList.add('animate');
    } else {
      feature.classList.remove('animate');
    }
  });
});
