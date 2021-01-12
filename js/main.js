
const links = [
    'https://www.youtube.com/embed/NJpQ6W_KRlQ?loop=1',
    'https://www.youtube.com/embed/01lAv7067ak?loop=1',
    'https://www.youtube.com/embed/NJpQ6W_KRlQ?loop=1',
    'https://www.youtube.com/embed/01lAv7067ak?loop=1',
];

function setVisibleInfo(el) {
    const str=el.id;
    const num = str.charAt(str.length - 1);
    const info = document.getElementById('info-' + num);
    if (info.classList.contains('visible')) {
        info.classList.remove('visible');
    } else {
        info.classList.add('visible');
    }
}

function setVisibleVideo(el=null) {
    const str = el ? el.id : null;
    const num = str?str.charAt(str.length - 1):"";
    const videoEl = document.getElementById('video-element');
    const load = document.getElementById('lds-grid');
    videoEl.onload= function (el) {
        if (videoEl.classList.contains('visible')) {
            videoEl.classList.remove('visible');
            load.classList.add('visible');
        } else {
            videoEl.classList.add('visible');
            load.classList.remove('visible');
        }
        console.log('el'); 
    };
    const video = document.getElementById('video-container');
    console.log(video);
    if (video.classList.contains('visible')) {
        videoEl.attributes.src.value = "";
        video.classList.remove('visible');
    } else {
        videoEl.attributes.src.value = links[num - 1];
        console.log(videoEl.attributes.src.value);
        video.classList.add('visible');
    }
}