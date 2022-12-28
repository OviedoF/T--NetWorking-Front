import React from 'react';
import './CategoriesPicker.scss'

const CategoriesPicker = ({categories, setCategorySelected}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
            {categories.map((category, index) => (
                <div key={index} style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                    <p className='clicker_category' onClick={() => setCategorySelected(category._id)}>
                        {category.name}
                    </p>
                    {index > -1 ? <p style={{margin: '0 10px'}}>/</p> : null}
                </div>
            ))}

            <p style={{marginTop: 30, marginLeft: 0}}
            onClick={() => setCategorySelected(undefined)} className='clicker_category'>Todos</p>
        </div>
    );
}

export default CategoriesPicker;
