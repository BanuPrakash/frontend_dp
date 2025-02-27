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
    * Decorator Pattern
    * Facade Pattern
    * Adapter
    * Bridge
    * Composite
    * Flyweight
    * Proxy
* Behavioural 
    * Command
    * Chain Of Responsibility 
    * Visitor
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
