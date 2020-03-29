import React from 'react'

const Product = (props) => {
    return (
        <div>
            <article className="product">
                <h1>{props.name}</h1>
            </article>
        </div>
    )
}

export default Product
