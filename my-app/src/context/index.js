
import { UsuarioLogadoProvider } from './usuarioLogado'

const GlobalContext = ({ children }) => {
    return (
        <UsuarioLogadoProvider>{children}</UsuarioLogadoProvider>
    )
}

export default GlobalContext