import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../Redux/todo";
const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const handleSubmission = (e) => {
    e.preventDefault();
    dispatch(addTodoAction({ title, content }));
    setTitle("");
    setContent("");
  };

  return (
    <>
      <div>
        <h3 className="text-muted mb-4">Add a TODO</h3>
        <form onSubmit={handleSubmission}>
          <h3>Title</h3>
          <input
            className="form-control w-75 mx-auto my-1"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h3>Content</h3>

          <textarea
            className="form-control w-75 mx-auto my-2"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <button className="my-4 btn btn-warning btn-lg px-4" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
