export const TodoListItem = ({ todo, onClickComplete, onClickDelete }) => {
    return (
        <div>
            <h3>{ todo.text }</h3>
            { todo.isCompleted && <p>Complete!</p> }
            <button onClick={ () => onClickComplete(todo._id) }>Mark as Complete</button>
            <button onClick={ () => onClickDelete(todo._id)}>Delete</button>
        </div>
    )
}
