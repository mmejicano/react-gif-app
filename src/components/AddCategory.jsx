import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [input, setInput] = useState('');

    const onInputChange = ({ target }) => {
        setInput(target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()

        // validacion
        if (input.trim().length <= 1) return
        onNewCategory(input.trim())

        // reset input
        setInput('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={input}
                onChange={onInputChange}
            />
        </form>
    )
}
