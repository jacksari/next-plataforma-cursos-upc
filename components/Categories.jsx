import React, { useContext } from 'react';
import pageContext from "../context/pages/pageContext";
import CategoryItem from "./CategoryItem";

function Categories() {
    const { categories } = useContext(pageContext)
    return (
        <div id="courses">
            <section className="container">
                <h3>Categorías de los cursos</h3>
                <div className="row">
                    {
                        categories.map((category, index) => (
                            <CategoryItem category={category} key={index}/>
                        ))
                    }
                </div>
            </section>
        </div>
    );
}

export default Categories;
