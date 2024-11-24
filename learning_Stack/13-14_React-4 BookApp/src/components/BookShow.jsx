import { useState } from "react";
import BookEdit from "./BookEdit.jsx";
import useBooksContext from "../hooks/useBooksContext";

function BookShow({ book }) {
  const { deleteBook } = useBooksContext();

  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    deleteBook(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) content = <BookEdit toggleForm={handleEdit} book={book} />;

  return (
    <div className="book-show">
      <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button onClick={handleEdit} className="edit">
          Edit
        </button>
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
