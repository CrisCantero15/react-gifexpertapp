import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    test('Debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect( input.value ).toBe( 'Saitama' );

    });

    test('Debe llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const fnNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ fnNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect( input.value ).toBe('');

        expect( fnNewCategory ).toHaveBeenCalled();
        expect( fnNewCategory ).toHaveBeenCalledTimes(1);
        expect( fnNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('No debe llamar onNewCategory si el input está vacío', () => {

        const fnNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ fnNewCategory } />);
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        // expect( fnNewCategory ).toHaveBeenCalledTimes(0);
        expect( fnNewCategory ).not.toHaveBeenCalled();

    });

});
