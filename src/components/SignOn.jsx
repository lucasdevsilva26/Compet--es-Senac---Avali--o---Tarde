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
                <input type="text" name="" id="" />
                <span>Como prefere ser chamado(a)?</span></div>

                <div><label htmlFor="">Senha</label>
                <input type="passwor" name="" id="" /></div>

                <button><div></div>Entrar</button>

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