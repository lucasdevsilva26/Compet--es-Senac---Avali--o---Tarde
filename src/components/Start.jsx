import './start.css'
import image from '../assets/start/StartImage.png'
import { useNavigate } from 'react-router';

function Start() {

const navigate = useNavigate();

return (
    <main id='startMain'>
<section>
    <div id='resumeContainer'>
        <span id='wellcomeMsg' style={{color:'#2C9664'}}>Bem-vindo(a) à Vida+Fácil</span>

        <h1>
            Cuidar da sua saúde nunca foi tão
            <span style={{color:'#186DAA'}}> simples e tranquilo</span>
            .
        </h1>

    <p>A Vida+Fácil ajuda você a marcar consultas,
acompanhar sua pressão e glicemia, e aprender mais
sobre bem-estar — tudo em um só lugar, feito para
você.</p>

<nav>
    <button onClick={() => navigate('/signon')}>Criar minha conta<div></div></button>
    
    <button onClick={() => navigate('/login')}>Já tenho conta</button>
</nav>

    <span>É grátis e leva menos de 2 minutos.</span>
    </div>

    <img id='startImage' src={image} alt="Imagem de dois idosos sentados em um sofá, utilizando um tablet." />
</section>

<section>

</section>


<section>

</section>
    </main>
)
}

export default Start