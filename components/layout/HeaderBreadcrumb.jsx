import React from 'react';

function HeaderBreadcrumb({title, description}) {
    return (
        <header id="head" className="secondary">
            <div className="container">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </header>
    );
}

export default HeaderBreadcrumb;
