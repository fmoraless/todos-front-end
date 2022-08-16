import { useState } from 'react';

export const NewTodoForm = ({ onClickCreate }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a new Todo..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button onClick={() => {
                onClickCreate(inputValue);
                setInputValue('');
            }}>Create</button>
        </div>
    )
}
