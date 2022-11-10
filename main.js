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
});
// scrolling to pade home
const home = document.querySelector('#home');
const homeContainer = document.querySelector('#home .section__container');
const homeHeight = home.getBoundingClientRect().height;
console.log(`homeHeight: ${homeHeight}`);
document.addEventListener('scroll', () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
  console.log(window.scrollY)
});

// Slider setting
const slider = document.querySelector('.slider');
let slideItems = document.querySelectorAll('.slideItem');

const slideWidth = slider.clientWidth;
let slideCount = slideItems.length;

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

let currSlide = 1;

// Pagination set
const pagination = document.querySelector('.slide__pagination');

for(let i = 0; i < slideCount; i++) {
  if(i === 0) {
    pagination.innerHTML += `<li class="active"></li>`
  } else {
    pagination.innerHTML += `<li></li>`
  }
}

const paginationItems = document.querySelectorAll('.slide__pagination li');

  const startSlide = slideItems[0];
  const endSlide = slideItems[slideItems.length - 1];
  const startElem = document.createElement('div');
  const endElem = document.createElement('div');
  
  endSlide.classList.forEach((c) => endElem.classList.add(c));  
  endElem.innerHTML = endSlide.innerHTML;
  startSlide.classList.forEach((c) => startElem.classList.add(c));
  startElem.innerHTML = startSlide.innerHTML;
  startSlide.before(endElem);
  endSlide.after(startElem);

  slideItems = document.querySelectorAll('.slideItem');
  let offsetSlide = slideWidth * currSlide;
  slideItems.forEach((item) => {
  item.setAttribute('style', `left: ${[-offsetSlide]}px`);
  // console.log(startElem);
});

// const startSlide = slideItems[0];
// const endSlide = slideItems[slideItems.length - 1];
// const startElem = document.createElement('div');
// const endElem = document.createElement('div');


// // startSlide & endSlide clone
// endSlide.classList.forEach((c) => endElem.classList.add(c));
// endElem.innerHTML = endSlide.innerHTML;

// startSlide.classList.forEach((c) => startElem.classList.add(c));
// startElem.innerHTML = startSlide.innerHTML;


// // Clone element setting
// startSlide.before(endElem);
// endSlide.after(startElem);

// slideItems = document.querySelectorAll(".slide_item");
// let offsetSlide = slideWidth * currSlide;
// slideItems.forEach(item => item.setAttribute('style', `left: ${-offset}px`));

  //   currSlide++;
//   if(currSlide < slideCount) {
//     let offsetSlide = slideWidth * currSlide;
//     console.log(offsetSlide);
//     slideItems.forEach((item) => {
//       item.setAttribute('style', `left: ${[-offsetSlide]}px`);
//     });
//     paginationItems.forEach(item => item.classList.remove('active'));
//     paginationItems[currSlide - 1].classList.add('active');
//   } else {
//     currSlide = 0;
//     let offset = slideWidth * currSlide;
//     slideItems.forEach((item) => {
//       item.setAttribute('style', `transition: ${0}s; left: ${[-offsetSlide]}px`);
//     currSlide++;
//     offset = slideWidth * currSlide;
//     setTimeout(() => {
//       slideItems.forEach((item) => {
//         item.setAttribute('style', `transition:${0.15}s; left: ${[-offsetSlide]}px`)
//       })
//     }, 0);
//     });
//   }
// }

function nextMove() {
  currSlide++;
  if(currSlide <= slideCount) {
    const offset = slideWidth * currSlide;
    
    slideItems.forEach((item) => {
      item.setAttribute('style', `left: ${-offset}px`);
    });
    paginationItems.forEach(item => item.classList.remove('active'));
    paginationItems[currSlide - 1].classList.add('active');
  } 
  else {
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((item => item.setAttribute('style', `transition:${0}s; left: ${-offset}px`)));
    currSlide++;
    offset = slideWidth * currSlide;
    // console.log(currSlide);
    setTimeout(() => {
        slideItems.forEach(item => item.setAttribute('style', `transition:${0.15}s; left: ${-offset}px`));
      }, 0);
      paginationItems.forEach(item => item.classList.remove('active'));
      offset = slideWidth * currSlide;
      paginationItems[currSlide - 1].classList.add('active');
  }
}

setInterval(() => {
  nextMove();
}, 5000);

// Move slide

// Input radioButton set
// const pagination = document.querySelector('.slide__pagination');
// for(let i = 1; i <= slideCount; i++) {
//   if(i === 1) { 
//     pagination.innerHTML += `<input type="radio" name="slideRadios" class="slideRadio" checked id="slideRadio__${[i]}">`;    
//   } else {    
//     pagination.innerHTML += `<input type="radio" name="slideRadios" class="slideRadio" id="slideRadio__${[i]}">`;  
//   }
// };
// const paginationItems = document.querySelectorAll('.pagination input');

// for(let i = 1; i <= slideCount; i++) {
//   if(i === 1) {
//     pagination.innerHTML += `<label for="slideRadio__${[i]}" class="active"></label>`;  

//   } else {
//     pagination.innerHTML += `<label for="slideRadio__${[i]}"></label>`; 
//   }
// }; 

// const slideLabels = document.querySelectorAll('.pagination label');
// const slideLabel = document.querySelector('.pagination label')

// pagination.addEventListener('click', (e) => {
//   paginationItems.removeArri
//   console.log(e.target);
// })



// Add slide

// arrow up to home

const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.classList.remove('invisible');
  } else {
    arrowUp.classList.add('invisible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// click "contact me" button
const homeBtn = document.querySelector('.home__contact');
homeBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

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