describe('index.js', () => {

    beforeEach(() => {
        const document = {
            getElementById: (param) => 'sunmedia',
            createElement: (param) => 'video'
        }
        const video = {
            src: '',
            muted: true,
            autoplay: '',
            controls: ''
        }
        const createVideoElement = (param) => 'video'

        return index = {
            target: document.getElementById('sunmedia'),
            createVideoElement: function (url) {
                const video = document.createElement('video');
                video.src = urlVideo;
                video.muted = true;
                video.autoplay = 'autoplay';
                video.controls = 'controls';
                return video;
            },
            videoElm: createVideoElement('https://vod.addevweb.com/sunmedia/demos/v/normal.mp4'),
            onInsertVideoWhenTargetIsVisible: function(target, elem) {
                new IntersectionObserver(function(entries) {
                    if(entries[0].isIntersecting === true) {
                        target.appendChild(videoElm);
                        videoElm.onended = () => videoElm.remove();
                    }
                }, { threshold: [0] }).observe(target) 
            }
            
        }
    })
    
    it('target should be defined', () => {
        expect(index.target).toBeDefined();
    })


    it('createVideoElement', () => {
        const createVideoElement = spyOn(index, 'createVideoElement')
        expect(createVideoElement).toBeDefined();
    })

    it('videoElm', () => {
        expect(index.videoElm).toBeDefined();
    })

    it('onInsertVideoWhenTargetIsVisible', () => {
        const onInsertVideoWhenTargetIsVisible = spyOn(index, 'onInsertVideoWhenTargetIsVisible');
        expect(onInsertVideoWhenTargetIsVisible).toBeDefined();
    })


    // it('window.onload', () => {
        
    // })

})