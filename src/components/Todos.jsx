import {useDispatch} from "react-redux";
import {removeTodo} from "../features/todo/todoSlice.js";

const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const removeTodoHandler = (todoId) => {
        dispatch(removeTodo(todoId))
    }
    return (
        <>
            {todos.length > 0 ? (
                <ul className="list-none">
                    {todos.map((todo) => (
                        <li
                            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                            key={todo.id}
                        >
                            <div className="text-white">{todo.text}</div>
                            <button
                                onClick={() => removeTodoHandler(todo.id)}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600
                            rounded text-md"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (<p className="mt-10 font-bold">No Added Todos</p>)}
        </>
    )
}

import {useSelector} from "react-redux";

export default Todos;