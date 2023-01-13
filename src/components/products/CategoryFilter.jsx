import React, { useState, useEffect } from 'react';
import styles from './ProductsFilter.scss?inline';
import { useSearchParams } from 'react-router-dom';

const CategoryFilter = ({ categories, handleChange, filters }) => {
  const [inputs, setInputs] = useState({});
  const [categoryQuery, setCategoryQuery] = useState(false);
  const [searchParams] = useSearchParams();

  const handleInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.id]: inputs[e.target.id] ? !inputs[e.target.id] : true
    });
  };

  useEffect(() => {

    if(searchParams.get('category')) { 
        setCategoryQuery(searchParams.get('category'));
    }

    const aux = [];
    const keys = Object.keys(inputs);

    keys.forEach(el => {
      if(inputs[el] === true) aux.push(el);
    });

    handleChange('categories', aux);
  }, [inputs]);

  return (
    <>
      {categories.map((el, index) => (
        <div
          className={styles.categorie_item}
          style={{ marginTop: index === 0 ? "0" : "30px" }}
          key={index}
        >
          <input type="checkbox" id={el.name} onChange={(e) => handleInput(e)}  
          defaultChecked={el.name === categoryQuery}/>
          <label htmlFor={el.name} style={{ cursor: "pointer" }}>
            {el.name}
          </label>
        </div>
      ))}
    </>
  );
};

export default CategoryFilter;
