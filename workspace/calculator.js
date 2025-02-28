class Calculator {
    constructor() {
        this. value = 0;
        this.history = [];
    }

    // command can be add / sub ,,
    execute(command) {
        this.value = command.execute(this.value);
        this.history.push(command);
    }

    undo() {
        const command = this.history.pop();
        this.value = command.undo(this.value);
    }
}

class AddCommand {
    constructor(val) {
        this.val = val;
    }

    execute(currentValue) {
        return currentValue + this.val
    }

    undo(currentValue) {
        return currentValue - this.val;
    }
}


class SubCommand {
    constructor(val) {
        this.val = val;
    }

    execute(currentValue) {
        return currentValue - this.val
    }

    undo(currentValue) {
        return currentValue + this.val;
    }
}

let calc = new Calculator();
let addCmd = new AddCommand(10);
calc.execute(addCmd);
console.log(calc.value);
calc.execute(new AddCommand(100));
console.log(calc.value); // 110
calc.execute(new SubCommand(20));
console.log(calc.value); // 90

calc.undo(); 
console.log(calc.value); // 110

calc.undo(); 
console.log(calc.value); // 10