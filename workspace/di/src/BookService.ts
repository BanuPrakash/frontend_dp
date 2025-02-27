import { inject, injectable } from "inversify";
import BookRepo from "./BookRepo";

@injectable()
export default class BookService {
    constructor(@inject("bookRepo") private  bookRepo: BookRepo) {}


    getBooks(): any[] {
        return this.bookRepo.getBooks();
    }
}