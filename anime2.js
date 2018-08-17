window.addEventListener('load', ()=>{
  let text = document.querySelector('.content-container>h1');
  let reg = text.innerHTML.replace(/\w|\S/g, `<span class="letter">$&</span>`);
  text.innerHTML = reg;

  anime.timeline({loop: true}).add({
    targets: '.letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: 'easeOutExpo',
    duration: 1200,
    delay: (el,i) =>{
      return 500 + 30 * i;
    }
  }).add({
    targets: '.letter',
    translateX: [0, -30],
    opacity: [1,0],
    easing: 'easeInExpo',
    duration: 1100,
    delay: (el,i) =>{
      return 100 + 30 * i;
    }
  });

});
