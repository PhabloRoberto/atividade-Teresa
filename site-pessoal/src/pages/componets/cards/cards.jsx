function Cards() {
    return(
        <div className="fundo">
            <div className="curiosidades-h1">
                <div className="a">
                <h1>projetos</h1>

                </div>

            </div>
            <div class="card-container">
  <div class="card">
    <img src="./././public/foto-card.png" alt="Imagem 1" />
    <p>Jogo da Memória</p>
    <a className='buttom' href="https://github.com/20201174010029/Jogo_Da_M3moria"><button type="button" class="btn btn-outline-dark">Repositório</button></a>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/150" alt="Imagem 2" />
    <p>Aroma Nordeste</p>
    <a className='buttom' href="https://github.com/eduardandrde/Aroma-Nordeste"><button type="button" class="btn btn-outline-dark">Repositório</button></a>
  </div>
  <div class="card">
    <img src="./././public/foto-card1.png" alt="Imagem 3" />
    <p>Jogo da Forca</p>
    <a className='buttom' href="https://github.com/PhabloRoberto/jogo_da_forca"><button type="button" class="btn btn-outline-dark">Repositório</button></a>
  </div>
  
</div>

        </div>
    )
}

export default Cards