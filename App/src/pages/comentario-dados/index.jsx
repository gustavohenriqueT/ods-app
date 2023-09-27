import Footer from "../../components/Footer"
import './style.css'
function Dados() {
    function handleSignupForm() {
        console.log('Voce Enviou')
    } 
    return (
       <>
       <div>
        <form className="form" onSubmit={handleSignupForm}>
            <h1>Comente</h1>
            <textarea name="" id="" cols="30" rows="10" placeholder="Faça um Comentário..."></textarea>
            <button type="submit"> Enviar</button>
        </form>
       </div>
       <Footer/>
       </>
    )
}

export default Dados