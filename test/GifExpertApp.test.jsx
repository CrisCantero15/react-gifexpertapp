import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => { 

    test('Debe mostrar una categoría en el estado inicial', () => {

        render( <GifExpertApp /> );
        expect( screen.getByRole('heading', { level: 3 }).innerHTML ).toContain( 'one punch' );

    });

    test('Debe mostrar más de una categoría al mandar el formulario', () => {

        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Dragon Ball' } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: 'Saitama' } });
        fireEvent.submit(form);
        
        expect( screen.getAllByRole('heading', { level: 3 }).length ).toBe( 3 );

    });

    test('No debe mostrar categorías repetidas', () => {

        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: 'Dragon Ball' } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: 'Dragon Ball' } });
        fireEvent.submit(form);
        
        expect( screen.getAllByRole('heading', { level: 3 }).length ).toBe( 2 );

    });

})