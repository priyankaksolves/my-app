const BooksList = [
  {
    id: 1,
    bookName: 'Book1',
    author: 'Sherlock Homes'
  },
{
  id:2,
  bookname: 'Book2',
    author: 'Williams'
}


];




const ListComponent = () => {
  return (
    <>
      <div>
        <ul>
          {BooksList.map((book) => <li key={book.id}>{book.author}</li>)}
        </ul>
      </div>
    </>
  )
}

export default ListComponent
