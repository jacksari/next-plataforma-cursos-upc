import React from 'react';

function CategoryItem({category}) {
    const { nombre, descripcion } = category;
    return (
        <div className="col-md-4">
            <div className="featured-box">
                <div className="text">
                    <h3>{ nombre }</h3>
                    { descripcion }
                </div>
            </div>
        </div>
    );
}

export default CategoryItem;
