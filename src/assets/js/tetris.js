var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 300,
    loop: false,
});

tl
    .add({
        targets: '.tradeprogramm',
        duration: 500,
        translateY: [-1500, 0],
    })

    .add({
        targets: '.opacitywork',
        duration: 500,
        translateY: [-1500, 0],
    })

    .add({
        targets: '.nopaper',
        duration: 500,
        translateY: [-1500, 0],
    })

    .add({
        targets: '.private',
        duration: 500,
        translateY: [-1500, 0],
    })

.add({
    targets: '.operativnost',
    duration: 500,
    translateY: [-1500, 0],
})
.add({
    targets: '.manager',
    duration: 500,
    translateY: [-1500, 0],
})
.add({
    targets: '.whywe',
    duration: 500,
    translateY: [-1500, 0],
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tl.play();
        }
    });
  });
  observer.observe(document.querySelector('.tetris'));


  document.querySelector(".tetris").addEventListener("click", function(e){
    if (e.target.classList.contains('whywe')){
        return;
    }
    if (e.target.classList.contains('tetris_item')){
        let subtitle = e.target.querySelector(".tetris-subtitle");
        let title = e.target.querySelector(".tetris-title");

        e.target.classList.toggle("opened");
        title.classList.toggle("title-display");
        subtitle.classList.toggle("subtitle-display");
    }

  });