import React from 'react';

const TermsAndConditions = () => {
    return (
        <main style={{textAlign: 'center', marginTop: 100}}>
            <h1 style={{fontSize: 30}}>Términos y condiciones</h1>

            <div className="section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 style={{margin: 30, fontSize: 25}}>Atención al cliente</h2>

                <p style={{lineHeight: 1.5, width: '70%'}}>
Nuestros clientes son lo más importante para nosotros. Por eso nuestro personal está disponible a través de nuestros distintos canales para responder todas tus preguntas, entregarte soporte y ayuda con tus productos, membresía, y cualquier servicio o producto que se ofrezca en nuestra plataforma.

Tenemos la política de responder de manera diligente, respetando los turnos de llegada de las solicitudes de ayuda o atención de nuestros clientes, pero siendo eficientes en nuestras respuestas. Nuestro objetivo hacia ustedes es tener un compromiso de largo plazo, que permita que ustedes se preocupen de hacer negocios mientras nosotros nos preocupamos que el networking sea eficiente y genere las experiencias que el usuario desee.

Tenemos la filosofía de que entre más networking se tiene, más se crece. Por ello es que estamos abiertos a recibir comentarios, sugerencias o solicitudes especiales que apunten a entregar un mejor o nuevos servicios y productos. Puedes hacerlo mediante nuestros distintos canales. ¡Te esperamos!
                </p>
            </div>

            <div className="section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 style={{margin: 30, fontSize: 25}}>Privacidad y seguridad</h2>

                <p style={{lineHeight: 1.5, width: '70%'}}>
                La política de gestión de datos de Biznes se basa en la selección de datos que posea cada usuario. Nuestras membresías contemplan tres tipos de gestión de datos: gratuita, profesional y vip. El tipo de gestión de datos gratuito permite a Biznes poder compartir los datos de las tarjetas virtuales generadas en la plataforma, haciendo uso de ellos para poder generar sinergias con los mercados y/o aumentar las redes o networking mediante distintos canales. Ejemplo de ello es el uso de la agenda Biznes de la plataforma, en donde otros usuarios pueden buscar tarjetas virtuales Biznes. El tipo de gestión de datos profesional corresponde al tipo de gestión de datos gratuito pero modifica la capacidad de ser encontrado en la agenda Biznes: los clientes con este tipo de datos tendrán la opción de escoger si desean ser encontrados en dicha agenda, en caso de seleccionar dicha opción, otros usuarios podrán ver su tarjeta virtual. En caso de no habilitar dicha opción solo verán su nombre, cargo y empresa. El tipo de gestión de datos VIP incluye lo anterior pero modifica la opción de ser encontrado en la agenda Biznes. De este modo, nuestros clientes VIP pueden escoger ser encontrados y que vean su tarjeta Biznes virtual, que puedan ser encontrados pero no vean su tarjeta Biznes virtual y finalmente que no puedan ser encontrados ni vean su tarjeta virtual. Se deja explícito que el link de acceso a la tarjeta Biznes virtual es de acceso público, de modo que aún cuando el usuario bloque la opción en nuestra plataforma podrá ser encontrado si es que alguien tiene la dirección completa. Por ello recomendamos que el link de la tarjeta Biznes virtual  contenga un modificación de su nombre o corresponda a otro texto (ejemplo nombre: Juan Larraín. variantes pueden ser www.Biznes.cl/J-Larrain , www.Biznes.cl/JL, www.Biznes.cl/JLin). La opción de los links dependerá de si no está siendo utilizado previamente.
                </p>
            </div>

            <div className="section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 style={{margin: 30, fontSize: 25}}>Política de envíos</h2>

                <p style={{lineHeight: 1.5, width: '70%'}}>
                Biznes está presente en todo Chile, por lo que hacemos despacho hasta el domicilio que nos indiques siempre y cuando exista un carrier que permita el envío. Estamos domiciliados en la Región Metropolitana, por lo que los envíos dentro de esta región poseen un cobro fijo de $3,500. Los envíos a regiones se envían con cargo al receptor. 
                Seguimiento. Nuestra plataforma cuenta con un sistema de seguimiento de tu orden, el cual se va actualizando mientras va avanzando en sus etapas. Cuando se haga el envío le llegará al cliente un correo con el número de seguimiento y el courrier utilizado.
                </p>
            </div>

            <div className="section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 style={{margin: 30, fontSize: 25}}>Política de cambios y devoluciones</h2>

                <p style={{lineHeight: 1.5, width: '70%'}}>
                Debido a la customización de los productos Biznes, no realizamos modificaciones o cambios posteriores a la etapa de impresión, toda vez que se cuente con la aprobación manual o automática de los datos a ser impresos en los productos Biznes. Sabemos que esto puede causar inconvenientes, sin embargo esperamos comprensión suficiente por parte de nuestros clientes puesto que cada producto es asignado unica y exclusivamente a su tarjeta Biznes virtual. Por ello, hacemos el llamado a completar y revisar sus datos de contacto de manera correcta toda vez que se requiera la impresión de aquellos en algún producto Biznes
                </p>
            </div>

            <div className="section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 style={{margin: 30, fontSize: 25}}>Métodos de pago</h2>

                <ul>
                    <li style={{lineHeight: 1.5}}>
                        Transferencias electrónicas
                    </li>

                    <li style={{lineHeight: 1.5}}>
                        Mercado Pago
                    </li>
                </ul>
            </div>
            
        </main>
    );
}

export default TermsAndConditions;
