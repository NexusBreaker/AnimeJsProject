window.addEventListener('load', ()=>{

  anime.timeline({
    loop: true
  }).add({
    targets: '.dot',
    translateY: ['200px','-200px'],
    duration: 2000,
    easing: 'linear',
    delay: (el,i,l) =>{
      return 100 * i;
    }
  }).add({
    targets: '.dot',
    translateY: ['-200px','200px'],
    duration: 2000,
    easing: 'easeOutSine',

  });

});
