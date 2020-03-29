import React from 'react'

const Article = (props) => {
    return (
        <div>
            <article>
                <h3>{props.title}</h3>
                <span>{props.author}</span>
                <p>{props.text}</p>
            </article>
        </div>
    )
}

export default Article
