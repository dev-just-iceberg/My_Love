var bg_music = new Audio('bg.webm');
bg_music.volume = 0.65;

document.getElementById("start").addEventListener('click', () => {
    start();
});

function start() {
    //document.body.webkitRequestFullScreen();
    document.body.style.backgroundImage = "url('bg.png')";
    //playing the fav music for my honey
    bg_music.play();

    var tl = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 7000
    });

    anime.set('#hero', {translateY: "100vh", translateX: "-50%"});
    anime.set("#dim", {
        background:"linear-gradient(45deg,rgba(255,0,0,1) 0%,rgba(121,9,9,1) 40%,rgba(121,9,9,1) 50%,rgba(255,233,0,1) 100%);"
    });

    tl.add({
        targets: "#dim",
        keyframes: [
            {background: "rgba(0, 0, 0, 0)"},
            {background: "rgba(0,0,0,0.7)"}
        ]
    });

    tl.add({
        targets: ".wrapper",
        opacity: {
            value: "0",
            duration: 3000
        }
    }, "-=7000");

    tl.add({
        targets: "#hero",
        translateY: {
            value: "-950vh",
            duration: "240000"
        },
        delay: 9500,
        easing: "linear"
    });

    /*
    anime.timeline({
        easing: 'easeInOutQuad',
        duration: 7000
    })
        .add(
            {
                target: '#dim',
                keyframes:
                [
                    {background: "rgba(0, 0, 0, 0)"},
                    {background: "rgba(0,0,0,0.7)"}

            }, 0
        );
    */
}
