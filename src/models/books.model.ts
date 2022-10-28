import { Book } from './book.model';

export class Books {
  books: Book[] = [];

  addBook(newBook: Book) {
    this.books = [...this.books, newBook];
  }

  removeBook(book: Book) {
    this.books = this.books.filter((x) => x.id === book.id);
  }

  clear() {
    this.books = [];
  }

  findBookByTitle(title: string): Book | undefined {
    return this.books.find((x) => x.title === title);
  }
}
