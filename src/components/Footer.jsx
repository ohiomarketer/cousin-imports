import React from 'react'
import logo from '../assets/static/logof.png'

export const Footer = () => {
  return (
    <footer className="footer">

    <div className="footer-top section">
      <div className="container">

        <div className="footer-brand">
          <ul className="social-list" style={{
            display: 'flex',
            justifyContent: 'space-evenly',

          }}>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

        <div className="footer-link-box">

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">Contactanos</p>
            </li>

            <li>
              <address className="footer-link">
                <ion-icon name="location"></ion-icon>

                <span className="footer-link-text">
                  Avenida Medrano, 951, Buenos Aires, Argentina
                </span>
              </address>
            </li>

            <li>
              <a href="tel:+557343673257" className="footer-link">
                <ion-icon name="call"></ion-icon>

                <span className="footer-link-text">+557343673257</span>
              </a>
            </li>

            <li>
              <a href="mailto:footcap@help.com" className="footer-link">
                <ion-icon name="mail"></ion-icon>

                <span className="footer-link-text">cousinimports@help.com</span>
              </a>
            </li>

          </ul>

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">Mi Informacion</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>

                <span className="footer-link-text">Mi Cuenta</span>
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>

                <span className="footer-link-text">Ver Carrito</span>
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>

                <span className="footer-link-text">Deseados</span>
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>

                <span className="footer-link-text">Comparar</span>
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>

                <span className="footer-link-text">Nuevos productos</span>
              </a>
            </li>

          </ul>

          <div className="footer-list">

            <p className="footer-list-title">Nuestros Horarios</p>

            <table className="footer-table">
              <tbody>

                <tr className="table-row">
                  <th className="table-head" scope="row">Lun - Mar:</th>

                  <td className="table-data">8AM - 10PM</td>
                </tr>

                <tr className="table-row">
                  <th className="table-head" scope="row">Mie:</th>

                  <td className="table-data">8AM - 7PM</td>
                </tr>

                <tr className="table-row">
                  <th className="table-head" scope="row">Vie:</th>

                  <td className="table-data">7AM - 12PM</td>
                </tr>

                <tr className="table-row">
                  <th className="table-head" scope="row">Sab:</th>

                  <td className="table-data">9AM - 8PM</td>
                </tr>

                <tr className="table-row">
                  <th className="table-head" scope="row">Dom:</th>

                  <td className="table-data">Cerrado</td>
                </tr>

              </tbody>
            </table>

          </div>

          <div className="footer-list">

            <p className="footer-list-title">Newsletter</p>

            <p className="newsletter-text">
              Suscribite a nuestro newsletter para tener nuevas ofertas y actualizaciones!
            </p>

            <form action="" className="newsletter-form">
              <input type="email" name="email" required placeholder="Email Address" className="newsletter-input" />

              <button type="submit" className="btn btn-primary">Suscribite</button>
            </form>

          </div>

        </div>

      </div>
    </div>
  </footer>

  )
}
