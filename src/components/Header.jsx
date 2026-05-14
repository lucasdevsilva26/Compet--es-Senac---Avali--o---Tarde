import { useNavigate } from 'react-router'
import './header.css'

function Header() {
    const navigate = useNavigate();

    return (
<header>
    <div id="logoContainer">
        <span id='headerIcon' ></span>
        <h1 >Vida<span style={{color:'#2C9664'}}>+</span>Fácil</h1>
    </div>

    <nav id="contentsContainer">
        <button onClick={() => navigate('/')}>Início</button>

        <button onClick={() => navigate('/contents')}>Conteúdos</button>
    </nav>

    <nav id="accountContainer">
        <button id='loginButton' onClick={() => navigate('/login')}><div id='loginIcon'></div>Entrar</button>

        <button id='signonButton' onClick={() => navigate('/signon')}><div id='signonIcon'></div>Criar Conta</button>
    </nav>
</header>
    )
}

export default Header