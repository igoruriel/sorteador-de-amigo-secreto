import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

test('Quando input esta vazio, novos participantes não podem ser adicionados', () => {
    render(<Formulario/>);
    //encontrar o input e o botao no document
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
    const botao = screen.getByRole("button");

    //garantir que está no document
    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();
})

// test('um nome que que descreve o que vamos testar', () => {
//     // arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)

//     // agimos (realizamos clicks, definimos valores)

//     // afirmamos o que queremos (onde realizamos as expectativas)
// })
