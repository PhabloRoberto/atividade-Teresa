import Final from '../componets/footer/footer';
import Curiosidades from '../componets/curiosidades/curiosidades';
import Cards from '../componets/cards/cards';
import Body from '../componets/main/body';
import './style.css'

function Home() {
  return (
    <div>
      
      {/*Cabeça do site */}
      <header>
        <div className='perfil-header'>
          <h2>Phablo Roberto</h2>
          <img src="/public/perfilTest.jpeg" alt="" className='mini-foto'/>
        </div>
        {/*Links do site*/}
        <nav>
          <a href="#Home">Home</a>
          <a href="#sobre_mim">Sobre mim</a>
          <a href="#projetos">Projetos</a>
          <a href="#Contatos">Contato</a>
        </nav>
      </header>
      
      {/*Copo do site */}

      <Body/>
      <div>
        <Curiosidades/>
      </div>
      <div>
        <Cards/>
      </div>
      <div>
        <Final/>
      </div>
    </div>
  )
}

export default Home;
