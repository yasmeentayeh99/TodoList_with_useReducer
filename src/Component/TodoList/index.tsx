import React, {useReducer, useState} from "react";
import any = jasmine.any;
import Todo from "../Todo/Todo";
import todo from "../Todo/Todo";
export interface todos  {
    counter : number,
    text : string ,
    checked : boolean ,
    id : number
}
interface AddAction {
    type : "Add_Todo";
    payload : {name : string}
}
interface ModifyAction {
    type: "Toggle_Todo" | "Delete_Todo";
    payload: { id: string };
}
interface TodoInputProps {
    dispatch: React.Dispatch<TodoAction>;
}
export type TodoAction = AddAction | ModifyAction


const initialState  = {
    counter: 2,
    todos: [{
        id: 1,
        text: "aa",
        checked: false,
    }]
}

function reducer(state : any , action : TodoAction ) {
  switch (action.type) {
      case "Add_Todo" : {
          const newCounter = state.counter + 1 ;
          const newTodo = {
              id : newCounter ,
              // text : action.text
          }
          console.log("data")
          return {
              ...state,
              arr: [...state.arr, newTodo]
          }
      }
      case "Toggle_Todo":
          return todo.map((todo) => {
              if (todo.id === action.payload.id) {
                  return { ...todo, isComplete: !todo.isComplete };
              }
              return todo;
          });
      case "Delete_Todo":
          return todo.filter((todo) => todo.id !== action.payload.id);
      default:
          return state;
  }
}

const newTodo = (todoName: string): todos => {
    return { id: Number, todoName: todoName, isComplete: false };
};

export const Todolist : React.FC = () => {
    const [todos , dispatch ] = useReducer(reducer , initialState)
    // const [text, setText] = useState(todo.text);

    const renderTodos = todos.map((todo : any) => (
        <Todo
            key={todo.id}
            id={todo.id}
            todoName={todos.todoName}
            checked={todo.checked}
            dispatch={dispatch}
        />
    ))
    console.log(todos);


    return (
        <>
            <TodoInput dispatch={dispatch} />
            {renderTodos}
            </>

   )

}
const TodoInput : React.FC <TodoInputProps> = ({dispatch : any }) => {
    const [todoName , setTodoName] = useState("");
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setTodoName(event.currentTarget.value);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: "Add_Todo", payload: { name: todoName } });
        setTodoName("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type your todo...."
                value={todoName}
                onChange={handleChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}
export default TodoInput;
