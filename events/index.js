// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor() {
        this.events = {};

    };
    // Register an event handler
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    };

    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {
        if (this.events[eventName]) {
            for (let ev of this.events[eventName]) {
                ev();
            }
        }
    }

    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
        delete this.events[eventName];
    }
}
const events = new Events();

function onLogin() {
    console.log('User logged in!');
}

function onPurchase() {
    console.log('User made a purchase!');
}

events.on('login', onLogin);

events.on('purchase', onPurchase);

events.trigger('login');

events.trigger('purchase');

events.off('login');

events.trigger('login');

module.exports = Events;