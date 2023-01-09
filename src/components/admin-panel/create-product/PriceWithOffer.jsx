import React, { useState } from 'react';

const PriceWithOffer = ({ setForm, form }) => {
    const [isOffer, setIsOffer] = useState(false);

    return (
        <>
           <div className="form_section">
                <div className="form-group" style={{width: '100%'}}>
                        <label htmlFor="isOffer" style={{fontSize: 20}}>¿Este producto está en oferta?</label>
                        <input type="checkbox" name="isOffer" id="isOffer" style={{cursor: 'pointer',height: 25, width: 25}} 
                        onChange={(e) => setIsOffer(e.target.checked)}/>
                </div> 

                {isOffer && <>
                    <div className="form-group" style={{width: '100%'}}>
                        <label htmlFor="priceWithOffer">Escriba el precio del producto luego de aplicar la oferta</label>
                        <input onChange={(e) => setForm({ ...form, priceWithOffer: e.target.value })} type="number" className="form-control" id="priceWithOffer" placeholder="Enter price with offer" />
                    </div>
                    
                    {!form.priceWithOffer && <p style={{color: 'var(--card-color)', fontSize: 25}}>${form.price}</p>}

                    {form.priceWithOffer && <p style={{color: 'var(--card-color)', fontSize: 25}}>
                        ${form.priceWithOffer}
                        <span style={{textDecoration: 'line-through', color: 'var(--card-color)', fontSize: 20, marginLeft: 10}}>${form.price}</span>
                    </p>}

                </>}
           </div>
        </>

    );
}

export default PriceWithOffer;
