export default function Home() {
    return (
        <main>
        {/*Home do site*/}
        <div className="home">
          {/*imagem da pagina inicial */}
          <img src="./public/foto-fundo.jpg" alt="" className='img-main' />
            <div className="frase">
              <h1>Phablo Roberto</h1>
              <p>Cada dia melhorando</p>
            </div>
        </div>
        {/*Falando sobre mim */}
        <div className="sobre_mim" id="sobre_mim">
          <div className="container-sobre">
            <h1>Sobre mim</h1>
          </div>
          <div className="texto_sobre">
            <div className='caixa'>
              <div className='foto_minha'>
                <img src="./public/perfilTest.jpeg" alt=""/>
              </div>
              <div className='texto-me'>
                <h2>Phablo Roberto</h2>
                <p>Olá meu nome é Phablo e tenho 18 anos de idade, sou estudante so IFRN (Instituto Federal do Rio Grande do Norte) faço o curso de Infomática na qual não me arrependo em ter feito.</p>
              </div>
            </div>
          </div>
        </div>

        <div id='Curiosidade' className='curiosidades'>
            <div className="cards">

            </div>
            <div className="cards">
              
            </div>
            <div className="cards">
              
            </div>
            <div className="cards">
              
            </div>
            <div className="cards">
              
            </div>
        </div>
        <div>

        </div>
      </main>
    )
}

