# Frontend Design Patterns with JavaScript and TypeScript

Banuprakash C

Full Stack Architect,
Co-founder & CEO Lucida Technologies Pvt Ltd.,
Corporate Trainer & Consultant,

Emails: banu@lucidatechnologies.com; banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/frontend_dp

Softwares Required:
Visual Studio Code.

Chrome Web Browser

NodeJS Latest LTS


* Design Principles
    * SRP
    * OCP: Specification for filter
    * LSP
    * ISP
    * DI
* Creational Patterns
    * Builder
    * React Compound Pattern
    * Factory
    * Abstract Factory
    * Prototype
    * Singleton
* Structural Pattern
    * Bridge
    * Proxy
    * Decorator Pattern
    * Facade Pattern
    * Adapter
    * Composite
    * Flyweight
  
* Behavioural 
    * Command
    * Visitor
    * Iterator
    * Chain Of Responsibility 
    * Observer

========


Dependency Injection:
InversifyJS, TypedDI, TSyringe, ...

di> npm init --y
di> npm i typescript inversify reflect-metadata
di> tsc --init

BookRepo interface
BookRepoImpl class

BookService

BookController

index.ts

======

Form Builder in React typescript

    let elements = FormBuilder()
    .input({"label": "Name})
    .input({"label": "Email})
    .checkbox({"label": "Subscribe for Newsletter})
    .build();

   =======

 yarn create react-app react-formbuilder --template typescript

Compound Pattern:
In our application, we often have components that belong to each other. 
They’re dependent on each other through the shared state, and share logic together. 
You often see this with components like select, dropdown components, or menu items. The compound component pattern allows you to create components that all work together to perform a task.

```
{
 showProfile && ( <p className='text-sm text-neutral-400'>
    {post.user.name}
 </p>)
}
 <PostCard 
      showProfile
      post={{
```

Prototype:
* Serializer
* Object.create()

React.createElement() core API to create React Elements; output of render() or return value of function is fed to React.createElement()

React.cloneElement() 

Why abstract factory?

```
class FurnitureFactory {
    // factory Methods
    getChair() {

    }

    getSofa() {

    }

    getCoffeeTable() {

    }
}
```


Day 2:

Structural Design Pattern
Organizing class / objects 

 * Bridge
 * Proxy
 * Decorator Pattern
 * Facade Pattern
 * Adapter
 * Composite
 * Flyweight

The Bridge design pattern allows you to separate the abstraction from the implementation. 
It is a structural design pattern. 
There are 2 parts in Bridge design pattern : 
Abstraction
Implementation

Without BridgePattern
Resources: Album, Artist, PlayList
Views: ShortView, LongView, ConceptualView

Using Inheritance:
View --> abstract class
ShortViewArtist
LongViewArtist
ConceptualViewArtist
ShortViewAlbum
LongViewAlbum
ConceptualViewAlbum
ShortViewPlayList
LongViewPlaylist
ConceptualViewPlaylist

--------

Proxy pattern:
in place of original object
Why? logging, validation, caching, lazy loading ...

Value Proxy

ES 6 Proxy:
The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.
a) get trap()
b) set trap()
c) apply trap()

```
let product = {
    "name" : "A"
}

let user = {
    "name": "Raj"
}

function update(name) {
    this.name = name;
}

update.call(user, "Shyam"); or update.apply(user, ["shyam"]);
update.call(product, "Mac");
```
====

Decorator Pattern

Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.


Flyweight:

Flyweight Classes: represents objects that can be shared.

```
new Product("Dell", "XPS", "Intell", "TSF@", "4GB", "P1");
new Product("Dell", "XPS", "Intell", "PLE", "8GB", "P2");
new Product("Dell", "XPS", "Intell", "LOCA", "32GB", "P1");
new Product("Dell", "XPS", "Intell", "KICS", "16GB", "P1");
```

Flyweight factory has to cache and return Flyweight objects

Composite Pattern:
Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

// BookComponent
// BookGroup [ Composite]
// Book [ leaf]

```
class BookComponent {
    add(bookComponent) {
        //
    }

    print() {
        // 
    }
}

class Book extends BookComponent {
    constructor(title, author, price) {

    }
    add(bookComponent) {
        //
    }
    print() {
        console.log(title, author, price);
    }
}

class BookGroup extends BookComponent {
    constructor(group) {
        ..
        this.books = [];
    }

    add(bookComponent) {
        this.books.push(bookComponent); // can be a group or book
    }

    print() {
        this.books.forEach(book => book.print());
    }
}
```

Behavioral design patterns are a category of design patterns that focus on the interactions and communication between objects.

* Vistor Pattern

==

Babel Visitor Pattern

npm init --y
npm i babel-cli babel-loader

============

Command Pattern:
The Command Design Pattern is a behavioral design pattern that turns a request into a stand-alone object called a command. It support operations like undo.

