import React from 'react';
import ContactContainer from '../components/home/contact/ContactContainer';
import ContactForm from '../components/home/contact/ContactForm';
import './AboutWe.scss'

const AboutWe = () => {
    return (
        <main style={{marginTop: 100}} id='main_aboutwe'>
            <h1 style={{textAlign: 'center', fontSize: 40, marginBottom: 40}}>Acerca de Biznes</h1>

            <div className="content" style={{display: 'flex', marginBottom: 50}}>
                <img src="https://www.ceupe.com/images/easyblog_articles/3119/empresa-conjunta.jpg" alt="imagen" style={{minWidth: '50%', objectFit: 'cover'}}/>

                <p style={{padding: 30, textAlign: 'left', fontSize: 20, lineHeight: 1.3, }}>
                    No muchos saben, pero la producción de papel es una de las actividades industriales con mayor impacto negativo para el medio ambiente, por lo que es necesario contar con soluciones que permitan seguir generando redes de contacto (networking) y mitiguen los efectos adversos en el ecosistema. 
                    <br></br>
                    <br></br>
                    Con este objetivo hemos creado Biznes, una plataforma que permite hacer networking de manera digital centralziando múltiples canales de contacto digitales en un solo lugar: tu tarjeta de Biznes virtual.
                    <br></br>
                    <br></br>
                    Con diseño vanguardista, simple y minimalista, hemos utilizado la tecnología de códigos QR e inalámbrica de alta frecuencia y de corto alcance para poder compartir tus datos de contacto, redes sociales y tus paginas web. 
                    <br></br>
                    <br></br>
                    Además, queremos contarte que estamos en constante desarrollo y buscando incorporar funciones adicionales que permitan tener una experiencia única y completa. Prueba nuestros productos Biznes y procura editar tu tarjeta constantemente, así podrás estar al día con nuestras periódicas actualizaciones.
                    <br></br>
                    <br></br>
                    ¡Confía en nosotros! Muchos Founders y Pymes ya lo están haciendo. 
                    <br></br>
                    <br></br>
                    ¿Por qué tu no?
                </p>
            </div>

            <ContactContainer />
        </main>
    );
}

export default AboutWe;
