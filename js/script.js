let videoPlayer1 = document.getElementById('videoPlayer1');
let videoPlayer2 = document.getElementById('videoPlayer2');


let controls = document.querySelectorAll('.control')

let video1Control = document.querySelector('.video1');


let interacted = false,
    loop = 0,
    currentVideo = null,
    nextVideo = null,
    playedVideo7 = false;


video1Control.classList.remove('hidden');
video1Control.addEventListener('click', unmuteVideo1);


function unmuteVideo1() {
    video1Control.removeEventListener('click', unmuteVideo1);

    let current = document.querySelector('.playing');
    current.muted = false;

    currentVideo = '1';
    nextVideo = '2';

    video1Control.classList.remove('hidden');
    video1Control.addEventListener('click', playVideo2);
}

function playVideo1() {

    let current = document.querySelector('.playing');
    current.removeEventListener('ended', playVideo1);

    playedVideo7 = false;


    currentVideo = '1'; //video to play
    nextVideo = '2'; // video to load
    playVideo(true);


    current = document.querySelector('.playing');
    current.loop = true;


    video1Control.classList.remove('hidden');
    video1Control.addEventListener('click', playVideo2);
}


function playVideo2() {
    video1Control.removeEventListener('click', playVideo2);
    video1Control.classList.add('hidden');

    let current = document.querySelector('.playing');
    current.autoplay = false;
    current.loop = false;
    current.muted = false;

    currentVideo = '2'; //video to play
    nextVideo = '3'; // video to load

    playVideo();

    current = document.querySelector('.playing');
    current.addEventListener('ended', playVideo3);
}


function playVideo3() {
    let current = document.querySelector('.playing');
    current.removeEventListener('ended', playVideo3);

    currentVideo = '3';
    nextVideo = '4';

    playVideo();

    current = document.querySelector('.playing');
    current.addEventListener('ended', playVideo4);
}


function playVideo4() {

    let current = document.querySelector('.playing');
    current.removeEventListener('ended', playVideo4);


    currentVideo = '4';
    nextVideo = '5';

    playVideo();


    let controlToShow = document.querySelector('.video4');
    controlToShow.classList.remove('hidden');

    // handleSwipe(controlToShow, currentVideo, swiped);

    if (!controlToShow.onclick) {
        controlToShow.onclick = clickedGyro; //click on 'gyro'
        // console.log('click added')
    } else {
        controlToShow.onclick = null; //click on 'gyro'
        controlToShow.onclick = clickedGyro; //click on 'gyro'
    }


    current = document.querySelector('.playing');
    current.addEventListener('ended', repeatVideo);

}


function playVideo5() {

    let current = document.querySelector('.playing');

    if (playedVideo7) {
        current.removeEventListener('ended', playVideo5);
    }


    currentVideo = '5';
    nextVideo = '6A';

    playVideo();



    current = document.querySelector('.playing');
    current.addEventListener('ended', repeatVideo);


    let control = document.querySelector('.video5');
    control.classList.remove('hidden');
    if (!control.ontouchend) {
        handleSwipe(control, current, swiped);
    } else {
        control.ontouchend = null;
        control.ontouchstart = null;
        handleSwipe(control, current, swiped);
    }


}


function playVideo6() {

    let current = document.querySelector('.playing');

    currentVideo = nextVideo;

    if (!playedVideo7) {
        nextVideo = '7';
    } else {
        nextVideo = '8';
    }

    // console.log('playing 6');
    playVideo();


    current = document.querySelector('.playing');
    if (!playedVideo7) {
        playedVideo7 = true;
        current.addEventListener('ended', playVideo7);
    } else {
        current.addEventListener('ended', playVideo8);
    }

}


function playVideo7() {

    let current = document.querySelector('.playing');

    current.removeEventListener('ended', playVideo7);



    currentVideo = '7';
    nextVideo = '5';
    playVideo();

    //go to video 5
    current = document.querySelector('.playing');
    current.addEventListener('ended', playVideo5);


}


function playVideo8() {

    let current = document.querySelector('.playing');
    current.removeEventListener('ended', playVideo8);


    currentVideo = '8';
    nextVideo = '9B';

    playVideo();

    current = document.querySelector('.playing');
    current.addEventListener('ended', repeatVideo);

    let control = document.querySelector('.video8');
    control.classList.remove('hidden');
    if (!control.ontouchend) {
        handleSwipe(control, current, swiped);
    } else {
        control.ontouchend = null;
        control.ontouchstart = null;
        handleSwipe(control, current, swiped);
    }
}


function playVideo9() {
    let current = document.querySelector('.playing');
    current.removeEventListener('ended', playVideo8);

    currentVideo = nextVideo;


    if (currentVideo === '9A') {
        nextVideo = '10A';
    } else if (currentVideo === '9B') {
        nextVideo = '10B';
    }
    playVideo();



    current = document.querySelector('.playing');
    //go to video 10
    current.addEventListener('ended', playVideo10);

}


function playVideo10() {

    let current = document.querySelector('.playing');

    //remove event listener
    current.removeEventListener('ended', playVideo10);

    currentVideo = nextVideo;

    if (currentVideo === '10A') {
        nextVideo = '11A';
    } else if (currentVideo === '10B') {
        nextVideo = '11B';
    }

    playVideo();

    current = document.querySelector('.playing');
    current.addEventListener('ended', repeatVideo);

    let control = document.querySelector('.video10');
    control.classList.remove('hidden');
    if (!control.ontouchend) {
        handleSwipe(control, current, swiped);
    } else {
        control.ontouchend = null;
        control.ontouchstart = null;
        handleSwipe(control, current, swiped);
    }


}


function playVideo11() {


    let current = document.querySelector('.playing');

    //remove event listener
    current.removeEventListener('ended', playVideo10);

    currentVideo = nextVideo;

    if (currentVideo === '11A') {
        nextVideo = '12';
    } else if (currentVideo === '11B') {
        nextVideo = '13';
    }

    playVideo();

    current = document.querySelector('.playing');
    current.addEventListener('ended', playLastVideo);

}


function playLastVideo() {
    let current = document.querySelector('.playing');
    current.removeEventListener('ended', playLastVideo);

    currentVideo = nextVideo;
    nextVideo = '1';


    playVideo();

    current = document.querySelector('.playing');
    current.addEventListener('ended', playVideo1);

}


function swiped(type, video) {

    // console.log(type, video.dataset.video);

    if (video.dataset.video === '5') {
        if (type === 'up') {
            nextVideo = '6A';
        } else if (type === 'down') {
            nextVideo = '6B';
            reloadNextVideo();
        }
        video.removeEventListener('ended', repeatVideo);
        playVideo6();

    } else if (video.dataset.video === '8') {
        if (type === 'up') {
            nextVideo = '9A';
            reloadNextVideo();
        } else if (type === 'down') {
            nextVideo = '9B';
        }
        video.removeEventListener('ended', repeatVideo);
        playVideo9();
    } else if (video.dataset.video  === '10A') {
        nextVideo = '11A';
        video.removeEventListener('ended', repeatVideo);
        playVideo11();

    } else if (video.dataset.video  === '10B') {

        nextVideo = '11B';
        video.removeEventListener('ended', repeatVideo);
        playVideo11();

    }

}


function clickedGyro() {
    let current = document.querySelector('.playing');
    current.removeEventListener('ended', repeatVideo);

    // console.log('gyro clicked');
    interacted = false;
    loop = 0;

    playVideo5();
}


function playVideo(reset = false) {

    let currentPlayingVideo = document.querySelector('.playing');
    let videoToPlay = document.querySelector('.stopped');

    //
    // // setup with current playing video
    // currentPlayingVideo.pause();
    // currentPlayingVideo.currentTime = 0;
    // // currentPlayingVideo.autoplay = false;
    // // currentPlayingVideo.muted = false;
    // // currentPlayingVideo.loop = false;
    //
    //
    // //setup for video to play
    if (reset) {
        videoToPlay.setAttribute("src", "videos/" + currentVideo + ".mp4");
        videoToPlay.load();
    }

    currentPlayingVideo.setAttribute("src", "");

    currentPlayingVideo.classList.add('hidden');

    videoToPlay.classList.remove('hidden');
    videoToPlay.play();
    videoToPlay.dataset.video = currentVideo;

    currentPlayingVideo.classList.add('stopped');
    currentPlayingVideo.classList.remove('playing');

    videoToPlay.classList.remove('stopped');
    videoToPlay.classList.add('playing');


    //load next video
    currentPlayingVideo.setAttribute("src", "videos/" + nextVideo + ".mp4");
    currentPlayingVideo.load();


    controls.forEach(control => control.classList.add('hidden'));

    // document.title = 'video ' + currentVideo;
}


function repeatVideo() {

    let current = document.querySelector('.playing');

    current.removeEventListener('ended', repeatVideo);

    if (!interacted && loop < 2) { // play current video again


        current.play();
        loop++;
        current.addEventListener('ended', repeatVideo);


    } else if (!interacted && loop > 1) { // back to home
        interacted = false;
        loop = 0;

        current.removeEventListener('ended', repeatVideo);
        // console.log('go to 1 condition');
        playVideo1();

    }


}


function handleSwipe(ele, currentVideo, fn) {

    // let touchstartX = 0;
    // let touchendX = 0;

    let touchstartY = 0;
    let touchendY = 0;

    ele.ontouchstart = function (event) {
        // touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }

    // ele.addEventListener('touchstart', , false);


    ele.ontouchend = function (event) {
        // touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture(touchstartY, touchendY, currentVideo, fn);
    };

    // ele.addEventListener('touchend', , false);


}


function reloadNextVideo() {
    let stoppedVideo = document.querySelector('.stopped');
    stoppedVideo.setAttribute("src", "");
    stoppedVideo.setAttribute("src", "videos/" + nextVideo + ".mp4");
    stoppedVideo.load();

}




function handleGesture(touchstartY, touchendY, currentVideo, fn) {
    // if (touchendX <= touchstartX) {
    //     console.log('Swiped left');
    // }
    //
    // if (touchendX >= touchstartX) {
    //     console.log('Swiped right');
    // }


    // if (touchendY === touchstartY) {
    //     console.log('Tap');
    //     return;
    // }

    if (touchendY <= touchstartY) {
        // console.log('Swiped up');
        // return 'up';
        fn('up', currentVideo);

    }else if (touchendY >= touchstartY) {
        // console.log('Swiped down');
        fn('down', currentVideo);
        // return 'down';
    }

}
