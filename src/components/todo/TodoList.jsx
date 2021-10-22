import "../Products/productsstyle.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodoAction } from "../../Redux/todo";
const TodoList = () => {
  // const deleteTodo = () => {};
  const todostate = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const removetask = (title) => {
    dispatch(removeTodoAction(title));
  };
  return (
    <>
      <div class="containerr w-75">
        <div class="flex d-flex flex-nowrap w-100">
          {todostate.map((todo, i) => {
            return (
              <>
                {todostate && todostate.length > 0 ? (
                  <div class="card" key={i}>
                    <div class="card-body">
                      <h2 className="card-title text-dark ">
                        Title : {todo.title}
                      </h2>
                      <p className="card-text fs-5 ">Task number :{i + 1}</p>
                      <p className="card-text fs-4 overflow-auto ">
                        Content : {todo.content}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger    "
                      onClick={() => {
                        removetask(todo.title);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <p className="h5 mx-5 text-muted">no items on the list ..</p>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TodoList;
//
