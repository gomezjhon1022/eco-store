import './Main.scss'
import mainImage  from '../../assets/img/main-2.jpg';

function Main () {
  return (
    <div className='main-section'>
      <article>
        <div className='impact-section'>
          <h1>Impacto Ecológico</h1>
          <p>Debido al impacto ambiental siendo las acciones humanas <br/>
          las que  modifican el ambiente, Eco-store <br/>
          se compromete a elaborar sus productos de manera<br/>
          artesanal y con materiales que favorecen al cuidado<br/>
          del medio ambiente.</p>
          <button>Conoce mas</button>
        </div>
        <div className='image-section '>
          <img src={mainImage} alt=""/>
        </div>
      </article>
      <section className="product-section">
            <div className="healthcare">
                <h2>Cuidado de la salud</h2>
            </div>
            <div className="furniture">
                <h2>Decoracion del hogar</h2>
            </div>
        </section>
        <section className="info-section">
            <div className="about-us">
                <h2>¿Por qué nosotros?</h2>
                <div className="earty">
                    <img src="" alt=""/>
                    <p></p>
                </div>
                <div className="innovation">
                    <img src="" alt=""/>
                    <p></p>
                </div>
            </div>
            <div className="gallery">
                <h2>Galería de estilos</h2>
            </div>
            <div>
              <img src='' alt=''/>
            </div>
            <div>
              <img src='' alt=''/>
            </div>
            <div>
              <img src='' alt=''/>
            </div>
            <div className="location">
                <h2>Encuéntranos</h2>
                <div className="map">
                    <img src="" alt=""/>
                </div>
                <p></p>
            </div>
        </section>
    </div>
  )
}

export { Main }