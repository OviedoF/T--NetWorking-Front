import React from 'react'
import './Dashboard.scss'

export default function DashboardContent({auth}) {
  return (
    <div className='dashboard_content'>
        <div className="container_data">
            <div className="membership">
                <h2>Tipo de membresía</h2>
                <img src='https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000' alt='logo' />
                <p>Tiempo de membresía vigente: 54 días</p>
            </div>

            <div className="qr">
                <h2>QR</h2>
                <img src='https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000' alt='logo' />
                <p className="info">Escanea esta imágen con la cámara de un dispositivo compatible con QR.</p>
            </div>
        </div>

        <div className="preview">
            <h2>Previsualización</h2>

            <div className="preview_container">
                <img src={auth.userImage} alt="imágen de perfil" />
                <h3>{auth.username}</h3>
                <h4>CEO Versus APP</h4>

            </div>

            <button>Agregar método de contacto</button>
        </div>
    </div>
  )
}
