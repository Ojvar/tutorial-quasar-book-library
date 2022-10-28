import { Books } from './books.model';

export class TestBooks {
  books: Books = new Books();

  private testAddBook() {
    console.log('RUN TEST : testAddBook');
    const newBook = {
      id: 1,
      author: 'Ojvar',
      publish_year: 2020,
      title: 'New Book',
      description: 'Has a description',
    };

    this.books.addBook(newBook);

    const result = this.books.findBookByTitle('New Book');
    if (result === newBook) {
      console.log('OK');
    } else {
      console.error('FAILED');
    }
  }

  run() {
    this.testAddBook();
  }
}
