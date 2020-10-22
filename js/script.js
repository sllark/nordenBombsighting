let video1 = document.getElementById('video1');
let video2 = document.getElementById('video2');
let video3 = document.getElementById('video3');
let video4 = document.getElementById('video4');
let video5 = document.getElementById('video5');
let video6A = document.getElementById('video6A');
let video6B = document.getElementById('video6B');
let video7 = document.getElementById('video7');
let video8 = document.getElementById('video8');
let video9A = document.getElementById('video9A');
let video9B = document.getElementById('video9B');
let video10A = document.getElementById('video10A');
let video10B = document.getElementById('video10B');
let video11A = document.getElementById('video11A');
let video11B = document.getElementById('video11B');
let video12 = document.getElementById('video12');
let video13 = document.getElementById('video13');


let allVideo=[video1,video2, video3,video4,video5,video6A, video6B,video7,video8,video9A,video9B,video10A,video10B,video11A,video11B,video12,video13];

let controls = document.querySelectorAll('.control')

let gyro = document.querySelector('.gyroCont');


let interacted = false,
    loop = 0,
    currentVideo = null,
    nextVideo = null,
    playedVideo7 = false;


video1.addEventListener('click', unmuteVideo1);

function unmuteVideo1() {
    video1.muted = false;
    video1.removeEventListener('click', unmuteVideo1);

    currentVideo = video1;
    nextVideo = video2;

    video1.addEventListener('click', playVideo2);
}


function playVideo1() {
    //
    // allVideo.forEach(vid=>{
    //     console.log(vid.id, getEventListeners(vid))
    // })


    currentVideo.removeEventListener('ended', playVideo1);
    // console.log('playing video 1');

    playedVideo7 = false;

    hideVideo(currentVideo);
    playVideo(video1);


    currentVideo = video1;
    nextVideo = video2;

    currentVideo.loop = true;

    video1.addEventListener('click', playVideo2);
}


function playVideo2() {
    video1.removeEventListener('click', playVideo2);


    hideVideo(currentVideo);
    playVideo(video2);

    currentVideo = video2;
    nextVideo = video3;

    video2.addEventListener('ended', playVideo3);
}

function playVideo3() {
    video2.removeEventListener('ended', playVideo3);
    hideVideo(currentVideo);


    hideVideo(currentVideo);
    playVideo(nextVideo);

    currentVideo = video3;
    nextVideo = video4;

    video3.addEventListener('ended', playVideo4);
}


function playVideo4() {
    video3.removeEventListener('ended', playVideo4);


    hideVideo(currentVideo);
    playVideo(nextVideo);


    currentVideo = video4;
    nextVideo = video5;


    let controlToShow = document.querySelector('.video4');
    controlToShow.classList.remove('hidden');

    handleSwipe(controlToShow, currentVideo, swiped);

    if (!controlToShow.onclick) {
        controlToShow.onclick=clickedGyro; //click on 'gyro'
    }else {
        controlToShow.onclick=null; //click on 'gyro'
        controlToShow.onclick=clickedGyro; //click on 'gyro'
    }


    currentVideo.addEventListener('ended', repeatVideo);

}


function playVideo5() {

    // if (playedVideo7) {
        currentVideo.removeEventListener('ended', playVideo5);
    // }


    // console.log('video 5 playing')

    hideVideo(currentVideo);
    playVideo(nextVideo);


    currentVideo = video5;
    nextVideo = video6A;


    currentVideo.addEventListener('ended', repeatVideo);

    let control = document.querySelector('.' + currentVideo.id);

    if(!control.ontouchend) {
        handleSwipe(control, currentVideo, swiped);
    }else {
        control.ontouchend=null;
        control.ontouchstart=null;
        handleSwipe(control, currentVideo, swiped);
    }


}


function playVideo6() {


    hideVideo(currentVideo);
    playVideo(nextVideo);


    currentVideo = nextVideo;//video6A or video6B
    nextVideo = video7;


    if (!playedVideo7) {
        playedVideo7 = true;
        nextVideo = video7;
        currentVideo.addEventListener('ended', playVideo7);
    } else {
        nextVideo = video8;
        currentVideo.addEventListener('ended', playVideo8);
    }


}


function playVideo7() {
    //remove event listener
    currentVideo.removeEventListener('ended', playVideo7);


    hideVideo(currentVideo); //video 6
    playVideo(nextVideo); // video 7


    currentVideo = nextVideo; // video 7
    nextVideo = video5;


    //go to video 5
    currentVideo.addEventListener('ended', playVideo5);


}


function playVideo8() {

    // console.log('video 8')

    //remove event listener
    currentVideo.removeEventListener('ended', playVideo8);

    hideVideo(currentVideo);
    playVideo(nextVideo);


    currentVideo = nextVideo;
    nextVideo = video9A;


    currentVideo.addEventListener('ended', repeatVideo);
    let control = document.querySelector('.' + currentVideo.id);

    if(!control.ontouchend) {
        handleSwipe(control, currentVideo, swiped);
    }else {
        control.ontouchend=null;
        control.ontouchstart=null;
        handleSwipe(control, currentVideo, swiped);
    }
}


function playVideo9() {
    // console.log('video 9')


    hideVideo(currentVideo);
    playVideo(nextVideo);


    currentVideo = nextVideo;//video9A or video9B

    if (currentVideo.id === 'video9A') {
        nextVideo = video10A;
    } else if (currentVideo.id === 'video9B') {
        nextVideo = video10B;
    }

    //go to video 10
    currentVideo.addEventListener('ended', playVideo10);


}






function playVideo10() {
    // console.log('video 10')

    //remove event listener
    currentVideo.removeEventListener('ended', playVideo10);


    hideVideo(currentVideo); //video 9
    playVideo(nextVideo); // video 10A/B


    currentVideo = nextVideo; // video 10

    if (currentVideo.id === 'video10A') {
        nextVideo = video11A;
    } else if (currentVideo.id === 'video10B') {
        nextVideo = video11B;
    }

    console.log(currentVideo.id);


    currentVideo.addEventListener('ended', repeatVideo);
    let control = document.querySelector('.' + currentVideo.id);

    if(!control.ontouchend) {
        handleSwipe(control, currentVideo, swiped);
    }else {
        control.ontouchend=null;
        control.ontouchstart=null;
        handleSwipe(control, currentVideo, swiped);
    }



}



function playVideo11() {


    hideVideo(currentVideo); //video 10
    playVideo(nextVideo); // video 11A/B


    currentVideo = nextVideo; // video 11

    if (currentVideo.id === 'video11A') {
        nextVideo = video12;
    } else if (currentVideo.id === 'video11B') {
        nextVideo = video13;
    }


    currentVideo.addEventListener('ended', playLastVideo);

}


function playLastVideo() {

    currentVideo.removeEventListener('ended', playLastVideo);

    hideVideo(currentVideo); //video 11
    playVideo(nextVideo); // video 12/13


    currentVideo = nextVideo; // video 12/13
    nextVideo = video1;

    currentVideo.addEventListener('ended', playVideo1);

}














function swiped(type, video) {

    // console.log(type, video.id);

    if (video.id === 'video5') {
        if (type === 'up') {
            nextVideo = video6A;
        } else if (type === 'down') {
            nextVideo = video6B;
        }
        currentVideo.removeEventListener('ended', repeatVideo);
        playVideo6();

    } else if (video.id === 'video8') {
        // console.log('video8')
        if (type === 'up') {
            nextVideo = video9A;
        } else if (type === 'down') {
            nextVideo = video9B;
        }
        currentVideo.removeEventListener('ended', repeatVideo);
        playVideo9();
    }else if (video.id === 'video10A') {

        console.log(video.id,'swiped video10A, going to 11A')
        nextVideo = video11A;
        currentVideo.removeEventListener('ended', repeatVideo);
        playVideo11();

    }else if (video.id === 'video10B'){
        console.log(video.id,'swiped video10B, going to 11B')

        nextVideo = video11B;
        currentVideo.removeEventListener('ended', repeatVideo);
        playVideo11();

    }


}


function clickedGyro() {
    currentVideo.removeEventListener('ended', repeatVideo);

    // console.log('gyro clicked');
    interacted = false;
    loop = 0;

    // hideVideo(currentVideo);
    playVideo5();

}


function hideShow(v1, v2) {

    hideVideo(v1);
    playVideo(v2);


}


function playVideo(video) {

    video.classList.remove('hidden');
    video.play();


    controls.forEach(control => control.classList.add('hidden'));
    let controlToShow = document.querySelector('.' + video.id);
    if (controlToShow)
        controlToShow.classList.remove('hidden');


    document.title = video.id;
}


function repeatVideo() {

    // console.log('above');

    currentVideo.removeEventListener('ended', repeatVideo);

    if (!interacted && loop < 2) { // play current video again


        // console.log('repeating ' + currentVideo.id);

        playVideo(currentVideo);
        loop++;
        currentVideo.addEventListener('ended', repeatVideo);


    } else if (!interacted && loop > 1) { // back to home
        interacted = false;
        loop = 0;

        currentVideo.removeEventListener('ended', repeatVideo);
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


function hideVideo(video) {
    video.pause();
    video.autoplay = false;
    video.loop = false;
    video.currentTime=0;
    video.classList.add('hidden');
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

    }

    if (touchendY >= touchstartY) {
        // console.log('Swiped down');
        fn('down', currentVideo);
        // return 'down';
    }

}


function handleSwipeVideo(control, video) {

    handleSwipe(control, video, swiped);

}


// let video = document.getElementById('video');
// let currentVideo=1;
//
// window.onload = function (e) {
//
//     // console.log('hehe');
//     video.addEventListener('click', firstClickHandler)
//
//
// }
//
//
// const firstClickHandler = () => {
//     // console.dir('playing video 2');
//     currentVideo++;
//
//     document.title='video '+currentVideo;
//     video.src = 'videos/2.mp4';
//     video.loop = false;
//
//     // video.addEventListener('ended', () => {
//     //     currentVideo++;
//     //     console.log('video'+currentVideo+' ended');
//     //     video.src = 'videos/'+currentVideo+'.mp4';
//     //     document.title='video '+currentVideo;
//     //
//     // });
//
//
//     video.addEventListener('ended', () => {
//         video.src = 'videos/3.mp4';
//         document.title='video 3';
//     });
//
//
//
//     video.removeEventListener('click',firstClickHandler);
// }