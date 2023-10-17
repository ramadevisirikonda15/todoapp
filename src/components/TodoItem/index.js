import { AiOutlineDelete } from "react-icons/ai";
import "./index.css";

const TodoItem = (props) => {
  const { todoDetails, deleteTodo, updateTodo } = props;
  const { id, title, completed } = todoDetails;

  onDeleteTodo = () => {
    deleteTodo(id);
  };

  onupdateTodo = () => {
    updateTodo(id);
  };

  return (
    <div className="todo-div">
      <p className="task-name">{title}</p>
      <button type="button" className="delete-btn" onclick={onDeleteTodo}>
        <AiOutlineDelete />
      </button>
      <button type="button" className="update-btn" onclick={onupdateTodo}>
        Update
      </button>
    </div>
  );
};

export default TodoItem;
