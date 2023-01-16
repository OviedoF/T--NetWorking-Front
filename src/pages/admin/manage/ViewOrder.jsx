import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../../../env';
import './ViewOrder.scss';

const ViewOrder = () => {
    const {id} = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        axios.get(`${env.API_URL}/payments/orders/${id}`)
        .then(res => {
            setOrder(res.data);
        })
        .catch(err => console.log(err));
    }, [id]);

    if(order) return (
        <main style={{padding: 60}} id='view_order_container'>
            <h1>Pedido {order._id}</h1>

            <h2>Estado: {order.state}</h2>

            <h2>Comprador: {order.buyer.firstName} {order.buyer.lastName}</h2>
            <h3>Email: {order.buyer.email}</h3>

            <h2>Método de pago: {order.paymentMethod}</h2>

            <h2>{order.cart.length} Producto(s):</h2>
            
            <ul>
                {order.cart.map((product, index) => (
                    <li key={index}>
                        <h3>Nombre: {product.name}</h3>
                        <p>Cantidad: {product.quantity}</p>
                        <p>Pago: {product.price}</p>
                        <p>Color: {product.colorSelected}</p>

                        <h3 style={{marginTop: 30, fontSize: 20, marginLeft: 20}}>Imágen principal: </h3>
                        <img src={product.principalImage} alt={product.name} />

                        <h3>Imágenes anidadas: </h3>
                        {product.files.map((file, index) => (
                            <img key={index} src={file} alt={product.name} />
                        ))}

                        {product.linkToRedirect && <p>
                            Link a su QR: <a href={product.linkToRedirect} target="_blank" rel="noreferrer">{product.linkToRedirect}</a>    
                        </p>}

                        <hr />
                    </li>
                ))}
            </ul>


        </main>
    );
}

export default ViewOrder;
