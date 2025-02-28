
function memoize(target) {
    let cache = new Map();
    return new Proxy(target, 
    {
        apply(target, thisArg, arg) {
            if(!cache.get(arg.join(','))) {
                let result = target.apply(thisArg, arg);
                cache.set(arg.join(','), result);
                console.log(cache)
            }
            return cache.get(arg.join(','));
        }
    });
}

function fibanocci(no) {
    if(no == 0 || no == 1) {
        return no;
    } else {
        return fibanocci(no - 1) + fibanocci(no - 2);
    }
}

let memFib = memoize(fibanocci);

console.time("first");
    console.log(memFib(40));
console.timeEnd("first");

console.time("second");
    console.log(memFib(40));
console.timeEnd("second");