import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

    const title = "Saitama";
    const url = "https://one-punch.com/saitama.jpg";

    test('Debe hacer match con el snapshot', () => {

        render(<GifItem title={ title } url={ url } />);
        expect( screen ).toMatchSnapshot();

    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={ title } url={ url } />);
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test('Debe mostrar el título en el componente', () => {

        render(<GifItem title={ title } url={ url } />);
        expect( screen.getByText( title ) ).toBeTruthy();

    });

})