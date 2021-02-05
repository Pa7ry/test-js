const target = document.getElementById('sunmedia');

const createVideoElement = (urlVideo) => {
    const video = document.createElement('video');
    video.src = urlVideo;
    video.muted = true;
    video.autoplay = 'autoplay';
    video.controls = 'controls';
    return video;
}

/**
 *
 * @param {string} src The video media file url
 * @return {HTMLVideoElement}
 */
const videoElm = createVideoElement('https://vod.addevweb.com/sunmedia/demos/v/normal.mp4');

/**
 * @param {HTMLDivElement} targetElm
 * @param {HTMLVideoElement} videoElm
 */
const onInsertVideoWhenTargetIsVisible = (target, videoElm) => {
    new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            target.appendChild(videoElm);
            videoElm.onended = () => videoElm.remove();
        }
    }, { threshold: [0] }).observe(target)
}

window.onload = () => onInsertVideoWhenTargetIsVisible(target, videoElm);
