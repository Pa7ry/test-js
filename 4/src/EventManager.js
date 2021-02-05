export default class EventManager{
    constructor(events) {
        this.events = events;
    }

    run() {
        this.events.forEach(event => {
            const { second, ...res } = event;
            setTimeout(() => {
                console.log(`At second ${event.second}: ${JSON.stringify(res)}`)
            }, event.second * 1000);
        });
    }
};