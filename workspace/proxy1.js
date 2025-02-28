// ES 6 Proxy

let user = {
    "firstName" : "Harry",
    "lastName": "Potter",
    "age" : 25
};
//new Proxy(user, handler)
let proxyUser = new Proxy(user, {
    get(target, property) {
        console.log(`Accessed ${property} with data ${target[property]}`);
        return target[property]
    },

    set(target, property, value) {
        if(typeof value != 'number') {
            throw new Error('Age has to be a Number')
        }
        else if(value < 18) {
            throw new Error('Min Age for registration has to be 18')
        }

        target[property] = value;
    }
});

console.log(proxyUser.firstName);

// proxyUser.age = '54';

// proxyUser.age = 12

proxyUser.age = 32

console.log(proxyUser)