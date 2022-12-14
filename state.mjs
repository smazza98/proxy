export class State {
    constructor(initialState, callback) {
        this.initialState = { value: initialState };
        this.callback = typeof callback === 'function' ? callback : () => { };

        const handler = {
            get: (target, prop) => {
                if(typeof target[prop] === "object") {
                    return new Proxy(target[prop],handler)
                }
                return target[prop] // memory.state["counter"]
            },
            set: (target, prop, value) => {
                target[prop] = value;
                this.callback(this.state)
                return true;
            }
        }

        this.state = new Proxy(this.initialState.value, handler)
    }
}