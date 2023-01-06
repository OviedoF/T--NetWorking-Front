import React from 'react';

const SelectCategory = ({categories, setForm, form}) => {
    return (
        <div className='form_section' style={{flexDirection: 'column'}}>
            <h2 style={{textAlign: 'center', fontSize: 14, width: '100%', fontWeight: '600'}}>Categoría</h2>
            <div className="categories-container">
                {
                    categories.map(category => (
                        <div className="category-picker" key={category._id} onClick={() => setForm({...form, category: category._id})}
                        id={category._id === form.category ? 'category-picked' : ''} style={{color: 'black', marginTop: 20}}>
                            {category.name}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SelectCategory;
