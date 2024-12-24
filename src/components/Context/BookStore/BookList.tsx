import React from "react";
import { useBooks } from "./BookContext";
import { UseTheme } from "./ThemeContext";

const BookList: React.FC = () => {
  const { books } = useBooks();
  const { theme, themeStyles } = UseTheme();

  return (
    <div style={themeStyles[theme]}>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
