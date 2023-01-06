import React from 'react';
import './CategoriesPicker.scss'

const CategoriesPicker = ({categories, setCategorySelected, windowsSize}) => {
    if(windowsSize > 768) return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
            {categories.map((category, index) => (
                <div key={index} style={{display: 'flex', justifyContent: 'center', marginTop: '30px', width: '100%'}}>
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

    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
            <select onChange={(e) => setCategorySelected(e.target.value)} style={{background: '#cccccc80', border: 'none', width: '80%', padding: '10px 20px'}}>
                <option style={{padding: '10px'}} value={undefined}>Todos</option>
                {categories.map((category, index) => (
                    <option style={{padding: '10px'}} key={index} value={category._id}>{category.name}</option>
                ))}
            </select>
        </div>
    );
}

export default CategoriesPicker;
