import { useNavigate } from "react-router";
import Footer from "./Footer"
import Header from "./Header"

function SignOn() {
const navigate = useNavigate();

return (
    <>
    <Header></Header>
    <main className="login_signonMains">
        <section>
            <div id="loginLogo"></div>

            <h1>Criar minha conta</h1>
            <span>Leva menos de 2 minutos. Vamos juntos!</span>

            <form>
                <div><label htmlFor="">Seu nome completo</label>
                <input type="text" name="" id="" placeholder="Ex: Maria da Silva"/>
                <span>Como prefere ser chamado(a)?</span></div>

                <div><label htmlFor="">Email</label>
                <input type="email" name="" id="" placeholder="seu@email.com"/></div>

                <div><label htmlFor="">Criar uma senha</label>
                <input type="password" name="" id="" placeholder="Mínimo de 6 caracteres"/></div>

                <button><div></div>Criar minha conta</button>

                <div>
                <span>Ainda não tem uma conta?</span> <a onClick={() => navigate('/signon')}>Criar conta</a>
                </div>
            </form>
        </section>
    </main>
    <Footer></Footer>
    </>
)
}

export default SignOn