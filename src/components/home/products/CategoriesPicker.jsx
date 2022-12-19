import React from 'react';
import './CategoriesPicker.scss'

const CategoriesPicker = ({categories, setCategorySelected}) => {
    console.log(categories.length)
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
            {categories.map((category, index) => (
                <div key={index} style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                    <p className='clicker_category' onClick={() => setCategorySelected(category._id)}>
                        {category.name}
                    </p>
                    {index > -1 && index < categories.length -1  ? <p style={{margin: '0 10px'}}>/</p> : null}
                </div>
            ))}
        </div>
    );
}

export default CategoriesPicker;
