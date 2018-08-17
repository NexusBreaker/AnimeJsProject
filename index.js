let pageAppear;

window.addEventListener('pageshow',()=>{
  console.log('hey you joined us!');

  pageAppear = anime({
    targets: '.pageLoad',

    scale: [70,70],
    translateX: ['0%','50%'],
    translateY: ['0%','50%'],
    left: ['0vw','100vw'],
    top: ['0vh','100vh'],
    duration: 1500,
    easing: 'easeOutExpo',
    delay: 100
  });


})

window.addEventListener('load', (e) =>{

//});

//document.addEventListener('DOMContentLoaded',() =>{



console.log('hello');
//import {text} from './module.js';

anime.timeline({
  loop: true,

}).add({
  delay: 10
}).add({
  targets: '.circle-white',
  scale: [0,2],
  opacity: [1,0],
  easing: 'easeInOutExpo',
  rotateZ: 360,
  translateX : ['-50%','-50%'],
  translateY : ['-50%','-50%'],
  duration: 1100
}).add({
  targets: '.circle-dark',
  scale: [0,1],
  opacity: [0,1],
  easing: 'easeOutExpo',
  duration: 1100,
  translateX : ['-50%','-50%'],
  translateY : ['-50%','-50%'],
  offset : '-=700'
}).add({
  targets: '.circle-container',
  scale: [0,1],
  opacity: [0,1],
  easing: 'easeOutExpo',
  duration: 1100,
  translateX : ['-50%','-50%'],
  translateY : ['-50%','-50%'],


  offset : '-=1200'
}).add({
  targets : '.circle-dark-dashed',
  rotateZ: 360,
  duration: 6000,
  easing: 'linear',
  translateX : ['-50%','-50%'],
  translateY : ['-50%','-50%'],
  offset: '-=1100'
}).add({
  targets: '.letters-left',
  scale: [0,1],
  duration: 1200,
  offset: '-=5600'
}).add({
  targets: '.bang',
  scale: [0,1],
  rotateZ: [45,15],
  duration: 1200,
  offset: '-=5400'
}).add({
  targets: '.ml8',
  opacity: 0,
  duration: 1000,
  offset: '-=500',
  easing: "easeOutExpo"
});

let navBtn = document.querySelector('.nav-btn');
//let navBtn = document.getElementsByClassName('nav-btn');
console.log(navBtn);

let isNavActive = false;
let navAnim = anime.timeline({
  autoplay : false
}).add({
  targets: '.nav-btn',
  scale: [1, 0],
  duration: 1100,
  easing: 'easeInOutCirc'
}).add({
  targets: '.nav',
  translateX: 300,
  duration: 600,
  offset: '-=700',
  easing: 'easeInOutCirc'
}).add({
  targets: '.ul-container>ul>li',
  opacity: [0,1],
  translateX: [-100,0],
  duration: 300,
  easing: 'easeOutExpo',
  delay:  (el, i, l) =>{
    return i * 100;
  }
});

let dotAnim = anime({
  targets: '.cursor',

  scale: [0,1],
  opacity: [1,0],
  duration: 600,
  translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
  easing: 'easeOutExpo',
  autoplay: false,
});

navAnim.reverse();
navBtn.addEventListener('click', (e) =>{
  isNavActive = true;

  console.log(isNavActive);
  if(isNavActive){
    navAnim.play();
    navAnim.reverse();
  }
});
//dotAnim.play();
let cursor = document.getElementsByClassName('cursor');
document.addEventListener('click',(e) =>{

console.log(e);
cursor[0].style['top'] = `${e.y}px`;
cursor[0].style.left = e.x+'px';
dotAnim.restart();


let path = e.path;
let isNav = path.find((element) => {
  return (element.className === 'nav-btn' || element.className === 'nav');
});
console.log(`Is nav: ${isNav}`);
  if(isNav === undefined){
    if(isNavActive){
      console.log('close');

      navAnim.play();
      navAnim.reverse();
      isNavActive = false;
    }



  }
});
let link = document.querySelectorAll('a');
link.forEach((element)=>{
  element.addEventListener('click', (e)=>{
    e.preventDefault();
    pageAppear.completed = false;
    pageAppear.reverse();
    console.log(e.target.href);
    pageAppear.play();

    pageAppear.complete = () =>{
        window.location.href = e.target.href;
    };
  });
});

});
