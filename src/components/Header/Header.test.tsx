import { render, screen } from "@testing-library/react";
import Header from ".";

test('Quando input esta vazio, novos participantes não podem ser adicionados', () => {
    render(<Header />);
    //encontrar a logo pelo alt text no document
    const logo = screen.getByAltText("logo escrito sorteador de amigo secreto");

    //garantir que está no document
    expect(logo).toBeInTheDocument();
})