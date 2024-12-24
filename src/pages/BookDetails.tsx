import { useParams } from 'react-router-dom';

const books = [
  { id: 1, title: '1984', author: 'George Orwell', description: 'A dystopian novel set in a totalitarian society.' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A novel about racial injustice in the Deep South.' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A story about the American Dream and its failure.' },
];

interface books {
  bookId: string;
}

const BookDetails = () => {
  const { bookId } = useParams();
  const book = books.find((b) => b.id === parseInt(bookId ?? ''));

  return (
    <div>
      {book ? (
        <>
          <h1>{book.title}</h1>
          <h3>by {book.author}</h3>
          <p>{book.description}</p>
        </>
      ) : (
        <p>Book not found!</p>
      )}
    </div>
  );
};

export default BookDetails;