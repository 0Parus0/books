import { useState } from "react";
function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);
    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title)
    }

    return (
        <form action="" className="book-edit" onSubmit={handleSubmit}>
            <label htmlFor="">Title</label>
            <input type="text" name="" value={title} onChange={handleChange} id="" className="input" />
            <button className="button is-primary">Save</button>
        </form>
    ) 
}

export default BookEdit;