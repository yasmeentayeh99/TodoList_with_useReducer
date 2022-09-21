import {TodoAction, todos} from "../TodoList";
import React from "react";



export interface Props extends todos {
    dispatch: React.Dispatch<TodoAction>;
}
const Todo: React.FC<Props> = ({ dispatch, id, isComplete : any , todoName : any }) => {

    const handleDelete = (id: string) => {
        dispatch({
            type: "Delete_Todo",
            payload: { id: id },
        });
    };

    const handleToggle = (id: string) => {
        dispatch({
            type: "Toggle_Todo",
            payload: { id: id },
        });
    };

    return (
        <div>
            <div>
                <p style={{ textDecoration: `${checked ? "line-through" : ""}` }}>
                    {todoName}
                </p>
            </div>
            <div>
                <button onClick={() => handleToggle(id)}>Toggle</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    );
};

export default Todo


