import './style.css'

function Home() {
  return (
    <div>
      <header>
        <div className='perfil-header'>
          <h2>Phablo Roberto</h2>
          <img src="/public/perfilTest.jpeg" alt="" className='mini-foto'/>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Sobre mim</a>
          <a href="#sobre_mim">Projetos</a>
          <a href="#">Contato</a>
        </nav>
      </header>

      <main>
        <div className="home">
          <img src="./public/perfilTest.jpeg" alt="" />
          <div className="frase">
            <h1>Phablo Roberto</h1>
            <p>Cada dia melhorando</p>
          </div>
        </div>

        <div className="sobre_mim" id="sobre_mim">
          <h1>Sobre mim</h1>
          <div className="container1">
            <div className="mini-texto">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi laborum, totam quos perspiciatis quaerat accusantium iste in tempora incidunt aspernatur rerum labore autem ex error sed ipsa rem laudantium?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id temporibus, eaque ab minima magni sit alias quo quis optio, sed expedita quam vel ipsa nemo non odio odit unde cum.</p>
            </div>
            <img src="/public/perfilTest.jpeg" alt="" />
          </div>
        </div>

        <div>

        </div>
      </main>
    </div>
  )
}

export default Home;
