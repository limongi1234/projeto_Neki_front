import React, { createContext, useState } from 'react'

const UsuarioLogadoContext = createContext()

const UsuarioLogadoProvider = ({ children }) => {
    const [usuarioLogado, setUsuarioLogado] = useState([{}])

    return (
        <UsuarioLogadoContext.Provider
            value={{
                usuarioLogado,
                setUsuarioLogado
            }}
        >
            {children}
        </UsuarioLogadoContext.Provider>
    )
}

export { UsuarioLogadoContext, UsuarioLogadoProvider }