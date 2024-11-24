import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookCreate() {
  const { createBook } = useBooksContext();

  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="e.g. Harry Potter"
          value={title}
          onChange={handleChange}
          className="input"
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
