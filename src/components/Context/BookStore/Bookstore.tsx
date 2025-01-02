
const books = [
  { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

const BookStore = () => {
  return (
    <div className="bookstore">
      <h2>Book Store</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookStore;
