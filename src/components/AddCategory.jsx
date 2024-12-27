import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {

        setInputValue( target.value );

    }

    const onSubmit = (event) => {

        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return; // Se cumple solo si hemos escrito más de 1 carácter en el Input
        onNewCategory( inputValue.trim() );
        setInputValue('');

    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar GIFs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
