import { useNavigate } from "react-router";
import Footer from "./Footer"
import Header from "./Header"

function Login() {
const navigate = useNavigate();

return (
    <>
    <Header></Header>
    <main className="login_signonMains">
        <section>
            <div id="loginLogo"></div>

            <h1>Entrar na minha conta</h1>
            <span>Que bom ver você de novo!</span>

            <form>
                <div><label htmlFor="">Email</label>
                <input type="email" name="" id="" /></div>

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

export default Login