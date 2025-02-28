
// implementor
class Resource {
    snippet() {
        throw new Error('Abstract Resource!!!');
    }
}

// abstraction 
class View {
    constructor(resource) {
        this.resource = resource;
    }

    draw() {
       throw new Error('abstract view')
    }
}

class Album extends Resource {
    snippet() {
        console.log('Album Resource')
    }
}

class Artist extends Resource {
    snippet() {
        console.log('Artist Resource')
    }
}

class LongView extends View {
    constructor(resource) {
        super(resource);
    }

    draw() {
        this.resource.snippet();
    }
}