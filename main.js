'use strict';

// navbar transparent when It is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
// console.log(navbarHeight);

document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  // console.log(`navbarHeight: ${navbarHeight}`);
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// scrolling to pade home
  const home = document.querySelector('#home');
  const homeHeight = home.getBoundingClientRect().height;
  const homeContainer = document.querySelector('#home .section__container');
  document.addEventListener('scroll', () => {
    // console.log(`homeHeight: ${homeHeight}`);
    // console.log(window.scrollY);
    homeContainer.style.opacity = 1 - (window.scrollY / homeHeight);
  });

  // scrolling when tapping in navbar
  const navbarMenu = document.querySelector('.navbar__menu');
  navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if(link == null) {
      return;
    } else {
      scrollIntoView(link);

    }
  });

  // click "contact me" button
  const homeContact__btn = document.querySelector('.home__contact');
  homeContact__btn.addEventListener('click', () => {
    scrollIntoView('#contact');
  });

  // utility funtion
  function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
  };

  // project filtering & animation
  const workCategories = document.querySelector('.work__categories');
  const projectContainer = document.querySelector('.work__projects');
  const project = document.querySelector('.project');

  workCategories.addEventListener('click', (e) => {
    // console.log(e.target.dataset.filter);
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    console.log(filter);
    
    // if(filter == null) {
    //   return;
    // } else {
    //   projects.foreach((project) => {
    //     console.log(project);
    //   })
    //   console.log('---------------');
      
    //   for(let project of projects) {
    //     console.log(project);
    //   }
    //   console.log('---------------');
      
    //   let project;
    //   for(i = 0; i < projects.length; i++) {
    //     project = projects[i]
    //     console.log(project);
    //   }      
    // }
  })
  