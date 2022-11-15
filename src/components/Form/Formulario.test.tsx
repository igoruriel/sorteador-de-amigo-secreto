import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

describe('O comportamento do Formulario.tsx', () => {
    test('Quando input esta vazio, novos participantes não podem ser adicionados', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );
        //encontrar o input e o botao no document
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const botao = screen.getByRole("button");
    
        //garantir que está no document
        expect(input).toBeInTheDocument();
        expect(botao).toBeDisabled();
    })
    
    test("adicionar um participante caso exista um nome preenchido", () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        //encontrar o input e o botao no document
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const botao = screen.getByRole("button");
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: "Irmão do Jorel"
            }
        })
        // clicar no botão de submit
        fireEvent.click(botao);
        // garantir que o input esteja com o foco ativo 
        expect(input).toHaveFocus();
        // garantir que o input não tenha um valor
        expect(input).toHaveValue("");
    })
    
    test("verifica se nome já está na lista", () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        //encontrar o input e o botao no document
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const botao = screen.getByRole("button");
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: "Irmão do Jorel"
            }
        })
        // clicar no botão de submit
        fireEvent.click(botao);
        // nome repetido
        fireEvent.change(input, {
            target: {
                value: "Irmão do Jorel"
            }
        })
        // clicar no botão de submit
        fireEvent.click(botao);
        // mensagem de erro
        const mensagemDeErro = screen.getByRole('alert');
    
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos')
    
    })
    
    test("mensagem de erro desaparece após os timers", () => {
        jest.useFakeTimers();
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        //encontrar o input e o botao no document
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const botao = screen.getByRole("button");
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: "Irmão do Jorel"
            }
        })
        // clicar no botão de submit
        fireEvent.click(botao);
        // nome repetido
        fireEvent.change(input, {
            target: {
                value: "Irmão do Jorel"
            }
        })
        // clicar no botão de submit
        fireEvent.click(botao);
        // mensagem de erro
        let mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeInTheDocument();
        //espera N segundos
        act(() => {
            /* fire events that update state */
            jest.runAllTimers();
        })
        mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeNull();
    
    })
})

// base de um teste
// test('um nome que que descreve o que vamos testar', () => {
//     // arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)

//     // agimos (realizamos clicks, definimos valores)

//     // afirmamos o que queremos (onde realizamos as expectativas)
// })
