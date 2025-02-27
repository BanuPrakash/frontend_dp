import { inject, injectable } from "inversify";
import BookService from "./BookService";

@injectable()
export default class BookController {
    // @inject("bookService")
    
    constructor(@inject("bookService") private  bookService: BookService) {}
    
    print() {
        this.bookService.getBooks().forEach(book => console.log(book));
    }
}