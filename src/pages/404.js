import React from 'react'
import Cartman_404 from '../layouts/assets/cartman_404.gif';

const NotFoundPage = () => (
  <div className="valign-wrapper" style={{height: '100vh'}}>
    <div className="container center-align">
    <h1>404</h1>
    <h5>NÃO ENCONTRADO</h5>
      <div className="card horizontal valign-wrapper">
        <div className="card-image">
          <img src={Cartman_404}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            
            <p>Você acabou de acertar uma rota que não existe ... a tristeza.</p>
          </div>
          <div className="card-action">
            <a className="blue-text" href="/portfolio/">pagina principal</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NotFoundPage
