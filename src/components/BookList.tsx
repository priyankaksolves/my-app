import { Link } from 'react-router-dom';

const books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

const BookList = () => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>by {book.author}</p>
          <Link to={`/books/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;