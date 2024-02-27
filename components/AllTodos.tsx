import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import Todo from "./Todo"
import { TodoSliceInitalStateType, TodoType, TodosActions } from "@/Redux/slices/todoSlice";
import { motion } from "framer-motion";

const AllTodos = () => {
    const todos = useAppSelector((s) => s.todo.todos);
    const filter = useAppSelector((s) => s.todo.filter);
    const dispatch = useAppDispatch()
    const changeFilter = (filterValue: TodoSliceInitalStateType["filter"]) => {
        console.log(filterValue)
        dispatch(
            TodosActions.setFilter(
                filterValue
            )
        )
    }
    const getAllTodos = (): TodoType[] => {
        if(filter === "all") {
            return todos
        } else {
            return todos.filter(todo => todo.status === filter)
        }
    }
    return (
        <div className="di">
            {getAllTodos().map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
            <footer className="footer">
                <h1>items left</h1>
                <div className="pagination">
                    <button onClick={() => changeFilter("all")}>
                        <span>All</span>
                        {filter === "all" && <motion.div layoutId="buttonBG" className="bg"></motion.div>}
                    </button>
                    <button onClick={() => changeFilter("incompleted")}>
                        <span>Active</span>
                        {filter === "incompleted"  && <motion.div layoutId="buttonBG" className="bg"></motion.div>}
                    </button>
                    <button onClick={() => changeFilter("completed")}>
                        <span>Completed</span>
                        {filter === "completed" && <motion.div layoutId="buttonBG" className="bg"></motion.div>}
                    </button>
                </div>
                <h1>clear completed</h1>
            </footer>
        </div>
    )
}

export default AllTodos