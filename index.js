class State {
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

   /* get state() {
        return this.initialState.value;
    }

    set state(value) {
        this.initialState.value = {
            ...this.initialState.value,
            ...value
        }

        this.callback(this.initialState.value);
    } */
}

const memory = new State({
    counter: 0, 
    user: {id: 1}
}, (newState) => {
    console.log(newState);
} ); 

// memory.state = {counter: memory.state.counter + 1};

 memory.state.counter = memory.state.counter + 1;


