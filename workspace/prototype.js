class Address {
    constructor(streetAddress, city, country) {
        this.streetAddress = streetAddress;
        this.city = city;
        this.country = country;
    }

    toString() {
        return `Address: ${this.streetAddress}, ` +
            `${this.city}, ${this.country}`;
    }
}

class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address; //!
    }

    toString() {
        return `${this.name} lives at ${this.address}`;
    }

    greet() {
        console.log(
            `Hi, my name is ${this.name}, ` +
            `I live at ${this.address.toString()}`
        );
    }
}

class Serializer {
    constructor(...types) {
        this.types = types;
    }
    addTypeIndex(object) {
        let idx = this.types.findIndex(type => type.name === object.constructor.name);
        if (idx != -1) {
            object['typeIndex'] = idx;
            for (let key in object) {
                this.addTypeIndex(object[key]);
            }
        }
    }

    reconstruct(object) {
        if (object.hasOwnProperty('typeIndex')) {
            let type = this.types[object.typeIndex]; // 0 or 1 ==> Person or Address
            var obj = new type(); // new Person(); --> toString(), greet()
            for (let key in object) {
                obj[key] = this.reconstruct(object[key]);
            }
            delete obj.typeIndex;
            return obj;
        }
        return object; // string
    }
    clone(object) {
        this.addTypeIndex(object);
        let cpy = JSON.parse(JSON.stringify(object)); // dictionary
        return this.reconstruct(cpy);
    }
}

let serializer = new Serializer(Person, Address);

let karthik = new Person('Karthik',
    new Address('123 MG Road', 'Bengaluru', 'India'));

// copy only fields/state and not behaviour and type [Person , Address]
// let rahul = JSON.parse(JSON.stringify(karthik));

let rahul = serializer.clone(karthik);

rahul.name = 'Rahul';
rahul.address.streetAddress = '321 Bose St';

console.log(karthik.toString());
console.log(rahul.toString()); // cloned

karthik.greet();
rahul.greet();
