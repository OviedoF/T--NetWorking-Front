import React from 'react';

const ProductData = ({ setForm, form }) => {
    return (
        <>
            <div className='form_section'>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="form-control" id="name" placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <textarea onChange={(e) => setForm({ ...form, description: e.target.value })} className="form-control" id="description" rows="3"></textarea>
                </div>
            </div>

            <div className='form_section'>
                <div className="form-group">
                    <label htmlFor="price">Precio</label>
                    <input onChange={(e) => setForm({ ...form, price: e.target.value })} type="number" className="form-control" id="price" placeholder="Enter price" />
                </div>

                <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                    <input onChange={(e) => setForm({ ...form, stock: e.target.value })} type="number" className="form-control" id="stock" placeholder="Enter stock" />
                </div>

                <div className="form-group" style={{width: '100%'}}>
                        <label htmlFor="requiredQR" style={{fontSize: 20}}>¿Este producto requiere de un código QR?</label>
                        <input type="checkbox" name="requiredQR" id="requiredQR" style={{cursor: 'pointer',height: 25, width: 25}} 
                        onChange={(e) => setForm({...form, requiredQR: e.target.checked})}/>
                </div> 

                <div className="form-group" style={{width: '100%'}}>
                        <label htmlFor="requireImageEditable" style={{fontSize: 20}}>¿Este producto requiere de una imágen, es decir, es editable?</label>
                        <input type="checkbox" name="requireImageEditable" id="requireImageEditable" style={{cursor: 'pointer',height: 25, width: 25}} 
                        onChange={(e) => setForm({...form, requireImageEditable: e.target.checked})}/>
                </div> 
            </div>
        </>

    );
}

export default ProductData;
