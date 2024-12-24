import React, { createContext, useState, ReactNode } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
}

interface BookContextType {
  books: Book[];
  addBook: (title: string, author: string) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const addBook = (title: string, author: string) => {
    setBooks((prevBooks) => [
      ...prevBooks,
      { id: prevBooks.length + 1, title, author },
    ]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = (): BookContextType => {
  const context = React.useContext(BookContext);
  if (!context) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
};
