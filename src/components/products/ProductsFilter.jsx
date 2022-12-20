import React from 'react';
import './ProductsFilter.scss';

const ProductsFilter = () => {
    return (
        <form data-animation="appear" className='filters_container'>
            <div className="form-group">
                <label htmlFor="category">Categoría</label>
                <select className="form-control" id="category">
                    <option value="all">Todas</option>
                    <option value="1">Categoría 1</option>
                    <option value="2">Categoría 2</option>
                    <option value="3">Categoría 3</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="price">Precio</label>
                <input type="range" name="price" id="price" />
            </div>

            <div className="form-group">
                <input type="search" name="search" id="search" />
            </div>

            <button type="submit" className="btn btn-primary">Filtrar</button>

            <img src="https://media.istockphoto.com/id/1304484797/photo/person-holds-a-smartphone-with-mobile-banking-icons-projection.jpg?b=1&s=170667a&w=0&k=20&c=Ltu8ENR_G2n8QBF90rEjKhIvM1j3emewjZUuSVTLIlI=" alt="placeholder" />
        </form>
    );
}

export default ProductsFilter;
