import './Main.scss'
import mainImage  from '../../assets/img/main-2.jpg';
import tootbrush from '../../assets/img/products/toothbrush.jpg';
import guashakit from '../../assets/img/products/guasha-kit.jpg';
import handcream from '../../assets/img/products/hand-cream.jpeg';
import organickit from '../../assets/img/products/organic-kit.jpg';
import organicsoap from '../../assets/img/products/organic-soap.jpg';
import serum from '../../assets/img/products/serum.jpg';
import desklamp from '../../assets/img/furniture/desk-lamp.jpg';
import minitable from '../../assets/img/furniture/mini-table.jpg';
import mirror from '../../assets/img/furniture/mirror.jpg';
import mueble from '../../assets/img/furniture/mueble.jpg';
import smalltable from '../../assets/img/furniture/small-table.jpeg';
import standtable from '../../assets/img/furniture/stand-table.jpg';
import stand from '../../assets/img/furniture/stand.jpg';
import table from '../../assets/img/furniture/table.jpg';
import woodchair from '../../assets/img/furniture/wood-chair.jpg';
import earth from '../..//assets/img/earth.png';
import ecology from '../..//assets/img/ecology.png';
import gallery1 from '../../assets/img/gallery-1.jpg';
import gallery2 from '../../assets/img/gallery-2.jpg';
import gallery3 from '../../assets/img/gallery-3.jpg';
import map from '../../assets/img/map.png';


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
                  <div className='card-section'>
                    <div className='product-card'>
                      <div className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className='product-image'>
                        <img src={tootbrush} alt=''/>
                      </div>
                      <h3>Cepillo de bambú</h3>
                      <p>Paquete de 2 unidades hecho 100% de materiales ecológicos.</p>
                    </div>
                    <div className='product-card'>
                      <div className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className='product-image'>
                        <img src={handcream} alt=''/>
                      </div>
                      <h3>Crema para manos</h3>
                      <p>Crema hidratante con eucalipto ayuda al cuidado de la piel.</p>
                    </div>
                    <div className='product-card'>
                      <div className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className='product-image'>
                        <img src={serum} alt=''/>
                      </div>
                      <h3>Serum hidratante</h3>
                      <p>Sérum hecho a base de extractos naturales y ácido hialurónico</p>
                    </div>
                    <div className='product-card'>
                      <div className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className='product-image'>
                        <img src={organickit} alt=''/>
                      </div>
                      <h3>Kit de viaje</h3>
                      <p>Incluye peine y cepillo de bambú, jabón orgánico de eucalipto y shampoo tamaño de viaje.</p>
                    </div>
                    <div className='product-card'>
                      <div className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className='product-image'>
                        <img src={organicsoap} alt=''/>
                      </div>
                      <h3>Set de jabones</h3>
                      <p>Paquete de 2 unidades jabón de carbón activado con coco.</p>
                    </div>
                    <div className='product-card'>
                      <div className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className='product-image'>
                        <img src={guashakit} alt=''/>
                      </div>
                      <h3>Kit de skincare</h3>
                      <p>Incluye 2 rodillos y una gua sha</p>
                    </div>
                  </div>
            </div>
            <div className="furniture">
                <h2>Decoracion del hogar</h2>
                <div className='card-section'>
                    <div className='product-card'>
                      <div className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className='product-image'>
                        <img src={woodchair} alt=''/>
                      </div>
                      <h3>Silla de bambú</h3>
                      <p>Disponible en 2 colores: blanco y negro, acabado de bambú</p>
                    </div>
                    <div className='product-card'>
                      <div className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className='product-image'>
                        <img src={smalltable} alt=''/>
                      </div>
                      <h3>Banco pequeño</h3>
                      <p>Ideal para agregar un toque de estilo a tus espacios.</p>
                    </div>
                    <div className='product-card'>
                      <div className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className='product-image'>
                        <img src={table} alt=''/>
                      </div>
                      <h3>Buró</h3>
                      <p>Elaborado con bambú cuenta con 2 compartimientos para guardar cosas.</p>
                    </div>
                    <div className='product-card'>
                      <div className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className='product-image'>
                        <img src={stand} alt=''/>
                      </div>
                      <h3>Cajonera</h3>
                      <p>Paquete de 2 unidades hecho 100% de materiales ecológicos.</p>
                    </div>
                    <div className='product-card'>
                      <div className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className='product-image'>
                        <img src={mirror} alt=''/>
                      </div>
                      <h3>Espejo de pared</h3>
                      <p>Paquete de 2 unidades hecho 100% de materiales ecológicos.</p>
                    </div>
                    <div className='product-card'>
                      <div className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className='product-image'>
                        <img src={desklamp} alt=''/>
                      </div>
                      <h3>Lámpara bambú</h3>
                      <p>Paquete de 2 unidades hecho 100% de materiales ecológicos.</p>
                    </div>
                  </div>
            </div>
        </section>
        <section className="info-section">
            <div className="about-us">
                <h2>¿Por qué nosotros?</h2>
                <div className='mission-section'>
                  <div className="earth">
                      <img src={earth} alt=""/>
                      <p>
                        Compromiso con el medio ambiente garantizando el uso de materiales 100% reciclables.
                      </p>
                  </div>
                  <div className="innovation">
                      <img src={ecology} alt=""/>
                      <p>
                        Innovando con estilo el diseño de nuestros muebles es unico.
                      </p>
                  </div>
                </div>
            </div>
            <div className="gallery">
                <h2>Galería de estilos</h2>
                <div className='gallery-images'>
                  <img src={gallery1} alt=''/>
                  <img src={gallery2} alt=''/>
                  <img src={gallery3} alt=''/>
                </div>
            </div>
            <div className="location">
                <h2>Encuéntranos</h2>
                <div className="map">
                    <img src={map} alt=""/>
                </div>
                <h3>Centro Mayor Centro Comercial</h3>
                <p>Cl. 38A Sur # 34d-51, Bogotá, Colombia</p>
            </div>
        </section>
    </div>
  )
}

export { Main }