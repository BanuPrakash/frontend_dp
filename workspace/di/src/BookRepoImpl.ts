import BookRepo from "./BookRepo";

import {injectable} from 'inversify'

@injectable()
export default class BookRepoImpl implements BookRepo {
    getBooks() {
        return [
            {"id": 1, "title": "JS Design Patterns"},
            {"id": 2, "title": "React in Action"}
        ];
    }
}