import React, { use } from 'react';
import { NavLink, } from 'react-router';
const categorypromise = fetch('/categories.json')
.then((res) => res.json());
console.log(categorypromise)
const Categories = () => {
    const categories = use(categorypromise);
    return (
        <div>
            <h2 className='font-bold'>All Categories{categories.length}</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
       categories.map(categories=><NavLink key={categories.id}
        className='btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent' 
          to={`./category/${categories.id}`}>{categories.name}</NavLink>)
                     
                  
                }
            </div>
        </div>
    );
};

export default Categories;