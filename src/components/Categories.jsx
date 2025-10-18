import React, { use } from 'react';
const categorypromise = fetch('/categories.json')
.then((res) => res.json());
console.log(categorypromise)
const Categories = () => {
    const categories = use(categorypromise);
    console.log(categories)
    return (
        <div>
            <h2 className='font-bold'>All Categories{categories.length}</h2>
        </div>
    );
};

export default Categories;