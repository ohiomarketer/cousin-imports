import React, { useEffect, useState } from 'react';
import men from '../assets/static/bg1.png';
import women from '../assets/static/bg2.png';
import kids from '../assets/static/bg3.png';
import herobanner from '../assets/static/hero-bannerx.png';

export const Banner = () => {
  return (
    <>
    <section className="section hero" style={{
      background: 'url(' + herobanner + ')',
    }}> 
        <div className="container">

          <h2 className="h1 hero-title" style={{ fontSize: '4rem'}}>
             <strong>Nuevas Ofertas</strong>
          </h2>

          <p className="hero-text" style={{ fontSize: '1.5rem'}}>
            Aprovecha las increibles ofertas que tenemos para vos desde el 10 de Enero hasta el 15 de Febrero.
            Comprando por transferencia bancaria tenes un 15% de descuento adicional.
          </p>

          <button className="btn btn-primary">
            <span>Comprar ya</span>

            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </button>

        </div>
      </section>
        <Collections />
      </>
  )
}

const Collections = () => {

    const [collection, setCollection] = useState([]);

    const collectionList = [
        {
            title: 'Men Collection',
            link: '#',
            image: men,
            color: '#110d18'
        },
        {
            title: 'Women Collection',
            link: '#',
            image: women,
            color: '#180d0d'
        },
        {
            title: 'Kids Collection',
            link: '#',
            image: kids,
            color: '#111b0e'
        }
    ];

    useEffect(() => {
        setCollection(collectionList);
    }, []);

    return (
        <section className="section collection">
        <div className="container">

          <ul className="collection-list has-scrollbar">
            {collection.map((collection, index) => (
                <li key={index}>
                    <div className="collection-card" style={{
                      background: 'url(' + collection.image + ')',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'
                  }}>
                        <h3 className="h4 card-title" style={{ color: collection.color }}>{collection.title}</h3>
                        <a href={collection.link} className="btn btn-secondary" style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        }}>
                            <span>Explorar Todo</span>
                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>
                    </div>
                </li>
            ))}
          </ul>

        </div>
      </section>
    )
}