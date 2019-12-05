import React from "react";


const Todo = (props) => {

    const style = {
        textDecoration: 'line-through'
    };
    return(
        <div onClick={e => props.crossOffItem(props.todo.id)}>
            <>
{props.todo.completed === true ? <h2 style={style}>{props.todo.task}</h2> : <h2>{props.todo.task}</h2>}
            </>
        </div>
        );
}


export default Todo;