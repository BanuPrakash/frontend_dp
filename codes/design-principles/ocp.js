let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
    yuge: 'yuge'
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}


class ColorSpecification {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(elem) {
        return elem.color === this.color;
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size;
    }

    isSatisfied(elem) {
        return elem.size === this.size;
    }
}

class AndSpecification {
    constructor(...specs) {
        this.specs = specs;
    }
    isSatisfied(elem) {
        return this.specs.every(spec => spec.isSatisfied(elem));
        //return this.specs.any(spec => spec.isSatisfied(elem));
    }
}

class ColorOrSizeSpecification {

}
//  OCP
class ProductFilter {
    filter(products, specification) {
        return products.filter(product => specification.isSatisfied(product) );
    }
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

let colorSpec = new ColorSpecification(Color.green);
let sizeSpec = new SizeSpecification(Size.large);

let andSpec = new AndSpecification(colorSpec, sizeSpec);

let pf = new ProductFilter();
console.log(`Green products (old):`);
for (let p of pf.filter(products, colorSpec))
    console.log(` * ${p.name} is green`);
