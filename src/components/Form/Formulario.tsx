import React, { useRef, useState } from "react";
import { useAdicionaParticipantes } from "../../atom/hooks/useAdicionaParticipante";
import { useMensagemDeErro } from "../../atom/hooks/useMensagemDeErro";

const Formulario = () => {

    const[nome, setNome] = useState<string>('')
    const adicionarNaLista = useAdicionaParticipantes()
    const mensagemDeErro = useMensagemDeErro()
    const inputRef = useRef<HTMLInputElement>(null)

    const adicionaParticipante = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        adicionarNaLista(nome)
        setNome('');
        inputRef.current?.focus();
    }

    return (
        <form onSubmit={adicionaParticipante}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Insira os nomes dos participantes"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <button disabled={!nome}>Adicionar</button>
            {mensagemDeErro && <p role={'alert'} >{mensagemDeErro}</p>}
        </form>
    )
}

export default Formulario