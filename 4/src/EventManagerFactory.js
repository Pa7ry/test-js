import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        // Un evento con un tipo no contemplado debería ser ignorado.
        const eventsFiltered = events.filter((event) => types.includes(event.type));
        return new EventManager(eventsFiltered);
    }
};